import React from 'react'

import {useParams} from 'react-router'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Article from './article'


export default function ArticleContainer() {
  const {slug} = useParams()

  const article = useSelector((state) =>
    state.articles.find((article) => article.slug === slug)
  );

  if (!article) {
    return <Redirect to="/" /> 
  }

  return <Article article={article} />;
}