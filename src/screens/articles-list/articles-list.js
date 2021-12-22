import React, {Fragment} from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import removeMarkdown from "markdown-to-text";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import {truncate} from 'lodash'

import Typography from "@mui/material/Typography";

import {useHistory} from 'react-router'
import {Link} from 'react-router-dom'
import moment from "moment";
// import styled from '@emotion/styled'

// const ArticlesListWrapper = styled.button`
//   color: turquoise;
// `;


export default function ArticlesList({articles = []}) {
  const history = useHistory()

  return (
    <Paper sx={{ padding: 4, textAlign: "left" }} elevation={0}>
      <Paper sx={{ padding: 2, textAlign: "left" }} elevation={0}>
        <Typography variant="h5" component="h5">
          Welcome to the KPI_Wiki !!
        </Typography>
        <Typography variant="body2" component="p">
          This project is created in order to help KPI students find useful
          information.
        </Typography>
        <Link to="/contribute">
          <Button
            variant="contained"
            sx={{ margin: "32px 0" }}
            startIcon={<CreateIcon />}
          >
            Add article
          </Button>
        </Link>
      </Paper>
      <Paper sx={{ padding: 2, textAlign: "left" }} elevation={0}>
        <Typography variant="h5" component="h5">
          Recent articles:
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {articles.map((article, i) => (
            <Fragment key={article.slug}>
              <ListItem alignItems="flex-start">
                <ListItemButton
                  onClick={() => history.push(`/article/${article.slug}`)}
                >
                  <ListItemText
                    primary={article.title}
                    primaryTypographyProps={{
                      style: { fontWeight: 600 },
                    }}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {article.author + " — "}
                        </Typography>
                        {truncate(removeMarkdown(article.content), {
                          length: 70,
                        })}
                        <Typography
                          // sx={{ display: "inline" }}
                          component="p"
                          variant="body2"
                          color="text.secondary"
                        >
                          Last edited on{" "}
                          {moment(article.date).format("DD MMM YYYY")}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              {i + 1 !== articles.length && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    </Paper>
  );
};
