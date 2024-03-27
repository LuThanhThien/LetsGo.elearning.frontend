import React from "react";
import "./AuthForm.scss";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Mail, KeyRound } from "lucide-react";
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
      .max(30, {message: "Mật khẩu chứa tối đa 30 ký tự.",}),
 })


export function LoginForm() {
   
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password: "",
      },
    })

   const onSubmit = (data) => {
      console.log("Validate success!")
      console.log(data);
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
                              placeholder="Email hoặc tên người dùng" {...field} />
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
               <div className="text-container">
                  <a href="/user/reset-password" className="text-button">Quên mật khẩu</a>
               </div>
               <DefaultButton 
                  type="submit"
                  onClick={() => {console.log(form.getValues())}}
                  container="submit-button-container"
                  className="submit-button">
                  Đăng nhập
               </DefaultButton>
               <div className="text-container">Hoặc đăng nhập bằng</div>
               <div className="other-signin-container">
                  <div className="signin-icon-container">
                     <img src={googleIcon} className="signin-icon" />
                  </div>
                  <div className="signin-icon-container">
                     <img src={facebookIcon} className="signin-icon" />
                  </div>
               </div>
               <div className="text-container pb-2">
                  <p>Bạn chưa có tài khoản?{' '}
                     <a href="/user/register" className="text-button">Đăng ký ngay</a>
                  </p>
               </div>
            </div>
        </form>
      </Form>
    )
 }


export default LoginForm;