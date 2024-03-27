import React from 'react';

import './Footer.scss';
import { Input } from '../ui/input';

import { Send } from 'lucide-react';
import facebookIcon from "@/assets/img/icons/facebook.png";
import youtubeIcon from "@/assets/img/icons/youtube.png";
import tiktokIcon from "@/assets/img/icons/tiktok.png";
import { DefaultButton } from '../ui/default-button';
const UserFooter = () => {

   const content = {
      "Về chúng tôi": {
         "Giới thiệu": {href: "/about", child: []},
         "Đội ngũ": {href: "/team", child: []},
         "Điều khoản chính sách": {href: "/policy", child: []},
      },
      "Khóa học": {   
         "Lớp 10": {href: "/grade-10", child: []},
         "Lớp 11": {href: "/grade-11", child: []},
         "Lớp 12": {href: "/grade-12", child: []},
         "Ôn thi THPTQG": {href: "/thptqg", child: []},
         "Tất cả khoá học": {href: "/courses", child: []},
      },
      "Hỗ trợ": {
         "Trung tâm hỗ trợ": {href: "/support", child: []},
         "Liên hệ:": {href: "", child: ["Email: letsgo@vn.com", "Đường dây nóng: 0123456789"]}
      },
   }

   const maxRows = 3;
   const footerInfo = Object.keys(content).map((key, index) => {
      const items = Object.keys(content[key]).map((item, index) => {
         return (<>
            <li key={index} className="li">
               {content[key][item].href !== "" && (<a href={content[key][item].href} className='li-a'>{item}</a>)}
               {content[key][item].href === "" && (<div className='li-div'>{item}</div>)}
            </li>
            {content[key][item].child.length > 0 && (
               content[key][item].child.map((child, index) => {
                  return (
                  <li className="li">  
                     <h2 key={index} className="h2">{child}</h2>
                  </li>)
               })
            )}
         </>)
      });
      const rows = [];
      for (let i = 0; i < items.length; i += maxRows) {
         rows.push(
            <ul key={i / maxRows} className="ul">
            {items.slice(i, i + maxRows)}
            </ul>
         );
      }
      return (
         <div key={index} className="footer-info-block">
            <h1 className="h1">{key}</h1>
            {rows}
         </div>
      );
      });   

   const footerFollow = (
      <div>
         <h1 className="h1">Theo dõi chúng tôi</h1>
         <div className='footer-follow-icons'>
            <div className='footer-icon'>
               <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  {<img src={facebookIcon} alt="facebook" />} 
               </a>
            </div>
            <div className='footer-icon'>
               <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                  {<img src={tiktokIcon} alt="facebook" />} 
               </a>
            </div>
            <div className='footer-icon'>
               <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  {<img src={youtubeIcon} alt="facebook" />} 
               </a>
            </div>
         </div>
         <div className='footer-follow-email'>
            <Input type='text' className="footer-email-input" placeholder='Nhập email của bạn'></Input>
            <DefaultButton className="footer-email-button" background={false}>Gửi</DefaultButton>
         </div>
      </div>
   )

   return (
      <div className="footer-container">
         <div className="footer-top">
            <div className='footer-info'>{footerInfo}</div>
            <div className='footer-follow'>{footerFollow}</div>
         </div>
         <div className='footer-bottom'>
            Let's Go HCMC &copy; {new Date().getFullYear()} All rights reserved.
         </div>  
      </div>
   )

}


export default UserFooter;