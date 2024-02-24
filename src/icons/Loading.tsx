import React from 'react'

type LoadingProps = { size?: 'small' | 'medium' | 'large'; color?: string }

const SIZE_MAP = {
    small: 4,
    medium: '[38px]',
    large: 8,
}

const Loading: React.FC<LoadingProps> = ({
    size = 'small',
    color = 'white',
}) => {
    return (
        <span
            className={`animate-spin inline-block size-${SIZE_MAP[size]} border-[3px] border-current border-t-transparent text-${color} rounded-full`}
            role="status"
            aria-label="loading"
        >
            <span className="sr-only">Loading...</span>
        </span>
    )
}

export default Loading
