import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Typography from "@mui/material/Typography";
import MarkdownRenderer from "react-markdown-renderer";
import {Link} from 'react-router-dom'

// import styled from '@emotion/styled'

// const ArticlesListWrapper = styled.button`
//   color: turquoise;
// `;


export default function ArticlesList({ article, onDeleteArticle }) {
  return (
    <Paper elevation={0} sx={{ padding: 4, textAlign: "left", margin: '0 auto', width:  600 }}>
      <Link to="/">
        <Button sx={{ margin: "32px 0" }} startIcon={<ArrowBackIcon />}>
          To all articles
        </Button>
      </Link>
      <Button
        sx={{ margin: "32px 0", marginLeft: 4 }}
        onClick={() => onDeleteArticle(article._id)}
        variant="outlined"
        color="error"
      >
        Delete article
      </Button>
      <Typography variant="h5" component="h5">
        {article.title}
      </Typography>
      <Typography variant="body2" component="span" sx={{ opacity: 0.7 }}>
        Written by {article.author}
      </Typography>
      <MarkdownRenderer markdown={article.content} />
    </Paper>
  );
};
