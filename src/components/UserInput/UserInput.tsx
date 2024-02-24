'use client'

import { Status } from '@/types'
import React, { useEffect, useRef, useState } from 'react'
import { ReadyState } from 'react-use-websocket'
import SendButton from './SendButton'
import { isError } from 'util'

type UserInputProps = {
    onSubmit: (value: string) => void
    readyState: ReadyState
    status?: Status
}
const UserInput: React.FC<UserInputProps> = ({
    onSubmit,
    readyState,
    status,
}) => {
    const [value, setValue] = useState('')

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [value])

    const isButtonDisabled =
        value.trim().length === 0 || readyState !== ReadyState.OPEN || !!status

    const isErrored =
        readyState !== ReadyState.OPEN || status === Status.TERMINATED

    const placeholder = isErrored
        ? 'Disconnected. Refresh the page to reconnect....'
        : 'Ask me something...'

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (isErrored) return
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
                className={`p-4 pr-12 block w-full bg-stone-100 border-stone-200 outline-${isErrored ? 'red' : 'stone'}-300 rounded-lg  focus:border-neutral-500 focus:ring-neutral-500 dark:bg-slate-800 dark:border-stone-700 dark:text-stone-400 dark:focus:ring-stone-600 ${isErrored ? 'cursor-not-allowed' : ''}`}
                placeholder={placeholder}
                rows={1}
                maxLength={500}
                style={{ resize: 'none' }}
            />

            <div className="absolute right-0 bottom-px p-2 rounded-b-md">
                <SendButton
                    disabled={isButtonDisabled}
                    loading={!!status}
                    error={isErrored}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}

export default UserInput
