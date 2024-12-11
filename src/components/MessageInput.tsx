import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ImageUpload } from './media/ImageUpload';
import { VoiceCall } from './media/VoiceCall';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  onSendImage: (file: File) => void;
  onStartCall: () => void;
  onEndCall: () => void;
  isCallActive: boolean;
}

export function MessageInput({
  onSendMessage,
  onSendImage,
  onStartCall,
  onEndCall,
  isCallActive
}: MessageInputProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200">
      <div className="flex items-center space-x-4">
        <ImageUpload onImageSelect={onSendImage} />
        <VoiceCall
          isCallActive={isCallActive}
          onStartCall={onStartCall}
          onEndCall={onEndCall}
        />
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}