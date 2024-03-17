import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { ButtonNav } from "@/components/ui/button-nav";
import logoImageDark from "@/assets/img/brand/letsgo-iconv3-dark.png";
import { Search, LogIn,  Pi, DraftingCompass, SquareFunction, GraduationCap } from "lucide-react";

import { DropdownNav, MenuTrigger, MenuContent } from "@/components/ui/menu-navbar";

const UserNavbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDropdownVisible, setSearchDropdownVisible] = useState(false);
  const searchRef = React.createRef();
  const currentRoute = window.location.pathname;
  const onLogin = currentRoute === "/user/login";
  const onUser = !onLogin && currentRoute.startsWith("/user");

  // const [size, setSize] = useState("default");

  const handleSearch = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchDropdownVisible(false);
      console.log("Search dropdown visible: " + searchDropdownVisible);  
    } else if (searchRef.current && searchRef.current.contains(e.target)) {
      setSearchDropdownVisible(!searchDropdownVisible);
      console.log("Set reverse");
      console.log("Search dropdown visible: "+ searchDropdownVisible);
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", handleSearch);
    return () => {
      document.body.removeEventListener("click", handleSearch);
    };
  })

  return (
    <div className="user-navbar-extension">
      <div className="user-navbar-container">
        <div className="left-navbar-container">
          
          {/* Start logo dark */}
          <a href="/user">
            <div 
            className="logo-container">
              <img src={logoImageDark} 
                className="logo-navbar" 
                  />
            </div>
          </a>
          {/* End logo dark */}

          {/* Start dropdown nav */}
          <div className="menu-container">
            <DropdownNav>        
             <MenuTrigger name="Khoá học">
              <MenuContent href="/courses/grade-10" icon={< Pi size={20}/>}>Lớp 10</MenuContent>
              <MenuContent href="/courses/grade-11" icon={< DraftingCompass size={20}/>}>Lớp 11</MenuContent>
              <MenuContent href="/courses/grade-12" icon={< SquareFunction size={20}/>}>Lớp 12</MenuContent>
              <MenuContent href="/courses/thptqg" icon={< GraduationCap size={20}/>}>Ôn thi THPTQG</MenuContent>
             </MenuTrigger>
             <MenuTrigger href="/price" name="Bảng giá">
             </MenuTrigger>
             <MenuTrigger href="/about" name="Về chúng tôi">
             </MenuTrigger>
            </DropdownNav>
          </div>
          {/* End dropdown nav */}

        </div>
        
        <div className="right-navbar-container">
          <ButtonNav 
          ref={searchRef} 
          icon={<Search />} 
          className="search-button" 
          variant="search-button" 
          size="search-button" 
          onClick={() => setSearchDropdownVisible(!searchDropdownVisible)}>
              Tìm kiếm
          </ButtonNav>  

          {/* Start register button */}
          { onLogin && (
            <ButtonNav 
              href="/user/register"
              icon = {<LogIn />}
              className="signin-button" 
              variant="signin-button"
              size="signin-button">
                Đăng ký
            </ButtonNav>  
          )}
          {/* End register button */}

          
          {/* Start login button */}
          { onUser && (
            <ButtonNav 
              href="/user/login"
              icon = {<LogIn />}
              className="signin-button" 
              variant="signin-button"
              size="signin-button">
                Đăng nhập
            </ButtonNav>  
          )}
          {/* End login button */}
        </div>
      </div>

      { searchDropdownVisible && (
        <div className="search-dropdown">
          {/* Start search dropdown */}
          
          {/* End search dropdown */}
        </div>
      )}
    </div>
  );
};

export default UserNavbar;

