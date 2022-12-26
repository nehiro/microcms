import Link from 'next/link';
import { client } from '../lib/client';
import { InferGetStaticPropsType, NextPage } from 'next/types';
import { Blog, Category, TotalCount } from '../ts/blog';
import { Pagination } from '../components/Pagenation';

type Props = {
  blog: Blog[];
  totalCount: TotalCount['totalCount'];
  category: Category[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
  totalCount,
  category,
}: Props) => {
  return (
    <div>
      <ul>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: { offset: 0, limit: 5 },
  });
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: categoryData.contents,
    },
  };
};
