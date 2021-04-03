import useDarktheme from 'src/hooks/useDarkTheme'

const SwitherIndicator = ({ dark }) => {
  if (dark) return <ion-icon name="moon-outline"></ion-icon>
  return <ion-icon name="sunny-outline"></ion-icon>
}

const ThemeSwitcher = () => {
  const [dark, setDark] = useDarktheme()
  const switchMode = (data) => {
    const value = data.target.value
    if (value) {
      setDark(dark ? false : true)
    }
  }

  const switcher = "absolute block w-8 h-8 -mt-1 -ml-1 bg-gray-light dark:bg-gray-dark rounded-full shadow-neumorp dark:shadow-neumorp-dark inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out"
  const switcherDark = switcher + " transform translate-x-full"
  const switcherLight = switcher

  const switcherBar = "block w-14 h-6 rounded-full transition-transform duration-300 ease-in-out"
  const switcherBarDark = switcherBar + " bg-pink-500"
  const switcherBarLight = switcherBar + " bg-gray-light dark:bg-gray-dark shadow-input-neumorp dark:shadow-input-neumorp-dark"

  return (
    <>
      <label className="mt-3 inline-flex items-center cursor-pointer" onClick={switchMode}>
        <span className="relative">
          <span className={dark ? switcherBarDark : switcherBarLight}></span>
          <span className={dark ? switcherDark : switcherLight}>
            <input type="checkbox" value={dark} className="absolute opacity-0 w-0 h-0" />
          </span>
        </span>
        <span className="mt-1 ml-4 text-2xl dark:text-gray-light">
          <SwitherIndicator dark={dark} />
        </span>
      </label>
    </>
  )
}

export default ThemeSwitcher
