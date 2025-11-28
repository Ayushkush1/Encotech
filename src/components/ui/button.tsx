import * as React from "react";

type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(" ");

const variantClasses: Record<Variant, string> = {
    default: "bg-gradient-to-r from-brand to-brand-700 text-white hover:from-brand-600 hover:to-brand-700",
    destructive: "bg-error text-white hover:bg-error/90",
    outline: "border border-border bg-white text-foreground hover:bg-card",
    secondary: "bg-muted/20 text-foreground hover:bg-muted/30",
    ghost: "bg-transparent text-foreground hover:bg-muted/20",
    link: "bg-transparent text-brand underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
    default: "h-10 px-6 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-full px-8 py-3",
    icon: "h-10 w-10",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        const classes = cn(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            variantClasses[variant],
            sizeClasses[size],
            className,
        );

        return (
            <button ref={ref} className={classes} {...props} />
        );
    }
);

Button.displayName = "Button";

export { Button };

