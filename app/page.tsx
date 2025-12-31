"use client"
import NewYearCountdown from "@/components/countdown-timer";
import { Navigation } from "@/components/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {
  const [audioURL,setAudioURL] = useState("/audio/jschlatt_Happy_Holiday.mp3");
  const [audioStart, setAudioStart] = useState(0);

  return (
    <div>
      <Navigation
      url={{get:audioURL,set:setAudioURL}}
      startTime={{get:audioStart,set:setAudioStart}}/>

      <SidebarTrigger
        className=' top-5 right-10 z-10 fixed scale-200'/>
        
      <NewYearCountdown audioURL={audioURL}/>
    </div>
  );
}
