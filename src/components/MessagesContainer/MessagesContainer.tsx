'use client'

import React from 'react'
import { ScrollContainer } from '../ScrollContainer'

const MessagesContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <ScrollContainer className="flex-1 p-4 h-full">
            <ul className="flex-col justify-center space-y-10">{children}</ul>
        </ScrollContainer>
    )
}

export default MessagesContainer
