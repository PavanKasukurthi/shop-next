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
    loginUser: (state, action) => {
      console.log('login')
    },
    logoutUser: (state) => {
      console.log('logout')
    },
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
