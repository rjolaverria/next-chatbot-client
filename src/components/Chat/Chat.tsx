import React, { useCallback, useEffect, useState } from 'react'
import { MessagesContainer } from '@/components/MessagesContainer'
import { UserInput } from '@/components/UserInput'
import { Message, MessageType, Status } from '@/types'
import useWebSocket from 'react-use-websocket'

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL

type ChatProps = {
    sessionId: string
}

const Chat: React.FC<ChatProps> = ({ sessionId }) => {
    const [messageHistory, setMessageHistory] = useState<Message[]>([])
    const [currentStatus, setCurrentStatus] = useState<Status>()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket<
        Message | undefined
    >(socketUrl + `?sessionId=${sessionId}`)

    useEffect(() => {
        if (lastJsonMessage) {
            setMessageHistory((prev) => prev.concat(lastJsonMessage))
        }

        if (lastJsonMessage?.type === MessageType.STATUS) {
            const status = lastJsonMessage.text
            setCurrentStatus(status)
            setIsLoading(true)
        } else {
            setCurrentStatus(undefined)
            setIsLoading(false)
        }
    }, [lastJsonMessage, setMessageHistory])

    const handleSubmit = useCallback(
        (text: string) => {
            if (sessionId) {
                const message: Message = {
                    type: MessageType.USER,
                    text,
                    sessionId,
                }
                sendJsonMessage(message)

                setMessageHistory((prev) => prev.concat(message))
            }
        },
        [sendJsonMessage, sessionId]
    )

    return (
        <>
            <div className="flex-1 overflow-hidden mx-auto w-full lg:max-w-2xl xl:max-w-3xl">
                <MessagesContainer messages={messageHistory} />
            </div>

            <div className="w-full pt-2 md:pt-0 md:w-[calc(100%-.5rem)]">
                <div className="stretch mx-2 flex flex-row gap-3 mb-1 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                    <UserInput
                        onSubmit={handleSubmit}
                        readyState={readyState}
                        status={currentStatus}
                    />
                </div>
            </div>
            <div className="px-2 py-2 text-center text-xs md:px-[60px]">
                <span>
                    This GPT bot could be wrong. Please verify the information.
                </span>
            </div>
        </>
    )
}

export default Chat
