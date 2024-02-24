import { useEffect, useState } from 'react'

type Speed = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export const useTypingEffect = (
    text: string,
    speed?: Speed,
    onUpdate?: () => void
) => {
    const [displayText, setDisplayText] = useState('')
    const [index, setIndex] = useState(0)
    const isTyping = index < text.length

    useEffect(() => {
        if (!speed) {
            setDisplayText(text)
            return
        }
        const delay = speed ? 10 / speed : 0
        const interval = setInterval(() => {
            setDisplayText((prev) => prev + text[index])
            setIndex((prev) => prev + 1)
            // call onUpdate every time a 10th of the text is displayed
            if (index % Math.floor(text.length / 10) === 0) {
                onUpdate?.()
            }
        }, delay)
        if (index === text.length) {
            clearInterval(interval)
            // Fall back to the original text if the effect is done
            setDisplayText(text)
            onUpdate?.()
        }

        return () => clearInterval(interval)
    }, [index, text, speed, onUpdate])

    return { displayText, isTyping }
}
