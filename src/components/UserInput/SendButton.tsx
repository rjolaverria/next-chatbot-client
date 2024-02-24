import { Loading, Send } from '@/icons'
import { Status } from '@/types'
import React from 'react'
import { ReadyState } from 'react-use-websocket'

const ActionIcon = ({ status }: { status: 'error' | 'ready' | 'loading' }) => {
    if (status === 'loading') {
        return <Loading />
    }
    if (status === 'error') {
        return '!'
    }
    return <Send />
}

type SendButtonProps = {
    disabled: boolean
    loading: boolean
    error: boolean
    onClick: () => void
}

const SendButton: React.FC<SendButtonProps> = ({
    disabled,
    loading,
    error,
    onClick,
}) => {
    return (
        <button
            disabled={disabled}
            type="button"
            onClick={onClick}
            className={`inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-${error ? 'red' : 'neutral'}-600 hover:bg-${error ? 'red' : 'neutral'}-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-stone-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-${error ? 'red' : 'neutral'}-600 disabled:hover:bg-${error ? 'red' : 'neutral'}-600 disabled:focus:ring-neutral-500 disabled:dark:focus:ring-stone-600 disabled:dark:bg-stone-700 disabled:dark:hover:bg-stone-700`}
        >
            {error ? (
                <span className="font-bold">!</span>
            ) : loading ? (
                <Loading />
            ) : (
                <Send />
            )}
        </button>
    )
}

export default SendButton
