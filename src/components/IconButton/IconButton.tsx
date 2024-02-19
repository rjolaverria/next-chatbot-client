import React, { ButtonHTMLAttributes } from 'react'

const IconButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <button
            type="button"
            className={`flex flex-shrink-0 justify-center items-center gap-2 size-8 text-sm font-semibold rounded-lg border border-transparent bg-stone-200 text-stone600 hover:bg-stone-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default IconButton
