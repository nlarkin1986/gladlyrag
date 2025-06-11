"use client";

import { useChatUI } from "@llamaindex/chat-ui";
import { StarterQuestions } from "@llamaindex/chat-ui/widgets";
import { getConfig } from "../lib/utils";

export function ChatStarter({ className }: { className?: string }) {
  const { append, messages, requestData } = useChatUI();
  const starterQuestions =
    getConfig("STARTER_QUESTIONS") ??
    JSON.parse(process.env.NEXT_PUBLIC_STARTER_QUESTIONS || JSON.stringify([
      "Compare Gladly to Gorgias",
      "Compare Gladly to Zendesk",
      "What are Gladly's key differentiators?",
      "Tell me about Sidekick Voice capabilities"
    ]));

  if (starterQuestions.length === 0 || messages.length > 0) return null;
  return (
    <StarterQuestions
      append={(message) => append(message, { data: requestData })}
      questions={starterQuestions}
      className={className}
    />
  );
}
