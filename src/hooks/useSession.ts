import { useMemo } from 'react'
import useSWR from 'swr'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const fetcher = (url: string) =>
    fetch(url, {
        credentials: 'include',
    }).then((res) => res.json())

export const useSession = () => {
    const { data, error, isLoading } = useSWR<{ id: string }>(
        API_URL + '/session',
        fetcher,
        {
            revalidateOnFocus: false,
        }
    )

    return useMemo(
        () => ({
            ...data,
            sessionId: data?.id,
            error,
            isLoading,
        }),
        [data, error, isLoading]
    )
}
