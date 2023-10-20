import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const themes = {
  pastel: 'pastel',
  forest: 'forest',
}

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.pastel
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

const initialState = {
  user: { username: 'batsy' },
  theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // LOGIN
    loginUser: (state, action) => {
      console.log('login')
      toast.success('Logged in successfully')
    },

    // LOGOUT
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user')
      toast.success('Logged out successfully')
    },

    // TOGGLE THEME
    toggleTheme: (state) => {
      const { forest, pastel } = themes
      state.theme = state.theme === forest ? pastel : forest
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
