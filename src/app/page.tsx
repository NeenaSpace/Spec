
// export default function Home() {
//   return (
//     <div className="flex items-center justify-center w-full h-full text-center">
//       <h1 className="text-2xl font-semibold">Welcome to Memory World</h1>
//     </div>
//   );
// }

"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/new_page');
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center w-full h-full text-center cursor-pointer"
    >
      <h1 className="text-2xl font-semibold text-white font-cursive">Welcome to Memory World</h1>
    </div>
  );
}