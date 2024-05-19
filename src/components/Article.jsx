import React from 'react';

function Article({ article, searchTerm }) {
  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  return (
    <div className="article">
      <h2>{highlightText(article.title, searchTerm)}</h2>
      <p>{highlightText(article.content, searchTerm)}</p>
    </div>
  );
}

export default Article;
