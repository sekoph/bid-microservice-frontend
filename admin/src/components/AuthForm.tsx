import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {Loader2 } from "lucide-react"
import {
  Form,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomField from './CustomField'
import { authFormSchema } from '@/lib/utils'
import { useDispatch , useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { loginUser, registerUser } from '@/redux/feature/userSlice'
import { Link, useNavigate } from 'react-router-dom'



const AuthForm = ({type}:{type:string}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.user.token);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const formSchema = authFormSchema(type);
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  useEffect(() => {
    if(isAuthenticated && token != null){
      navigate('/home')
    }
  }, [isAuthenticated, token])
  

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    
    setLoading(true);
    try {
      if(type === "SignUP"){

        await dispatch(registerUser(data));

      }else if(type === "SignIN"){

        await dispatch(loginUser({
          username: data.username,
          password: data.password,
        }))

      };
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  return (
    <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8;'>
        <header className='flex flex-col gap-5 md:gap-8'>
        {/* <Link href="/" className="flex items-center gap-4 mb-12 cursor-pointer">
        <img src="/icons/logo2.webp" alt="logo" width={68} height={28} /> */}
          {/* <h1 className="text-white">Auction</h1> */}
        {/* </Link> */}
        <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 text-gray-900 font-semibold'>
                {type === 'SignIN' ? 'Sign In' : 'Sign Up'}
                <p className='text-16 font-normal text-gray-600'>
                    Please enter your details
                </p>
            </h1>
        </div>
        </header>
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {type === "SignUP" && (
                    <>
                      <CustomField control={form.control} name="name" label="Full Name" placeholder="Enter your full name"/>
                      <CustomField control={form.control} name="email" label="Email" placeholder="Enter your email"/>
                    </>
                  )}
                    <CustomField control={form.control} name="username" label="Username" placeholder="Enter your username"/>
                    <CustomField control={form.control} name="password" label="Password" placeholder="Enter your password"/>
                    <div className='flex flex-col gap-4'>
                    <Button type="submit" disabled={loading}>{loading ? (
                        <>
                          <Loader2 size={20} className="animate-spin"/>&nbsp;Loading...
                        </>
                      ): type === "SignIN" ? "Sign In" : "Sign Up"}
                    </Button>
                    </div>
                </form>
            </Form>
            <footer className='flex justify-center gap-1'>
                    <p className='text-14 font-normal text-gray-600'>{
                    type === "SignIN" ?
                    "Don't have an Account ? " :
                    "You have an Account ? "}
                    </p>
                    <Link className='text-14 cursor-pointer font-medium' to={type === "SignIN" ? '/SignUp' : '/'}>
                    {type === "SignIN" ? 'Sign Up' : 'Sign In'}</Link>
            </footer>
        </>
    </section>
  )
}

export default AuthForm