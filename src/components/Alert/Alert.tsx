import React from 'react'

type AlertType = 'error' | 'warning' | 'success' | 'default' | 'info' | 'dark'

const BG_COLORS_MAP: Record<AlertType, string> = {
    error: 'red-500',
    warning: 'yellow-500',
    success: 'teal-500',
    default: 'gray-500',
    info: 'blue-600',
    dark: 'gray-800',
} as const

type AlertProps = React.PropsWithChildren<{
    type?: AlertType
}>

const Alert: React.FC<AlertProps> = ({ children, type = 'default' }) => {
    const bgColor = BG_COLORS_MAP[type]
    return (
        <div
            className={`bg-${bgColor} text-sm text-white rounded-lg p-4`}
            role="alert"
        >
            {children}
        </div>
    )
}

export default Alert
