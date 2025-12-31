"use client"
import { Music } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { AudioProps } from "@/app/types";


export default function AudioManager({url,startTime}:AudioProps){
    const [audio,setAudio] = useState<File | null>(null);
    const [open, setOpen] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudio(file);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>)=>{
        
        
        console.log("new audio")
        if (audio){
            const uploadedAudioURL = URL.createObjectURL(audio)
            url.set(uploadedAudioURL)
            setOpen(false)
        }
    }

    return (
        <Dialog open={open}>
            <DialogTrigger asChild
            className="flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md">
                <Button
                onClick={()=>setOpen(true)}
                className='bg-blue-500 hover:bg-blue-600'>
                    Edit Celebration Audio <Music/>
                </Button>
            </DialogTrigger>

            <form >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Celebration Audio</DialogTitle>
                        <DialogDescription>
                            Choose what audio plays when the timer hits 0 and which part of the audio to start from
                        </DialogDescription>
                    </DialogHeader>

                    <div>
                        <Label className="mb-1" htmlFor="audio">
                            Upload Audio <span className="text-gray-400 text-xs">(mp3 or wav)</span>
                        </Label>
                        <Input
                        id="audio"
                        type="file"
                        accept="audio/mpeg, audio/wav"
                        onChange={handleFileChange}/>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={()=>setOpen(false)}
                            variant="outline">Cancel</Button>
                        </DialogClose>

                        <Button onClick={handleSubmit} type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}