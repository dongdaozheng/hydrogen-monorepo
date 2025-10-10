import type { HTMLAttributes, PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ children, className = '', ...rest }: CardProps) {
  const classes = 'rounded-xl border border-neutral-200 bg-white p-4 shadow-sm' + className;
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
