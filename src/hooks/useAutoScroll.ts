'use client'

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react'

export const useAutoScroll = () => {
    const topRef = useRef<HTMLDivElement>(null)
    const bottomRef = useRef<HTMLDivElement>(null)
    const [topInView, setTopInView] = useState(false)
    const [bottomInView, setBottomInView] = useState(false)

    const scrollToTop = useCallback(() => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    const scrollToBottom = useCallback(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])

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

    return useMemo(
        () => ({
            topRef,
            bottomRef,
            topInView,
            bottomInView,
            scrollToTop,
            scrollToBottom,
        }),
        [bottomInView, scrollToBottom, scrollToTop, topInView]
    )
}

export type AutoScroll = ReturnType<typeof useAutoScroll>
