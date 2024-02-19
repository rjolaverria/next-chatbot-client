'use client'

import { BotMessage } from '@/components/BotMessage'
import { MessagesContainer } from '@/components/MessagesContainer'
import { UserInput } from '@/components/UserInput'
import { UserMessage } from '@/components/UserMessage'

export default function Home() {
    return (
        <div className="relative flex h-svh w-svw max-w-full flex-1 flex-col overflow-hidden">
            <main className="relative h-full w-full flex-1 overflow-auto transition-width">
                <div role="presentation" className="flex h-full flex-col">
                    <div className="overflow-hidden lg:mx-auto lg:max-w-2xl xl:max-w-3xl p-2">
                        <p className="text-xl text-stone-400 font-semibold">
                            Chatbot
                        </p>
                    </div>
                    <div className="flex-1 overflow-hidden lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                        <MessagesContainer>
                            <UserMessage text="What is a bot?" />
                            <BotMessage
                                text='A bot, short for "robot," is an automated software program designed to perform specific tasks without human intervention. Bots can be programmed for a wide range of activities, from simple repetitive tasks, like auto-replying to messages or scraping web data, to more complex functions, such as artificial intelligence-based chatbots that can understand and respond to human language in a conversational manner. Bots are used in various fields, including customer service (as chatbots), on social media platforms (for tasks like automated posting or messaging), in online gaming (as non-player characters or for automated actions), and in many other digital environments.'
                                meta={[
                                    {
                                        text: 'What is a Bot',
                                        url: '#what-is-a-bot',
                                    },
                                    {
                                        text: 'GPT',
                                        url: '#gpt',
                                    },
                                ]}
                            />
                        </MessagesContainer>
                    </div>

                    <div className="w-full pt-2 md:pt-0 md:w-[calc(100%-.5rem)]">
                        <div className="stretch mx-2 flex flex-row gap-3 mb-1 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                            <UserInput onSubmit={() => alert('sent')} />
                        </div>
                    </div>
                    <div className="px-2 py-2 text-center text-xs md:px-[60px]">
                        <span>
                            This GPT bot could be wrong. Please verify the
                            information.
                        </span>
                    </div>
                </div>
            </main>
        </div>
    )
}
