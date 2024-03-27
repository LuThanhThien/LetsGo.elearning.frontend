import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react";

const Input = React.forwardRef(({ className, type, iconClassStart, iconClassEnd, startIcon, endIcon, isPassword, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)
  // console.log("Show password: " + showPassword)
  const manageShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    (
      <div
      className={cn(
        "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
        className,
      )}
      >
        <div className={cn("flex items-center pr-2", iconClassStart)}> {startIcon} </div>
        <input
          onPaste={(e)=>{
            if (!isPassword) { return true }
            e.preventDefault()
            return false;
          }} onCopy={(e)=>{
            if (!isPassword) { return true }
            e.preventDefault()
            return false;
          }}
          type={
            isPassword ? (showPassword ? "text" : "password") : type || "text"
          }
          className=
            "w-full pl-2 pr-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props} />
        {isPassword && (
          <div
            className="cursor-pointer"
            onClick={() =>manageShowPassword()}
          >
            {showPassword ? <Eye size={22}/> : <EyeOff size={22}/>}
          </div>
        )}
        <div className={cn("flex items-center pl-2", iconClassEnd)}> {endIcon} </div>
      </div>
      )
  );
})
Input.displayName = "Input"

export { Input }

