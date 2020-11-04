import { AxiosError } from 'axios'
import useSWR from 'swr'
import { api } from '../services/api'

export const useApi = <T>(
  url: string,
  initialData: T
): { data: T; error: AxiosError } => {
  const { data, error } = useSWR<T>(
    url,
    async url => {
      const { data } = await api.get(url)
      return data
    },
    { initialData }
  )

  return { data, error }
}
