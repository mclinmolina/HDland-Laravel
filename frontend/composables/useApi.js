export const useApi = () => {
  const token = process.client ? localStorage.getItem('token') : null

  return $fetch.create({
    baseURL: 'http://localhost:8000/api',
    headers: token
      ? {
          Authorization: `Bearer ${token}`
        }
      : {}
  })
}