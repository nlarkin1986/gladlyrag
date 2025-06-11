"use client";

import { Markdown } from "./markdown";
import { SourceData } from "@llamaindex/chat-ui/widgets";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { CopyButton } from "./copy-button";

export function EnhancedMarkdown({
  content,
  sources,
}: {
  content: string;
  sources?: SourceData;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Apply enhanced styles to response sections
      const headings = containerRef.current.querySelectorAll("h2, h3");
      headings.forEach((heading) => {
        const headingElement = heading as HTMLElement;
        const headingText = headingElement.textContent?.toLowerCase() || "";
        
        // Create a wrapper div for the section
        const wrapper = document.createElement("div");
        wrapper.className = "response-section-wrapper";
        
        // Determine section type and add appropriate classes
        if (headingText.includes("answer")) {
          wrapper.classList.add("response-section", "answer");
        } else if (headingText.includes("proof points") || headingText.includes("key proof")) {
          wrapper.classList.add("response-section", "proof-points");
        } else if (headingText.includes("talk track")) {
          wrapper.classList.add("response-section", "talk-track");
        } else if (headingText.includes("discovery")) {
          wrapper.classList.add("response-section", "discovery");
        } else if (headingText.includes("risks") || headingText.includes("watch")) {
          wrapper.classList.add("response-section", "risks");
        } else if (headingText.includes("sources")) {
          wrapper.classList.add("response-section", "sources");
        } else {
          wrapper.classList.add("response-section");
        }
        
        // Wrap the heading and its following content
        const parent = headingElement.parentNode;
        if (parent) {
          parent.insertBefore(wrapper, headingElement);
          wrapper.appendChild(headingElement);
          
          // Move all following siblings until the next heading into the wrapper
          let nextSibling = wrapper.nextSibling;
          while (nextSibling && !["H2", "H3", "H4"].includes((nextSibling as Element).tagName)) {
            const temp = nextSibling.nextSibling;
            wrapper.appendChild(nextSibling);
            nextSibling = temp;
          }
          
          // Add copy button to the section header
          if (!headingText.includes("sources")) {
            const copyButtonContainer = document.createElement("div");
            copyButtonContainer.className = "copy-button-container";
            headingElement.appendChild(copyButtonContainer);
            
            // Get section text content for copying
            const sectionText = wrapper.textContent || "";
            
            // Render React component into the container
            const root = createRoot(copyButtonContainer);
            root.render(<CopyButton text={sectionText} />);
          }
        }
      });

      // Enhance list formatting
      const lists = containerRef.current.querySelectorAll("ul, ol");
      lists.forEach((list) => {
        list.classList.add("enhanced-list");
      });

      // Style strong tags within the content
      const strongTags = containerRef.current.querySelectorAll("strong");
      strongTags.forEach((tag) => {
        tag.classList.add("text-gladly-green");
      });
    }
  }, [content]);

  return (
    <div ref={containerRef} className="enhanced-markdown-container animate-message-in">
      <Markdown content={content} sources={sources} />
    </div>
  );
}