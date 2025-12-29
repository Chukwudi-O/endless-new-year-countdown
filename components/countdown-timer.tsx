"use client"
import { useEffect, useRef, useState } from 'react'

type Props = {
  onComplete?: () => void
}

function getNextNewYear(): Date {
  const now = new Date()
  const year = now.getFullYear() + 1
  return new Date(`January 1, ${year} 00:00:00`)
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

export default function NewYearCountdown({ onComplete }: Props) {
  const targetDate = useRef(getNextNewYear())
  const hasCompleted = useRef(false)

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(targetDate.current)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = calculateTimeLeft(targetDate.current)
      setTimeLeft(updated)

      if (
        !hasCompleted.current &&
        updated.hours === 0 &&
        updated.minutes === 0 &&
        updated.seconds === 0
      ) {
        hasCompleted.current = true
        onComplete?.()
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
    className='flex flex-col gap-4 justify-center items-center w-full h-screen' >
        <h1
        className='text-6xl'>
            {pad(timeLeft.hours)} : {pad(timeLeft.minutes)} : {pad(timeLeft.seconds)}
        </h1>
        <p>
            Until {new Date().getFullYear() + 1}
        </p>
    </div>
  )
}
