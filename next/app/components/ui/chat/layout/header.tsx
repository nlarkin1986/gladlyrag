"use client";

import { MessageSquare, HelpCircle } from "lucide-react";

export function DefaultHeader() {
  return (
    <div className="flex items-center justify-between p-4 px-6 bg-white border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#009B00] rounded-lg flex items-center justify-center">
          <MessageSquare className="size-5 text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-lg">Gladly Sales Assistant</h1>
          <p className="text-sm text-gray-600">AI-powered support for sales representatives</p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <a
          href="https://www.gladly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-[#009B00] transition-colors"
        >
          About Gladly
        </a>
        <button
          className="flex items-center gap-2 rounded-full bg-[#009B00] hover:bg-[#007700] text-white px-4 py-2 text-sm font-medium transition-colors"
        >
          <HelpCircle className="size-4" />
          Help & Resources
        </button>
      </div>
    </div>
  );
}
