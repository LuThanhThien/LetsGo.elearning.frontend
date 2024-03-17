import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils"
import "./Navbar.scss";
import { ButtonNav } from "@/components/ui/button-nav";
import { Input } from "@/components/ui/input";
import logoImageDark from "@/assets/img/brand/letsgo-iconv3-dark.png";
import { Search, LogIn,  Pi, DraftingCompass, SquareFunction, GraduationCap } from "lucide-react";
import { 
  DropdownNav, 
  MenuTrigger, 
  MenuHeader, 
  MenuContent, 
  MenuDivider,
} from "../ui/menu-navbar";
import { AnimatePresence, motion } from "framer-motion"


const UserNavbar = React.forwardRef(({ className }, ref) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchDropdownVisible, setSearchDropdownVisible] = useState(false);
  const searchRef = React.createRef();
  const searchDropdownRef = React.createRef();

  const currentRoute = window.location.pathname;
  const onLogin = currentRoute === "/user/login";
  const onOthers = !onLogin && (
    currentRoute.startsWith("/user") ||
    currentRoute.startsWith("/course") ||
    currentRoute.startsWith("/info")
    ) ;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  // const [size, setSize] = useState("default");

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSearchDropdownVisible(false);
      console.log("Press ESC, Search dropdown hidden ");
      return;
    }
  }

  const handleSearch = (e) => {
    
    if (searchDropdownRef.current && searchDropdownRef.current.contains(e.target)) {
      setSearchDropdownVisible(true);
      console.log("Search dropdown visible: " + searchDropdownVisible);
    } else if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchDropdownVisible(false);
      console.log("Search dropdown visible: " + searchDropdownVisible);  
    } else if (searchRef.current && searchRef.current.contains(e.target)) {
      setSearchDropdownVisible(!searchDropdownVisible);
      console.log("Set reverse");
      console.log("Search dropdown visible: "+ searchDropdownVisible);
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("click", handleSearch);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("click", handleSearch);
    };
  }, [searchDropdownVisible])

  return (
    <div className={cn("user-navbar", className)}  ref={ref}>
      <div className="user-navbar-container">
        <div className="left-navbar-container">
          
          {/* Start logo dark */}
          <a href={currentRoute === "/user" ? null : "/user"}>
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
              <MenuContent contentClassName="menu-content" href="/course/grade-10" icon={< Pi size={20}/>}>Lớp 10</MenuContent>
              <MenuContent contentClassName="menu-content" href="/course/grade-11" icon={< DraftingCompass size={20}/>}>Lớp 11</MenuContent>
              <MenuContent contentClassName="menu-content" href="/course/grade-12" icon={< SquareFunction size={20}/>}>Lớp 12</MenuContent>
              <MenuDivider />
              <MenuContent contentClassName="menu-content" href="/course/thptqg" icon={< GraduationCap size={20}/>}>Ôn thi THPTQG</MenuContent>
             </MenuTrigger>
             <MenuTrigger contentClassName="menucontent" href="/info/price" name="Bảng giá">
             </MenuTrigger>
             <MenuTrigger contentClassName="menucontent" href="/info/about" name="Về chúng tôi">
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
          border={false}
          >
            <div className="sr-only">Tìm kiếm</div>
          </ButtonNav>  

          {/* Start register button */}
          { onLogin && (
            <ButtonNav 
              href="/user/register"
              icon = {<LogIn />}>
                Đăng ký
            </ButtonNav>  
          )}
          {/* End register button */}

          
          {/* Start login button */}
          { onOthers && (
            <ButtonNav 
              href="/user/login"
              icon = {<LogIn />}>
                Đăng nhập
            </ButtonNav>  
          )}
          {/* End login button */}
        </div>
      </div>
      
      { searchDropdownVisible && (
        <AnimatePresence>  
          <motion.div
            ref={searchDropdownRef}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ 
              borderRadius: "0.3rem", 
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="search-dropdown-container">
              <div className="search-input-container">
                <Input startIcon={<Search size={30}/>} 
                  className="search-input-top" 
                  iconClassStart="text-muted-foreground mr-2"
                  placeholder="Tìm kiếm khóa học, đề thi, ..."/>
                <div className="search-input-bottom"></div>
                <div className="search-keywords">
                  <MenuHeader name="Xu hướng" className="keyword-header" containerStyle="keyword-container">
                    <MenuContent href="/course/thptqg" contentClassName="keyword">Ôn thi THPTQG</MenuContent>
                    <MenuContent href="/course/thptqg" contentClassName="keyword">Đề THPTQG Toán 2023</MenuContent>
                    <MenuContent href="/course/grade-10" contentClassName="keyword">Lớp 10</MenuContent>
                    <MenuContent href="/course/grade-11" contentClassName="keyword">Lớp 11</MenuContent>
                    <MenuContent href="/course/grade-12" contentClassName="keyword">Lớp 12</MenuContent>
                  </MenuHeader>
                </div>
              </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
});

export default UserNavbar;

