import React from 'react'
import {orderBy} from 'lodash'
import {useSelector} from 'react-redux'

import ArticlesList from './articles-list'

export default function ArticlesListContainer({searchPhrase}) {
  const articles = useSelector(state => state.articles)

  const filteredArticles = searchPhrase 
    ? articles.filter(article => article.title.includes(searchPhrase)) 
    : articles

  return <ArticlesList articles={orderBy(filteredArticles, ['date'], ['desc'])} />;
}