import Link from 'next/link';
import { Pagination } from '../../../components/Pagenation';
import { client } from '../../../lib/client';
import { Blog, Context, StartEnd, TotalCount } from '../../../ts/blog';

const PER_PAGE = 5;

type Props = {
  blog: Blog[];
  totalCount: TotalCount['totalCount'];
};

export default function BlogPageId({ blog, totalCount }: Props) {
  return (
    <div>
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
}

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: 'blog' });

  const pageNumbers = [];

  const range = (start: StartEnd['start'], end: StartEnd['end']) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: Context) => {
  // console.log(context);
  const id = Number(context.params.id);

  const data = await client.get({
    endpoint: 'blog',
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
