import React from 'react';
import { MessageSquare } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700">Select a conversation</h2>
        <p className="text-gray-500">Choose a chat from the sidebar to start messaging</p>
      </div>
    </div>
  );
}