"use client"
import { useEffect, useRef, useState } from 'react'
import { Card, CardFooter, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Pause } from 'lucide-react'



function getNextNewYear(): Date {
  const now = new Date()
  const year = now.getFullYear() + 1
  
  
  now.setSeconds(now.getSeconds()+20)
  return now

  // return new Date(`January 1, ${year} 00:00:00`)
}

function calculateTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())

  const totalSeconds = Math.floor(diff / 1000)

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { hours, minutes, seconds }
}

function pad(value: number) {
  return value.toString().padStart(2, '0')
}



export default function NewYearCountdown() {
  const targetDate = useRef(getNextNewYear())
  const hasCompleted = useRef(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  
  const [isClient, setIsClient] = useState(false)
  const [isLast10Seconds,setIsLast10Seconds] = useState(false)
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(targetDate.current)
  )

  function onComplete(){
    audioRef.current?.play()
  }

  useEffect(() => {
    setIsClient(true)

    const interval = setInterval(() => {
      const updated = calculateTimeLeft(targetDate.current)
      setTimeLeft(updated)

      if (updated.hours === 0 &&
        updated.minutes === 0 &&
        updated.seconds <= 10
      ){
        setIsLast10Seconds(true)
      }

      if (
        !hasCompleted.current &&
        updated.hours === 0 &&
        updated.minutes === 0 &&
        updated.seconds === 0
      ) {
        hasCompleted.current = true
        onComplete()
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Card
    className='flex flex-col gap-4 justify-center items-center w-96 text-4xl px-5
    fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2' >
      <CardTitle
      className=''>
        <audio ref={audioRef} src="/audio/test.mp3"/>
        <div
        className=''>

          {
            hasCompleted.current ?
            <h2>
              HAPPY NEW YEAR
            </h2>
            :
            isLast10Seconds?
            <div>
              <h1
              className='text-9xl'>
                {pad(timeLeft.seconds)}
              </h1>
            </div>
            :
            <div className='flex flex-col items-center justify-center gap-4'>
              <h1>
                {pad(timeLeft.hours)} : {pad(timeLeft.minutes)} : {pad(timeLeft.seconds)}
              </h1>

              <p className='text-2xl text-center'>
                Until {new Date().getFullYear() + 1}
              </p>
            </div>
          }
          
        </div>

      </CardTitle>
      {
        hasCompleted.current?
          <Button onClick={()=>audioRef.current?.pause()}
          className=''>
            <Pause/>
          </Button>
        :null
      }
    </Card>
  )
}
