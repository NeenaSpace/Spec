// src/app/more-cards/page.tsx
"use client";

import SmallCard from '../../components/card/SmallCard';
import { useRouter } from 'next/navigation';
import Button from '../../components/button/button';
import { useState } from 'react';
// import { DatePicker } from 'antd';

export default function MoreCards() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const handleBack = () => {
        router.push('/new_page');
    };

    // const onChange = (date, dateString) => {
    //   console.log(date, dateString);
    // };

    return (
        <div className="min-h-screen bg-gradient-to-b flex flex-col items-center pt-16 px-4">
    
          {/* 标题 */}
          <h1 className="text-3xl font-bold text-gray-200 mb-10">Explore More</h1>
    
          {/* <DatePicker onChange={onChange} /> */}
          {/* 卡片网格，flex-grow 保持卡片区域填充剩余空间 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md sm:max-w-lg">
            <SmallCard title="Card 1" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 2" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 3" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 4" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
            <SmallCard title="Card 5" text="Some additional content." imageSrc="/image/logDaily.jpeg" />
          </div>
    
          {/* 按钮 */}
          <div className="mt-8 mb-4">
            <Button 
              label="Back" 
              onClick={handleBack} 
              variant="secondary" 
            />
          </div>
    
          {/* 搜索框 */}
          <div className="p-4 w-full">
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