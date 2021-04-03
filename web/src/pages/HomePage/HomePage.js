import { useAuth } from '@redwoodjs/auth'
import Login from 'src/components/Login'
import Messaging from 'src/components/Messaging'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Messaging />
  return <Login />
}

export default HomePage
