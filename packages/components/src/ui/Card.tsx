import { cn } from '@shared/lib';
import type { HTMLAttributes, PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ children, className = '', ...rest }: CardProps) {
  const classes = cn('rounded-xl border border-neutral-200 bg-white p-4 shadow-sm', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
