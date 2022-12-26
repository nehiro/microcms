export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  description?: string;
  category: Category;
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type Data = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Context = {
  params: { id: string };
  locales: any;
  locale: any;
  defaultLocale: any;
};

export type TotalCount = {
  totalCount: number;
};

export type StartEnd = {
  start: 1;
  end: number;
};
