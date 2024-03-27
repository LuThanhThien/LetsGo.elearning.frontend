import React from "react";
import UserNavbar from '@/components/navbar/UserNavbar.jsx';
import RegisterForm from "@/components/auth/RegisterForm";
import UserFooter from "@/components/footer/UserFooter";

import "./Auth.scss";   

import loginImage from "@/assets/img/user/login-background.png";


const Register = () => { 
   return(
      <div className="login">
         <UserNavbar />
            <div className="login-container">
               <div className="login-media">
                  <img src={loginImage} className="login-image" />
               </div>
               <RegisterForm />
            </div>
         <UserFooter />
      </div>
   )
}

export default Register;