import React from 'react'

import {useParams} from 'react-router'
import {Redirect} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { deleteArticle } from "../../redux/actions";
import Article from './article'


export default function ArticleContainer() {
  const {slug} = useParams()
  const dispatch = useDispatch();

  const article = useSelector((state) =>
    state.articles.find((article) => article.slug === slug)
  );

  const handleDeleteArticle = (articleId) => {
    dispatch(deleteArticle(articleId));
  };

  if (!article) {
    return <Redirect to="/" /> 
  }

  return <Article article={article} onDeleteArticle={handleDeleteArticle} />;
}