import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@llamaindex/chat-ui/styles/editor.css";
import "@llamaindex/chat-ui/styles/markdown.css";
import "@llamaindex/chat-ui/styles/pdf.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gladly RAG Assistant",
  description: "AI-powered sales assistant for Gladly representatives",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
