import type { Conversation, Message } from '../types';

export const initialConversations: Conversation[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    lastMessage: 'See you tomorrow!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    unread: 2,
    online: true,
    phoneNumber: '+1234567890'
  },
  {
    id: '2',
    name: 'Bob Smith',
    lastMessage: 'How about lunch?',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
    unread: 0,
    online: false,
    phoneNumber: '+1987654321'
  },
  {
    id: '3',
    name: 'Carol Williams',
    lastMessage: 'The project is done!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    unread: 1,
    online: true,
    phoneNumber: '+1122334455'
  }
];

export const initialMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      text: 'Hey there!',
      sender: 'Alice Johnson',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      isOwn: false,
      type: 'text'
    },
    {
      id: '2',
      text: 'Hi Alice! How are you?',
      sender: 'You',
      timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000),
      isOwn: true,
      type: 'text'
    },
    {
      id: '3',
      text: 'See you tomorrow!',
      sender: 'Alice Johnson',
      timestamp: new Date(),
      isOwn: false,
      type: 'text'
    }
  ],
  '2': [
    {
      id: '1',
      text: 'How about lunch?',
      sender: 'Bob Smith',
      timestamp: new Date(),
      isOwn: false,
      type: 'text'
    }
  ]
};