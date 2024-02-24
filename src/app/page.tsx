'use client'

import Alert from '@/components/Alert'
import { Chat } from '@/components/Chat'
import { useSession } from '@/hooks/useSession'
import { Loading } from '@/icons'

export default function Home() {
    const { sessionId, isLoading } = useSession()

    return (
        <div className="relative flex h-svh w-svw max-w-full flex-1 flex-col overflow-hidden">
            <main className="relative h-full w-full flex-1 overflow-auto transition-width">
                <div role="presentation" className="flex h-full flex-col">
                    <div className="overflow-hidden lg:mx-auto lg:max-w-2xl xl:max-w-3xl p-2">
                        <p className="text-xl text-stone-400 font-semibold">
                            Chatbot
                        </p>
                    </div>
                    {!!sessionId ? (
                        <Chat key={sessionId} sessionId={sessionId} />
                    ) : isLoading ? (
                        <div className="flex items-center justify-center w-full h-full">
                            <Loading size={'medium'} color="stone-500" />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full h-full">
                            <Alert type="error">
                                Unable to connect to the server
                            </Alert>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
