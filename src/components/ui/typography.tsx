import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

type TypographyProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
    text: string,
    className?: string
} & HTMLAttributes<HTMLElement>
const typographyVariants = cva('tracking-tight', {
    variants: {
        variant: {
            h1: 'scroll-m-20 text-4xl font-extra-bold tracking-tight lg:text-5xl',
            h2: 'scroll-m-16 text-3xl font-extra-bold tracking-tight lg:text-4xl',
            h3: 'scroll-m-12 text-2xl font-extra-semibold tracking-tight lg:text-3xl',
            h4: 'scroll-m-10 text-xl font-extra-medium tracking-tight lg:text-2xl',
            h5: 'scroll-m-8 text-lg font-extra-normal tracking-tight lg:text-xl',
            h6: 'scroll-m-6 text-base font-extra-normal tracking-tight lg:text-lg',
            p: 'scroll-m-4 text-sm font-extra-normal tracking-tight lg:text-base',
        }
    },
    defaultVariants: {
        variant: 'h1'
    }
})
const Typography: FC<TypographyProps> = ({ variant = 'h1', text, className, ...props }) => {
    const Component = variant
    return (
        <Component
            className={cn(typographyVariants({ variant }), className)}
            {...props}
        >
            {text}
        </Component>
    );
};
export default Typography