"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "../../button";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      size="sm"
      className={`h-8 px-2 text-xs hover:bg-gladly-green-light ${className}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 mr-1 text-gladly-green" />
          <span className="text-gladly-green">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3 mr-1" />
          <span>Copy</span>
        </>
      )}
    </Button>
  );
}