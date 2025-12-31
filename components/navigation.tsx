import { Sidebar } from '@/components/ui/sidebar';
import AudioManager from './audio-manager';
import { AudioProps } from '@/app/types';



export function Navigation({url,startTime}: AudioProps) {

    return (
        <Sidebar>
            <div className="p-4">
                <h1 className="text-lg font-bold mb-4 text-center">
                    Endless New Year Countdown
                </h1>

                <div className="flex flex-col gap-2 items-center">
                   <AudioManager url={url} startTime={startTime}/>
                </div>
            </div>
        </Sidebar>
    );
}