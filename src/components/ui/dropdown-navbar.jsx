import React from "react"
import { cn } from "@/lib/utils"

const DropdownNavbar = ({ className, children, href, DropdownNavbarContent }) => {
  return (
    <div >
      <a href={href} className="menu-navbar">
        {children}
        <span className={cn("absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out", className)}/>
      </a>
      {/* Render content */}
      {DropdownNavbarContent}
    </div>
  )
}


export {
  DropdownNavbar,
};
