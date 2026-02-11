import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-colors rounded-sm shrink-0 disabled:opacity-50 disabled:pointer-events-none",
          // variants
          variant === "default" && "bg-primary text-on-primary hover:bg-primary/90",
          variant === "ghost" && "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
          variant === "outline" && "border border-outline-variant text-on-surface hover:bg-surface-container-high",
          variant === "destructive" && "bg-error text-on-error hover:bg-error/90",
          // sizes
          size === "sm" && "text-label-sm px-md py-xs",
          size === "md" && "text-label-lg px-lg py-sm",
          size === "lg" && "text-label-lg px-xl py-md",
          size === "icon" && "p-sm",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
