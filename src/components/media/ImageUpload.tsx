import React, { useRef } from 'react';
import { Image } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <Image className="w-5 h-5 text-gray-500" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
        className="hidden"
      />
    </>
  );
}