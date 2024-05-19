import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ArticleList from './components/ArticleList';
import articles from './articles';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <SearchBox setSearchTerm={setSearchTerm} />
      <ArticleList articles={articles} searchTerm={searchTerm} />
    </div>
  );
}

export default App;