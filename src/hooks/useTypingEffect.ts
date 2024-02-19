import { useEffect, useState } from 'react'

type Speed = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export const useTypewriterEffect = (text: string, speed?: Speed) => {
    const [displayText, setDisplayText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!speed) {
            setDisplayText(text)
            return
        }
        const delay = speed ? 10 / speed : 0
        const interval = setInterval(() => {
            setDisplayText((prev) => prev + text[index])
            setIndex((prev) => prev + 1)
        }, delay)
        if (index === text.length) {
            clearInterval(interval)
            // Fall back to the original text if the effect is done
            setDisplayText(text)
        }

        return () => clearInterval(interval)
    }, [index, text, speed])

    return displayText
}
