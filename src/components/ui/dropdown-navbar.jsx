import React, { useState, forwardRef } from "react"
import { cn } from "@/lib/utils"

const DropdownNavbar = ({ className, children, href, DropdownNavbarContent }) => {
  // const [hovering, setHovering] = useState<number | null>(null);
  // const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  // const [popoverHeight, setPopoverHeight] = useState<number | null>(null);

  // const refs = useRef<(HTMLElement | null)[]>([]);

  // const onMouseEnter = (index: number, el: HTMLElement) => {
  //   setHovering(index);
  //   setPopoverLeft(el.offsetLeft);
  //   const menuElement = refs.current[index];
  //   if (menuElement) {
  //     setPopoverHeight(menuElement.offsetHeight);
  //   }
  // };

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

function DropdownNav() {
  const [hovering, setHovering] = useState(null);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverHeight, setPopoverHeight] = useState(null);
  
  return (
    <nav className="items-start self-center flex w-[486px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
      <FlyoutLink href="/solutions">Solutions</FlyoutLink>
      <a
        onMouseEnter={(event) => {
          setHovering(1);
          setPopoverLeft(event.currentTarget.offsetLeft);
        }}
        onMouseLeave={() => {
          setHovering(null);
        }}
        href="/solutions"
        className="text-black text-center text-base font-medium leading-6 tracking-wide self-stretch"
      >
        Solutions
      </a>
      
      {hovering && (
        <div
          className="absolute top-12 pt-6 -ml-24 w-[600px] bg-white border border-gray-800 border-solid border-opacity-300 overflow-hidden transform-gpu rounded shadow-lg transition-all duration-200"
          style={{
            left: popoverLeft || 0,
            height: popoverHeight || 0,
          }}
        > 
          {/* <div className={cn("absolute", hovering === 1 ? "opacity-100": "opacity-0")}>
            <Menu />
          </div> */}
        </div>
      )}

    </nav>
  );
}

const FlyoutLink = ({ href, children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative text-black text-center text-base font-medium leading-6 tracking-wide self-stretch">
      <a>
        {children}
        <span 
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-0.5 -right-0.5 h-1 origin-left rounded-full bg-black transition-transform duration-300 ease-out"/>
        {/* Under line animation */}
      </a>
      {/* TODO: Render flyout content */}
    </div>
  )
}

const Menu = forwardRef<HTMLElement>((props, ref) =>{
  return (
    <div className="menu">
      <button className="menu-button">Menu</button>
      <ul className="menu-list">
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Contact</li>
        <li className="menu-item dropdown">
          <button className="dropdown-toggle">Prices</button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Option 1</li>
            <li className="dropdown-item">Option 2</li>
            <li className="dropdown-item">Option 3</li>
          </ul>
        </li>
      </ul>
    </div>
  );
});

export {
  DropdownNavbar,
  DropdownNav,
  FlyoutLink,
  Menu,
};
