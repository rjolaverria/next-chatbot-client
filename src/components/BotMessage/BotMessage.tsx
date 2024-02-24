import { useTypingEffect } from '@/hooks'
import React, { use, useEffect } from 'react'
import Avatar from '../Avatar/Avatar'
import MessageStatus from '../MessageStatus/MessageStatus'
import { on } from 'events'

type Meta = {
    text?: string
    url: string
}

type BotMessageProps = {
    status?: 'delivered' | 'error'
    text: string
    meta?: Meta[]
    newMessage?: boolean
    onUpdate?: () => void
}

const BotMessage: React.FC<BotMessageProps> = ({
    text,
    meta,
    status,
    newMessage,
    onUpdate,
}) => {
    const speed = newMessage ? 1 : 0
    const { displayText } = useTypingEffect(text, speed, onUpdate)

    return (
        <li className="flex gap-x-2 sm:gap-x-4">
            <div className="w-full">
                <div className="mb-2">
                    <Avatar type="bot" />
                </div>
                <div className="max-w-1xl w-full border border-stone-200 rounded-2xl space-y-3 dark:bg-slate-900 dark:border-stone-700">
                    <div className="p-4">{displayText}</div>
                    {!!meta?.length && displayText.length === text.length && (
                        <div className="flex items-center border-t border-stone-200 p-4 space-x-4">
                            {meta.map((item, index) => (
                                <a
                                    key={item.url}
                                    className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href={item.url}
                                    target="_blank"
                                >
                                    {item.text ?? item.url}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <MessageStatus status={status} />
            </div>
        </li>
    )
}

export default BotMessage
