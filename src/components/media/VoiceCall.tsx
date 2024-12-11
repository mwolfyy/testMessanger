import React from 'react';
import { Phone, PhoneOff } from 'lucide-react';

interface VoiceCallProps {
  isCallActive: boolean;
  onStartCall: () => void;
  onEndCall: () => void;
}

export function VoiceCall({ isCallActive, onStartCall, onEndCall }: VoiceCallProps) {
  return (
    <button
      onClick={isCallActive ? onEndCall : onStartCall}
      className={`p-2 rounded-full ${
        isCallActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      {isCallActive ? (
        <PhoneOff className="w-5 h-5 text-white" />
      ) : (
        <Phone className="w-5 h-5 text-white" />
      )}
    </button>
  );
}