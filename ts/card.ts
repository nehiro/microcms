import { FC, ReactElement, ReactHTMLElement, ReactNode } from 'react';

export type Card = {
  as?: React.ElementType;
  className?: string;
  children: ReactNode;
};

export type Eyebrow = {
  [x: string]: any;
  as?: React.ElementType;
  decorate?: boolean | undefined;
  className?: string;
  children: ReactNode;
};

export type LinkType = {
  [x: string]: any;
  children: ReactNode;
  href: string;
};

export type Title = {
  as?: React.ElementType;
  href: string;
  children: ReactNode;
};
