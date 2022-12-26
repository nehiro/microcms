import { client } from '../../lib/client';
import { Blog, Context, Data } from '../../ts/blog';

export default function BlogId({ blog }: { blog: Blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <p>{blog.category && `${blog.category.name}`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data: Data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: Context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });
  // console.log(data, 'data');
  return {
    props: {
      blog: data,
    },
  };
};
