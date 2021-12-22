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
import CreateIcon from "@mui/icons-material/Create";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MarkdownRenderer from "react-markdown-renderer";
import {Link} from 'react-router-dom'
import Editor from "rich-markdown-editor";
import { useForm, useController } from "react-hook-form";
import toSlug from "slug";



// import styled from '@emotion/styled'

// const ArticlesListWrapper = styled.button`
//   color: turquoise;
// `;


export default function Contribute({ user, onAddArticle }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const slug = watch("slug");

  const defaultValue = "Write a new story... (edit this)"

  const {
    field: { onChange: onEditorChange },
  } = useController({
    name: "content",
    control,
    defaultValue,
  });

  return (
    <Paper elevation={0} sx={{ padding: 12, textAlign: "left" }}>
      <Typography variant="h5" component="h5" sx={{ marginBottom: 1 }}>
        New article
      </Typography>
      <Paper elevation={0} sx={{ textAlign: "left" }}>
        <TextField
          required
          id="standard-required"
          label="Article Title"
          placeholder="Title"
          variant="standard"
          sx={{ marginBottom: 2 }}
          {...register("title")}
        />
        <TextField
          required
          id="standard-required"
          label="Article Slug"
          placeholder="sample-slug"
          variant="standard"
          sx={{ marginBottom: 2, marginLeft: 4 }}
          {...register("slug", { setValueAs: toSlug })}
        />
        <br />
        <Typography variant="body2" component="span" sx={{ opacity: 0.7 }}>
          New article by {user.name}, read by /articles/{slug}
        </Typography>
        <Editor
          style={{ marginTop: 32 }}
          defaultValue={defaultValue}
          onChange={(getContent) => {
            const value = getContent()
            onEditorChange({ target: { value } })
          }}
        />
        <Button
          variant="contained"
          sx={{ margin: "32px 0" }}
          startIcon={<CreateIcon />}
          onClick={handleSubmit(onAddArticle)}
        >
          Publish
        </Button>
      </Paper>
    </Paper>
  );
};
