import React from "react";
import UserNavbar from '@/components/navbars/UserNavbar.jsx';
import "./Login.scss";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import loginImage from "@/assets/img/user/login-background.png";

import { ButtonNav } from "@/components/ui/button-nav.jsx"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
   username: z.string()
      .min(2, {message: "Username must be at least 2 characters.",})
      .max(50, {message: "Username must be at most 50 characters.",}),
   password: z.string()
      .min(8, {message: "Password must be at least 8 characters.",})
      .max(30, {message: "Password must be at most 30 characters.",}),
 })


export function LoginForm() {
   const [showPassword, setShowPassword] = React.useState(false)
   const [submit, setSubmit] = React.useState(false)
   var username = "";
   var password = "";
   const form = useForm({
     resolver: zodResolver(formSchema),
     defaultValues: {
       username: "",
         password: "",
     },
   })
   
   function onSubmit(...values) {
      console.log(values);
   }

   return (
      <Form {...form}>
         <form onSubmit={() => {console.log(username, password);}} className="space-y-8 login-box">
            <div className="login-form">
               <FormField
                  control={form.control}
                  name="username"
                  render={({ username }) => (
                     <FormItem className="login-form-input">
                        <FormLabel className="login-form-input-label">Tên đăng nhập</FormLabel>
                        <FormControl>
                           <Input placeholder="Email hoặc tên đăng nhập" {...username} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               <FormField
                  control={form.control}
                  name="username"
                  render={({ password }) => (
                     <FormItem className="login-form-input">
                        <FormLabel className="login-form-input-label">Mật khẩu</FormLabel>
                        <FormControl>
                           <Input placeholder="Mật khẩu" {...password} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>)}
               />
               <ButtonNav className="submit-button" type="submit">Submit</ButtonNav>
            </div>        
        </form>
      </Form>
    )
 }

const Login = () => { 
   return(
      <div>
         <UserNavbar />
         <div className="login">
            <div className="login-container">
               <div className="login-media">
                  <img src={loginImage} className="login-image" />
               </div>
               <LoginForm />
            </div>
         </div>
      </div>
   )
}

export default Login;