import React, { useState } from "react";
import "./Navbar.scss";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import logoImage from "../../assets/img/brand/letsgo-iconv2.png";
import { Search, Book } from "lucide-react";
import { 
  Menubar,
  MenubarContent,
  MenubarSubContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSubTrigger,
  MenubarSub,
} from "../ui/menubar";

const UserNavbar = () => {

  const [size, setSize] = useState("default");
  
  return (
      <div className="user-navbar-container">
        <div className="left-navbar-container">
          <div className="logo-container">
            <img src={logoImage} 
              className="logo-navbar" 
               />
          </div>
          <div className=" search-container">
            <Input
              startIcon={<Search />}
              placeholder="Tìm kiếm ..."
              className="search-anything"
              maxLength={ 50 }
              enterButton
            />
          </div>
        </div>
        
        <div className="right-navbar-container">
          <Menubar prefix={<Book />}>
            <MenubarMenu>
              <MenubarTrigger>Khóa học</MenubarTrigger>
              <MenubarContent>
                <MenubarItem> Lớp 10 </MenubarItem>
                <MenubarItem> Lớp 11 </MenubarItem>
                <MenubarItem> Lớp 12 </MenubarItem>
                <MenubarSeparator />
                <MenubarItem> Ôn thi THPT Quốc Gia </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Button 
            className="signin-button" 
            onClick={() => {}}>
            Đăng ký
          </Button>   
        </div>

      </div>
  );
};

export default UserNavbar;
