import { Person } from '@/icons'
import Bot from '@/icons/Bot'
import React from 'react'

type AvatarProps = {
    name?: string
    type?: 'user' | 'bot'
}

const Avatar: React.FC<AvatarProps> = ({ name, type }) => {
    return (
        <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-neutral-400">
            {name ? (
                <span className="text-sm font-medium text-white leading-none">
                    {name}
                </span>
            ) : type == 'bot' ? (
                <Bot />
            ) : (
                <Person />
            )}
        </span>
    )
}

export default Avatar
