export const Status = {
    TERMINATED: 'TERMINATED',
    EMBEDDING: 'EMBEDDING',
    SEARCHING: 'SEARCHING',
    PROCESSING: 'PROCESSING',
} as const

export type Status = keyof typeof Status

export const MessageType = {
    ASSISTANT: 'ASSISTANT',
    SYSTEM: 'SYSTEM',
    STATUS: 'STATUS',
    USER: 'USER',
} as const

type MessageType = keyof typeof MessageType

export type Message = UserMessage | StatusMessage

type BaseMessage = {
    sentAt?: string
    text: string
    sources?: string[]
    sessionId?: string
}

type UserMessage = BaseMessage & {
    type: 'USER' | 'ASSISTANT' | 'SYSTEM'
}

type StatusMessage = BaseMessage & {
    type: 'STATUS'
    text: Status
}
