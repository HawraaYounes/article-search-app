import React from 'react';
import Article from './Article';

function ArticleList({ articles, searchTerm }) {
  return (
    <div className="article-list">
      {articles.map(article => (
        <Article key={article.id} article={article} searchTerm={searchTerm} />
      ))}
    </div>
  );
}

export default ArticleList;
