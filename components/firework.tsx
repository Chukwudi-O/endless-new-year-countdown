"use client";

import { useEffect, useRef } from "react";


export default function Fireworks({audioIsPlaying}:{audioIsPlaying:boolean}) {
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(()=>{
        audioIsPlaying?videoRef.current?.play():null
    },[audioIsPlaying])

    return (
        <video
        ref={videoRef}
        loop
        muted
        playsInline
        className={`w-full mix-blend-hard-light`}
        style={{
            filter: "hue-rotate(-45deg) saturate(0.2) brightness(1.3)"
        }}
        >
        <source src="/fireworks.mp4" type="video/mp4"/>
        </video>
    );
}
