import React from "react";

import "./Auth.scss";

import UserNavbar from '@/components/navbar/UserNavbar.jsx';
import UserFooter from "@/components/footer/UserFooter";
import LoginForm from "@/components/auth/LoginForm";

import loginImage from "@/assets/img/user/login-background.png";


const Login = () => { 
   return(
      <div className="login">
         <UserNavbar />
            <div className="login-container">
               <div className="login-media">
                  <img src={loginImage} className="login-image" />
               </div>
               <LoginForm />
            </div>
         <UserFooter />
      </div>
   )
}

export default Login;