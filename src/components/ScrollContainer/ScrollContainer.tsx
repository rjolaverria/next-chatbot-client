'use client'

import React, { useState } from 'react'
import { IconButton } from '../IconButton'
import { ChevronDown, ChevronUp } from '@/icons'
import { AutoScroll } from '@/hooks/useAutoScroll'

type ScrollContainerProps = {
    children: React.ReactNode
    className?: string
} & AutoScroll

const ScrollContainer: React.FC<ScrollContainerProps> = ({
    children,
    className,
    topRef,
    bottomRef,
    topInView,
    bottomInView,
    scrollToTop,
    scrollToBottom,
}) => {
    const [mouseOver, setMouseOver] = useState(false)
    const handleMouseOver = () => setMouseOver(true)
    const handleMouseOut = () => setMouseOver(false)

    return (
        <div
            className={`relative ${className}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {mouseOver && !bottomInView && (
                <div className="absolute left-1/2 top-0 shadow-lg rounded-lg">
                    <IconButton onClick={scrollToBottom}>
                        <ChevronDown />
                    </IconButton>
                </div>
            )}
            <div className="overflow-y-auto h-full">
                <div ref={topRef} />
                {children}
                <div ref={bottomRef} />
            </div>
            {mouseOver && !topInView && (
                <div className="absolute left-1/2 bottom-2 shadow-lg rounded-lg">
                    <IconButton onClick={scrollToTop}>
                        <ChevronUp />
                    </IconButton>
                </div>
            )}
        </div>
    )
}

export default ScrollContainer
