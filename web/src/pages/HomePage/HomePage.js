import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'

const SwitherIndicator = ({ dark }) => {
  if (dark) return <ion-icon name="moon-outline"></ion-icon>
  return <ion-icon name="sunny-outline"></ion-icon>
}

const HomePage = () => {
  const [dark, setDark] = useState(false)
  const onSubmit = (data) => {
    console.log(data)
  }

  const switchMode = (data) => {
    const value = data.target.value
    if (value) setDark(dark ? false : true)
  }

  const switcher = "absolute block w-8 h-8 -mt-1 -ml-1 bg-soft-gray rounded-full shadow-neumorp inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out"
  const switcherDark = switcher + " transform translate-x-full"
  const switcherLight = switcher

  const switcherBar = "block w-14 h-6 rounded-full transition-transform duration-300 ease-in-out"
  const switcherBarDark = switcherBar + " bg-pink-500"
  const switcherBarLight = switcherBar + " bg-soft-gray shadow-input-neumorp"

  return (
    <>
      <div className="m-center font-light text-7xl cursor-default">
        Login to use <span className="font-bold text-pink-500"> Simple </span> chat now!
      </div>
      <Form className="my-10" onSubmit={onSubmit}>
        <div className="flex flex-wrap justify-between">
          <TextField
            name="email"
            className="w-3/4 h-14 py-3 px-7 border-none bg-soft-gray text-light rounded-br-50 shadow-input-neumorp focus:outline-none"
            errorClassName="w-3/4 h-14 py-3 px-7 border-2 border-pink-500 bg-soft-gray text-light rounded-br-50 shadow-input-neumorp focus:outline-none"
            placeholder="Enter your email"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^\.]+\..+/,
              },
            }}
          />
          <Submit className="flex items-center p-3 bg-soft-gray text-blue-400 rounded-full shadow-neumorp focus:outline-none" >
            <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
          </Submit>
        </div>
      </Form>
      <label className="mt-3 inline-flex items-center cursor-pointer" onClick={switchMode}>
        <span className="relative">
          <span className={dark ? switcherBarDark : switcherBarLight}></span>
          <span className={dark ? switcherDark : switcherLight}>
            <input type="checkbox" value={dark} className="absolute opacity-0 w-0 h-0" />
          </span>
        </span>
        <span className="mt-1 ml-4 text-2xl">
          <SwitherIndicator dark={dark} />
        </span>
      </label>
    </>
  )
}

export default HomePage
