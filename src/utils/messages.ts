import { Message } from '@/types'

export const timeSinceMessage = (message: Message) => {
    if (!message.sentAt) return Infinity
    const messageDate = new Date(message.sentAt)
    const now = new Date()
    return now.getTime() - messageDate.getTime()
}

export const isNewMessage = (message: Message, messages: Message[]) => {
    const lastMessage = messages[messages.length - 1]
    const timeSince = timeSinceMessage(message)
    return lastMessage === message && timeSince < 1000
}
