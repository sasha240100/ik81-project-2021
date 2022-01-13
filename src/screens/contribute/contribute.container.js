import React from 'react'

import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'
import Contribute from './contribute'
import {addArticle} from '../../redux/actions'
import {useHistory} from 'react-router';


export default function ContributeContainer() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleAddArticle = (article) => {
    dispatch(addArticle({
      ...article,
      author: user.name
    }))
  }

  return <Contribute user={user} onAddArticle={handleAddArticle} />;
}