import React from 'react';
import { formatDate } from '../lib/formatDate';
import { Blog } from '../ts/blog';
import { Card } from './Card';

const Article = ({ article }: { article: Blog }) => {
  return (
    <Card as="article">
      {/* Cardの中身がchildren */}
      <Card.Title href={`/blog/${article.id}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.createdAt} decorate>
        {formatDate(article.createdAt.substr(0, 10))}
      </Card.Eyebrow>
      {article.description && (
        <Card.Description>{article.description}</Card.Description>
      )}
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};

export default Article;
