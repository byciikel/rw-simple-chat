import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'
import ThemeSwitcher from 'src/components/ThemeSwitcher'
import Loading from './Loading'

const Login = () => {
  const [isLoading, setLoading] = useState(false)
  const { logIn, isAuthenticated, currentUser } = useAuth()

  const onSubmit = async ({ email }) => {
    setLoading(true)
    await logIn({ email, showUI: true })
    setLoading(false)
    console.log(isAuthenticated, currentUser);
  }

  return (
    <>
      <div className="m-center font-light dark:text-gray-light text-7xl cursor-default">
        Login to use <span className="font-bold text-pink-500"> Simple </span> chat now!
      </div>
      <Form className="my-10" onSubmit={onSubmit}>
        <div className="flex flex-wrap justify-between">
          <TextField
            name="email"
            className="w-3/4 h-14 py-3 px-7 border-none bg-gray-light dark:bg-gray-dark text-gray-soft dark:text-gray-light rounded-50px shadow-input-neumorp dark:shadow-input-neumorp-dark focus:outline-none"
            errorClassName="w-3/4 h-14 py-3 px-7 border-2 border-pink-500 bg-gray-light dark:bg-gray-dark text-gray-soft dark:text-gray-light rounded-50px shadow-input-neumorp dark:shadow-input-neumorp-dark focus:outline-none"
            placeholder="Enter your email"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^\.]+\..+/,
              },
            }}
          />
          <Submit className="flex items-center p-3 bg-gray-light dark:bg-gray-dark text-blue-400 rounded-full shadow-neumorp dark:shadow-neumorp-dark focus:outline-none" >
            <Loading isLoading={isLoading}>
              <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
            </Loading>
          </Submit>
        </div>
      </Form>
      <ThemeSwitcher />
    </>
  )
}

export default Login
