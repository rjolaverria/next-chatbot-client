import React from 'react'
import MessageStatus from '../MessageStatus/MessageStatus'
import Avatar from '../Avatar/Avatar'

type Meta = {
    text?: string
    url: string
}

type BotMessageProps = React.PropsWithChildren<{
    status?: 'delivered' | 'error'
    text?: string
    meta?: Meta[]
}>

const BotMessage: React.FC<BotMessageProps> = ({
    children,
    text,
    meta,
    status,
}) => {
    return (
        <li className="flex gap-x-2 sm:gap-x-4">
            <div className="w-full">
                <div className="mb-2">
                    <Avatar type="bot" />
                </div>
                <div className="max-w-1xl w-full border border-stone-200 rounded-2xl space-y-3 dark:bg-slate-900 dark:border-stone-700">
                    <div className="p-4">{text ?? children}</div>
                    {meta && (
                        <div className="flex items-center border-t border-stone-200 p-4 space-x-4">
                            {meta.map((item, index) => (
                                <a
                                    key={item.url}
                                    className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href={item.url}
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
