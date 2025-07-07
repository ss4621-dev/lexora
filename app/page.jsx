'use client'

import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand} />

        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">

          {/* Mobile menu */}
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              className="rotate-180"
              src={assets.menu_icon}
              alt=""
            />
            <Image className="opacity-70" src={assets.chat_icon} alt="" />
          </div>

          {/* Main Empty State */}
          {messages.length === 0 ? (
            <div className="flex items-center space-x-4">
              <Image
                src={assets.logo_icon}
                alt="Lexora Logo"
                className="w-12 h-12"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-3xl font-semibold">
                  Hi, I'm <span className="text-[#628efb]">Lexora AI.</span>
                </h1>
                <p className="text-base text-gray-300 mt-1">
                  How can I help you today?
                </p>
              </div>
            </div>
          ) : (
            <div>
              <Message role='user' content='What is Next JS'/>
            </div>
          )}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading}/>
          <p className="text-xs absolute bottom-1 text-gray-500">
            AI-generated, for reference only
          </p>
        </div>
      </div>
    </div>
  );
}
