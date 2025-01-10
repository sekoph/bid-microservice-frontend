
import {
    FormField,
    FormControl,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import {Control, FieldPath} from "react-hook-form"
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema("SignUP")


  interface CustomField{
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
  }

const CustomField = ({control, name, label, placeholder} : CustomField) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='flex flex-col gap-1.5'>
                <FormLabel className='text-14 w-full max-w-[280px] font-medium text-gray-700'>{label}</FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input placeholder={placeholder} className='text-16 placeholder:text-16 rounded-lg border border-gray-950 text-gray-900 placeholder:text-gray-500' {...field} type={name === "password" ? "password" : "text"}/>
                    </FormControl>
                    <FormMessage className='text-12 text-red-500 mt-2 '/>
                </div>
            </div>
        )}
    />
  )
}

export default CustomField