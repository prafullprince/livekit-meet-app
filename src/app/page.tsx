/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  // hooks
  const router = useRouter();

  // state
  const [formData, setFormData] = useState({
    room: '',
    username: '',
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      {/* containers */}
      <div className="">
        {/* logo */}

        {/* join room */}
        <div className="bg-gray-800 rounded-xl px-6 py-4 flex flex-col gap-4 min-w-xs">
          <h1 className="text-2xl font-bold text-center text-white">Join Room</h1>
          <div className="mt-4 flex flex-col gap-4">
            <input
              className="bg-gray-700 rounded-lg px-4 py-2 text-white outline-none placeholder:font-light placeholder:text-sm"
              name="room"
              type="text"
              value={formData.room}
              onChange={(e)=> setFormData((prev:any)=>({
                ...prev,
                room: e.target.value
              }))}
              placeholder="Room ID"
            />
            <input
              className="bg-gray-700 rounded-lg px-4 py-2 text-white outline-none placeholder:font-light placeholder:text-sm"
              name="username"
              type="text"
              value={formData.username}
              onChange={(e)=> setFormData((prev:any)=>({
                ...prev,
                username: e.target.value
              }))}
              placeholder="Username"
            />
          </div>
          <button
            onClick={()=>{
              router.push(`/room/${formData.room}/username/${formData.username}`);
            }}
          className="bg-gray-100 rounded-lg px-4 py-2 text-black text-lg font-semibold hover:bg-slate-300 transition-all duration-300 cursor-pointer mt-4 hover:text-black">Join</button>
        </div>
      </div>
    </div>
  );
}
