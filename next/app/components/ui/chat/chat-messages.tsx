"use client";

import { ChatMessage, ChatMessages, useChatUI } from "@llamaindex/chat-ui";
import { ChatMessageAvatar } from "./chat-avatar";
import { ChatMessageContent } from "./chat-message-content";
import { ChatStarter } from "./chat-starter";
import { ComponentDef } from "./custom/events/types";

export default function CustomChatMessages({
  componentDefs,
  appendError,
}: {
  componentDefs: ComponentDef[];
  appendError: (error: string) => void;
}) {
  const { messages } = useChatUI();

  return (
    <ChatMessages>
      <ChatMessages.List>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            isLast={index === messages.length - 1}
          >
            <ChatMessageAvatar />
            <ChatMessageContent
              componentDefs={componentDefs}
              appendError={appendError}
            />
            <ChatMessage.Actions />
          </ChatMessage>
        ))}
        <ChatMessages.Empty
          heading="Welcome to Gladly Sales Assistant!"
          subheading="I'm here to help you find product information, answer customer questions, and close more deals."
        />
        <ChatMessages.Loading />
      </ChatMessages.List>
      <ChatStarter />
    </ChatMessages>
  );
}
