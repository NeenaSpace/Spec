// src/components/EditableCard.tsx
import React, { useState } from 'react';

const EditableCard: React.FC<{ onSave: (title: string, text: string, image: string) => void }> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(title, text, image);
  };

  return (
    <div className="w-[200px] bg-white rounded-lg shadow-md p-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border-b mb-2 p-1 text-lg font-semibold"
      />
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-24 border p-1 mb-2"
      />
      <input type="file" onChange={handleImageUpload} className="mb-2" />
      {image && <img src={image} alt="Uploaded" className="w-full h-24 object-cover mb-2" />}
      <button onClick={handleSave} className="px-4 py-1 bg-blue-500 text-white rounded">
        Save
      </button>
    </div>
  );
};

export default EditableCard;