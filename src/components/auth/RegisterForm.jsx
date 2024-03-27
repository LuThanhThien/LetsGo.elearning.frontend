import React from "react";
import "./AuthForm.scss";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Mail, KeyRound, GripHorizontal } from "lucide-react";
import googleIcon from "@/assets/img/icons/google-icon.webp";
import facebookIcon from "@/assets/img/icons/facebook-icon.webp";

import { DefaultButton } from "@/components/ui/default-button.jsx"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
   username: z.string()
      .min(5, {message: "Tên người dùng hoặc email chứa tối thiểu 5 ký tự.",})
      .max(20, {message: "Tên người dùng hoặc email chứa tối đa 20 ký tự.",}),
   password: z.string()
      .min(8, {message: "Mật khẩu chứa ít nhất 8 ký tự.",})
      .max(20, {message: "Mật khẩu chứa tối đa 20 ký tự.",}),
   confirmPassword: z.string()
 })


export function RegisterForm() {

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         username: "",
         password: "",
         confirmPassword: "",
     },
   })
   
   const onSubmit = (data) => {
      console.log(data);
      if (data.password !== data.confirmPassword) {
         console.log("Passwords do not match.")
         form.setError("confirmPassword", {message: "Mật khẩu xác nhận không trùng khớp."})
      }
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 login-box">
            <div className="login-form">
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem className="login-form-input">
                        <FormLabel className="login-form-input-label">Tên đăng nhập</FormLabel>
                        <FormControl>
                           <Input 
                              className="login-form-input-field" 
                              startIcon={<Mail />}
                              placeholder="Email hoặc tên đăng nhập" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem className="login-form-input">
                        <FormLabel className="login-form-input-label">Mật khẩu</FormLabel>
                        <FormControl>
                           <Input 
                              className="login-form-input-field" 
                              startIcon={<KeyRound />}
                              placeholder="Mật khẩu" {...field} 
                              isPassword={true}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem className="login-form-input">
                        <FormLabel className="login-form-input-label">Xác nhận mật khẩu</FormLabel>
                        <FormControl>
                           <Input 
                              className="login-form-input-field" 
                              startIcon={<GripHorizontal />}
                              placeholder="Nhập lại mật khẩu" {...field} 
                              isPassword={true}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               <DefaultButton 
                  type="submit"
                  onClick={() => console.log("Submit form")}
                  container="submit-button-container"
                  className="submit-button">
                  Đăng ký
               </DefaultButton>
               <div className="text-container">Hoặc đăng ký bằng</div>
               <div className="other-signin-container">
                  <div className="signin-icon-container">
                     <img src={googleIcon} className="signin-icon" />
                  </div>
                  <div className="signin-icon-container">
                     <img src={facebookIcon} className="signin-icon" />
                  </div>
               </div>
               <div className="text-container pb-2">
                  <p>Bạn đã đăng ký?{' '}
                     <a href="/user/register" className="text-button">Đăng nhập</a>
                  </p>
               </div>
            </div>
        </form>
      </Form>
    )
 }


export default RegisterForm;