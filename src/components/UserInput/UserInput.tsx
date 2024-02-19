'use client'

import React, { useEffect, useRef, useState } from 'react'
import Send from '@/icons/Send'

type UserInputProps = {
    onSubmit: (value: string) => void
}
const UserInput: React.FC<UserInputProps> = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        if (value.trim().length === 0) return
        onSubmit(value)
        setValue('')
    }

    return (
        <div className="relative flex flex-1 items-stretch md:flex-col">
            <textarea
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                id="hs-autoheight-textarea"
                className="p-4 pr-12 block w-full bg-stone-100 border-stone-200 outline-stone-300 rounded-lg  focus:border-neutral-500 focus:ring-neutral-500 dark:bg-slate-800 dark:border-stone-700 dark:text-stone-400 dark:focus:ring-stone-600"
                placeholder="Ask me something..."
                rows={1}
                maxLength={500}
                style={{ resize: 'none' }}
            ></textarea>

            <div className="absolute right-0 bottom-px p-2 rounded-b-md">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-neutral-600 hover:bg-neutral-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-stone-600"
                >
                    <Send />
                </button>
            </div>
        </div>
    )
}

export default UserInput
