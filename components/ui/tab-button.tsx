"use client"

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

const TabButton = ({ active, children, className, ...props }: TabButtonProps) => {
  return (
    <button
      className={cn(
        "px-3 py-1.5 rounded-md transition-colors",
        active ? "bg-white/10" : "hover:bg-white/5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default TabButton; 