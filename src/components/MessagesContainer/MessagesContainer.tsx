'use client'

import React, { use, useEffect } from 'react'
import { BotMessage } from '../BotMessage'
import { ScrollContainer } from '../ScrollContainer'
import { UserMessage } from '../UserMessage'
import { Message } from '@/types'
import { useAutoScroll } from '@/hooks/useAutoScroll'
import { isNewMessage } from '@/utils'

type MessagesContainerProps = {
    messages: Message[]
}

const MessagesContainer: React.FC<MessagesContainerProps> = ({ messages }) => {
    const autoScroll = useAutoScroll()
    const { scrollToBottom } = autoScroll

    useEffect(() => {
        scrollToBottom()
    }, [messages.length, scrollToBottom])

    return (
        <ScrollContainer className="flex-1 p-4 h-full" {...autoScroll}>
            <ul className="flex-col justify-center space-y-5">
                {messages
                    .filter((message) => message.type !== 'STATUS')
                    .map((message, index) => {
                        if (message.type === 'USER') {
                            return (
                                <UserMessage key={index} text={message.text} />
                            )
                        }
                        return (
                            <BotMessage
                                newMessage={isNewMessage(message, messages)}
                                key={index}
                                text={message.text}
                                meta={message.sources?.map((s: string) => ({
                                    url: s,
                                    text: 'source',
                                }))}
                                onUpdate={autoScroll.scrollToBottom}
                            />
                        )
                    })}
            </ul>
        </ScrollContainer>
    )
}

export default MessagesContainer
