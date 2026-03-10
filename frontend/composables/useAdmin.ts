/**
 * Admin Guard Composable
 * Provides utilities for checking admin authentication status
 */

interface User {
  id: number
  username: string
  email?: string
  is_admin?: boolean
}

export const useAdmin = () => {
  const token = useState<string | null>('adminToken', () => null)
  const user = useState<User | null>('adminUser', () => null)
  const isAuthenticated = useState<boolean>('isAdminAuthenticated', () => false)

  const API_URL = 'http://localhost:8000/api'

  /**
   * Check if user is logged in as admin
   */
  const checkAuth = async () => {
    const storedToken = localStorage.getItem('token')
    
    if (!storedToken) {
      isAuthenticated.value = false
      return false
    }

    try {
      const response = await $fetch<User>(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          Accept: 'application/json'
        }
      })
      
      user.value = response
      isAuthenticated.value = true
      token.value = storedToken
      return true
    } catch (error) {
      localStorage.removeItem('token')
      isAuthenticated.value = false
      user.value = null
      token.value = null
      return false
    }
  }

  /**
   * Login as admin
   */
  const login = async (username: string, password: string) => {
    const response = await $fetch<{ token: string; user: User }>(`${API_URL}/login`, {
      method: 'POST',
      body: { username, password }
    })

    localStorage.setItem('token', response.token)
    token.value = response.token
    user.value = response.user
    isAuthenticated.value = true

    return response
  }

  /**
   * Logout from admin
   */
  const logout = async () => {
    const storedToken = localStorage.getItem('token')
    
    if (storedToken) {
      try {
        await $fetch(`${API_URL}/logout`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        })
      } catch (error) {
        // Ignore logout errors (token might be expired)
      }
    }

    localStorage.removeItem('token')
    token.value = null
    user.value = null
    isAuthenticated.value = false
  }

  /**
   * Redirect to login if not authenticated
   */
  const requireAuth = () => {
    if (!isAuthenticated.value) {
      navigateTo('/admin/login')
    }
  }

  return {
    token: readonly(token),
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    checkAuth,
    login,
    logout,
    requireAuth
  }
}

