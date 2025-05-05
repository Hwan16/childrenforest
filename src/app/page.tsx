import Image from "next/image";
import { supabase } from "@/lib/supabase/client";

export default function Home() {
  // 콘솔에 supabase 객체 출력 (연결 테스트용)
  console.log("Supabase 클라이언트:", supabase);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-center">아름유아 숲 체험원</h1>
        <p className="text-xl text-center">유치원/어린이집 단체 예약 시스템</p>
        
        <div className="mt-8 text-center">
          <p>개발 진행 중입니다...</p>
        </div>
      </main>
    </div>
  );
}
