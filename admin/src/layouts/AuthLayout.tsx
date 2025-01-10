import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className='bg-[#b7bbc1]'>
        <Outlet />
    </main>
  )
}

export default AuthLayout