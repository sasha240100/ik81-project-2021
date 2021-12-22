import React from 'react'
import {useSelector} from 'react-redux'

import ArticlesList from './articles-list'

export default function ArticlesListContainer() {
  const articles = useSelector(state => state.articles)

  return <ArticlesList articles={articles} />;
}