"use client";

import { ChatMessage } from "@llamaindex/chat-ui";
import { Sparkles } from "lucide-react";

export function ChatMessageAvatar() {
  return (
    <ChatMessage.Avatar>
      <div className="w-8 h-8 rounded-full bg-[#009B00] flex items-center justify-center">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
    </ChatMessage.Avatar>
  );
}
