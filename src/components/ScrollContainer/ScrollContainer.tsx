'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { IconButton } from '../IconButton'
import { ChevronDown, ChevronUp } from '@/icons'

type ScrollContainerProps = {
    children: React.ReactNode
    className?: string
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
    children,
    className,
}) => {
    const topRef = React.useRef<HTMLDivElement>(null)
    const bottomRef = React.useRef<HTMLDivElement>(null)
    const [topInView, setTopInView] = useState(false)
    const [bottomInView, setBottomInView] = useState(false)
    const [mouseOver, setMouseOver] = useState(false)

    const handleScrollToTop = () =>
        topRef.current?.scrollIntoView({ behavior: 'smooth' })
    const handleScrollToBottom = () =>
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    const handleMouseOver = () => setMouseOver(true)
    const handleMouseOut = () => setMouseOver(false)

    const topObserver = useMemo(() => {
        if (typeof window !== 'undefined' && window.IntersectionObserver) {
            return new IntersectionObserver(([entry]) => {
                setTopInView(entry.isIntersecting)
            })
        }
    }, [])

    const bottomObserver = useMemo(() => {
        if (typeof window !== 'undefined' && window.IntersectionObserver) {
            return new IntersectionObserver(([entry]) => {
                setBottomInView(entry.isIntersecting)
            })
        }
    }, [])

    useEffect(() => {
        if (
            !topRef.current ||
            !bottomRef.current ||
            !topObserver ||
            !bottomObserver
        )
            return
        topObserver.observe(topRef.current)
        bottomObserver.observe(bottomRef.current)

        return () => {
            topObserver.disconnect()
            bottomObserver.disconnect()
        }
    }, [topObserver, bottomObserver])

    return (
        <div
            className={`relative ${className}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {mouseOver && !bottomInView && (
                <div className="absolute left-1/2 top-0 shadow-lg rounded-lg">
                    <IconButton onClick={handleScrollToBottom}>
                        <ChevronDown />
                    </IconButton>
                </div>
            )}
            <div className="overflow-y-scroll h-full">
                <div ref={topRef} />
                {children}
                <div ref={bottomRef} />
            </div>
            {mouseOver && !topInView && (
                <div className="absolute left-1/2 bottom-2 shadow-lg rounded-lg">
                    <IconButton onClick={handleScrollToTop}>
                        <ChevronUp />
                    </IconButton>
                </div>
            )}
        </div>
    )
}

export default ScrollContainer
