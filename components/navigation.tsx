"use client"
import { Sidebar } from '@/components/ui/sidebar';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from './ui/input';
import { useState } from 'react';
import { Label } from './ui/label';
import { Music } from 'lucide-react';

export function Navigation() {
    const [audio, setAudio] = useState<File | null>(null);

    const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudio(file);
            
        }
    };

    return (
        <Sidebar>
            

            <div className="p-4">
                <h1 className="text-lg font-bold mb-4 text-center">
                    Endless New Year Countdown
                </h1>

                <div className="space-y-2">
                    <Label
                    htmlFor='new-year-type'>
                        New Year Type
                    </Label>

                    <Select defaultValue='default'>
                        <SelectTrigger className="w-full">
                            <SelectValue id='new-year-type' placeholder="Select New Year type"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>New Year Type</SelectLabel>
                                <SelectItem value="default">Default</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button
                    className='w-full bg-blue-500 hover:bg-blue-600 mt-4'>
                        Change Celebration Audio <Music/>
                    </Button>
                </div>
            </div>
        </Sidebar>
    );
}