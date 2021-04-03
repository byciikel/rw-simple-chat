import { useState } from 'react'

const useDarkTheme = () => {
  const root = window.document.documentElement
  const [dark, setDark] = useState(false)
  if (dark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  return [dark, setDark]
}

export default useDarkTheme
