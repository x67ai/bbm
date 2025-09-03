import { forwardRef } from "react";
import { cn } from "../../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps & React.HTMLAttributes<HTMLDivElement>>(({
  className,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-gray-200 bg-white shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({
  className,
  children,
  ...props
}: CardHeaderProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("px-6 py-4 border-b border-gray-200", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("px-6 py-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({
  className,
  children,
  ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("px-6 py-4 border-t border-gray-200", className)}
      {...props}
    >
      {children}
    </div>
  );
};
