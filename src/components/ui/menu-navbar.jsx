import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react";
import "../css/color.css"
import "./menu-navbar.scss"

const DropdownNav = React.forwardRef(({href, className, children}, ref)  => {  
  return (
    <div href={href} ref={ref}>
      <nav className={cn("items-start self-center flex max-w-full gap-5 my-auto max-md:flex-wrap max-md:justify-center", className)}>
        {children}      
      </nav>
    </div>
  );
});
DropdownNav.displayName = "DropdownNav";

const MenuTrigger = React.forwardRef(({ className, href, name="Menu", children }, ref) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const menuRef = useRef(null);
  const menuContentRef = useRef(null);
  const openContent = open && children;

  const handleClickOut = (e) => {
    if(menuContentRef.current && menuContentRef.current.contains(e.target)) {
      setOpen(true);
    } else if (menuRef.current && menuRef.current.contains(e.target)) {
      setOpen(!open);
    } else {
      setOpen(false);
    }
  }

  const hadleHover = (e) => {
    if (menuRef.current.contains(e.target)){
      setHover(true);
    } else {
      setHover(false);
    }
  }

  const hadleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
      console.log("Press ESC");
    }
  }


  useEffect(() => {
    document.body.addEventListener("click", handleClickOut);
    document.body.addEventListener("mouseover", hadleHover);
    document.body.addEventListener("keydown", hadleKeyDown);
    return () => {
      document.body.removeEventListener("click", handleClickOut);
      document.body.removeEventListener("mouseover", hadleHover);
      document.body.removeEventListener("keydown", hadleKeyDown);
    };
  }, [open]);

  
  return (
    <div 
    ref={ref}
    className={cn("relative text-black text-center text-base leading-6 tracking-wide self-stretch", className)}
    >
      {/* MenuTrigger */}
      <div ref={menuRef} 
        style={{
          cursor: "pointer",
        }}
        className="flex items-center gap-1 p-2 menu-trigger">
        <a href={href} className="relative text-black">
          <div 
          style={{
            fontWeight: "500",
            color: hover ? "#fe7210" : "black",
          }}
            >
            {name}
          </div>
          { children && (
            <span 
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-0.5 -right-0.5 h-0.5 origin-left rounded-full bg-black transition-transform duration-300 ease-out"/>
          )}
          
          {/* MenuContent */}
          <div ref={menuContentRef}>
              { openContent && (
                <AnimatePresence>  
                  <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ 
                    translateX: "-50%", 
                    borderRadius: "0.3rem", 
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-1/2 top-10 bg-white text-black text-center">
                    {children}
                  </motion.div>
                </AnimatePresence>
              )}  
          </div>
        </a>
        
        {
          children && (
          <motion.div
            className="rotate-arrow"
            initial={false}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={12}/>
          </motion.div>
          )
        }
      </div>
    </div>
  )
});


const MenuHeader = React.forwardRef(({ className, containerStyle, name, children, icon }, ref) => {
  return (
    <div>
      <div 
      ref={ref} 
      className={cn("menu-header", className)}>
        {icon && (
          <div className="menu-header-icon">
            {icon}
          </div>
        )}
        {name}
        <div className={cn("menu-content-container", containerStyle )}>
          {children}
        </div>  
      </div>
    </div>
  );
});
MenuHeader.displayName = "MenuHeader";

const MenuContent = React.forwardRef(({ href, children, icon, className, contentClassName}, ref) => {

  return (
    <div>
      <div ref={ref} className={cn("menu-content-box", className)} onClick={() => { 
        if(href) { window.location.href = href; } 
        }}>
        <div className={cn("menu-content", contentClassName)}
        >
          {icon && (
            <div className="content-icon">
              {icon}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
});
MenuContent.displayName = "MenuContent"

const MenuDivider = React.forwardRef(({ className }, ref) => {
  return (
    <div ref={ref} className={cn("menu-divider", className)}></div>
  );
});

export {
  DropdownNav,
  MenuTrigger,
  MenuHeader,
  MenuContent,
  MenuDivider,
};
