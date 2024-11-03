import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ className, active, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
          active
            ? "bg-foreground text-background"
            : "text-foreground/60 hover:text-foreground/80 hover:bg-foreground/5",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabButton.displayName = "TabButton";

export default TabButton; 