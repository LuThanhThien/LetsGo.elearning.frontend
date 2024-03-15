import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, startIcon, endIcon, ...props }, ref) => {
  return (
    (
      <div
      className={cn(
        "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
        className,
      )}
      >
        <div className="flex items-center"> {startIcon} </div>
        <input
          type={type}
          className=
            "w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props} />
        <div className="flex items-center"> {endIcon} </div>
      </div>
      )
  );
})
Input.displayName = "Input"

export { Input }
