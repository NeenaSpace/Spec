// src/app/new-page/page.tsx
"use client";
import Card from '../../components/card/Card';
import Button from '../../components/button/button';
import EditableCard from '../../components/card/EditableCard';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HomeButton from '../../components/button/HomeButton';


export default function NewPage() {
    const router = useRouter();
    const [cards, setCards] = useState([{ id: 1, title: 'Hiking day!', text: 'Body text...', imageSrc: '/image/logDaily.jpeg' }]);
    const [isEditing, setIsEditing] = useState(false);

    const handleAddCard = () => {
        setIsEditing(true);
    };

    const handleSaveCard = (title: string, text: string, image: string) => {
        const newCard = {
          id: cards.length + 1,
          title,
          text,
          imageSrc: image || '/image/logDaily.jpeg',
        };
        setCards([...cards, newCard]);
        setIsEditing(false); 
    };
    
    const handleMore = () => {
        router.push('/more_page'); 
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
            <div className="space-y-4">
                {cards.map((card) => (
                    <Card key={card.id} title={card.title} text={card.text} imageSrc={card.imageSrc} />
                ))}
            </div>

            {isEditing && <EditableCard onSave={handleSaveCard} />}

            <div className="flex space-x-4 mt-4">
                <Button label="Add" onClick={handleAddCard} variant="secondary" />
                <Button label="More" onClick={handleMore} variant="primary" />
            </div>
            
            <div className="mt-auto flex justify-center w-full py-4 mb-6">
                <HomeButton />
            </div>

        </div>
    );
}