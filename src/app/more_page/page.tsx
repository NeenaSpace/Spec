// src/app/more-cards/page.tsx
"use client";

import SmallCard from '../../components/card/SmallCard';
import { useRouter } from 'next/navigation';
import Button from '../../components/button/button';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


export default function MoreCards() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const handleBack = () => {
        router.push('/new_page');
    };

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-b flex flex-col items-center pt-12 px-4">
    
          {/* 标题 */}
          <h1 className="text-3xl font-bold text-gray-200 mb-8">Explore More</h1>
    
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs('2024-11-05')} className="w-full bg-white rounded"/>
          </LocalizationProvider>
          {/* 卡片网格，flex-grow 保持卡片区域填充剩余空间 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md sm:max-w-lg mt-4">
            <SmallCard title="Card 1" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 2" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 3" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 4" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 5" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
          </div>
    
          {/* 按钮 */}
          <div className="mt-4 mb-2">
            <Button 
              label="Back" 
              onClick={handleBack} 
              variant="secondary" 
            />
          </div>
    
          {/* 搜索框 */}
          <div className="p-1 w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by key words..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      );
}