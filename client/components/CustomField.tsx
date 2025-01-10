import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import {Control, Field, FieldPath} from "react-hook-form"
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
            <div className='form-item'>
                <FormLabel className='form-label'>{label}</FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input placeholder={placeholder} className='input-class' {...field} type={name === "password" ? "password" : "text"}/>
                    </FormControl>
                    <FormMessage className='form-message mt-2 '/>
                </div>
            </div>
        )}
    />
  )
}

export default CustomField