import React, { useState } from "react";
import "./Navbar.scss";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import logoImageDark from "../../assets/img/brand/orange.png";
import { Search, Book, LogIn } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownNavbar } from "../ui/dropdown-navbar";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

const UserNavbar = () => {
  
  // const [size, setSize] = useState("default");
  const [searchDropdownVisible, setSearchDropdownVisible] = useState(false);

  
  const logoDark = (
    <div className="logo-container">
      <img src={logoImageDark} 
        className="logo-navbar" 
          />
    </div>
  )

  const courseMenu = (
    <DropdownMenu className="menu-navbar">
      <DropdownMenuTrigger>Khóa học</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Lớp 10</DropdownMenuItem>
        <DropdownMenuItem>Lớp 11</DropdownMenuItem>
        <DropdownMenuItem>Lớp 12</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Ôn thi THPT Quốc Gia</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const menu = (
    <DropdownNavbar href="#">
      Khóa học
    </DropdownNavbar>
  )

  const searchButton = (
    <Button 
      icon={<Search />} 
      className="search-button" 
      variant="search-button" 
      size="search-button" 
      onClick={() => setSearchDropdownVisible(!searchDropdownVisible)}
      >Tìm kiếm</Button>   
  )

  const searchDropdown = searchDropdownVisible && (
    <DropdownMenu className="search-dropdown">
      <DropdownMenuLabel prefix={<Search />}></DropdownMenuLabel>
      <DropdownMenuContent>
        <Input
          startIcon={<Search />}
          placeholder="Tìm kiếm ..."
          className="search-anything"
          enterButton
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const loginButton = (
    <Button 
      icon = {<LogIn />}
      className="signin-button" 
      variant="signin-button"
      size="signin-button"
      onClick={() => {}}>
        Đăng nhập
    </Button>  
  )

  
  return (
      <div className="user-navbar-container">
        <div className="left-navbar-container">
          {logoDark}
          {menu}
          {courseMenu}
        </div>
        
        <div className="right-navbar-container">
          {searchButton}
          {searchDropdown}
          {loginButton} 
        </div>
      </div>
  );
};

export default UserNavbar;

