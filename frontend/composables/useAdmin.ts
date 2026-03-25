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
    // Mock auth for Supabase testing
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      isAuthenticated.value = true
      user.value = { id: 1, username: 'test', is_admin: true }
      return true
    }
    isAuthenticated.value = false
    return false
  }

  /**
   * Login as admin
   */
  const login = async (username: string, password: string) => {
    // Mock login for Supabase testing
    const mockResponse = { token: 'mock-supabase-test-token-123', user: { id: 1, username, is_admin: true } }

    localStorage.setItem('token', mockResponse.token)
    token.value = mockResponse.token
    user.value = mockResponse.user
    isAuthenticated.value = true

    return mockResponse
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
      navigateTo('/')
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

