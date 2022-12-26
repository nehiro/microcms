import { ReactNode } from 'react';

export type ArticleLayout = {
  children: ReactNode;
  meta: any;
  isRssFeed?: boolean | undefined;
  previousPathname: any;
};
