import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import "@/components/ui/default-button.scss"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


const DefaultButton = React.forwardRef(({ container, className, variant, size, icon, href = "", children, background = true, ...props }, ref) => {

  // Check containing href link or not
  const isLink = () => {
    const stripHref = href.replace(/(^\w+:|^)\/\//, '');
    if (stripHref.length > 0) {
      // console.log("Href is a link: ", stripHref)
      return true
    }
    // console.log("Href is not a link")
    return false
  }
  
  // If href comp is "a" tag else "button" tag
  const Comp = isLink() ? "a" : "button"
  
  return (
    (<div className={container}>
      <Comp 
        ref={ref}
        href={href}
        className={cn(buttonVariants({ variant, size, className }), (background && "button-nav-background"), className)}
        {...props}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {children}
      </Comp>
    </div>)    
  );
})
DefaultButton.displayName = "DefaultButton"

export { DefaultButton, buttonVariants }
