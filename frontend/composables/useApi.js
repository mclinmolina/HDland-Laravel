export const useApi = (url, options = {}) => {
  const config = useRuntimeConfig()
  const token = useCookie('auth_token') // Store token in a cookie

  return useFetch(url, {
    baseURL: config.public.apiBase,
    ...options,
    headers: {
      Authorization: token.value ? `Bearer ${token.value}` : '',
      Accept: 'application/json',
      ...options.headers,
    },
  })
}