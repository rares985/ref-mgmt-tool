import React from 'react';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid';
import NewsArticle from './NewsArticle/NewsArticle';

import { ARTICLE_STUBS } from '../../stubs/article-stubs';

const COL_SIZE = 12;

/* eslint-disable max-len */
class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedPerRow: 3,
      articles: ARTICLE_STUBS,
    };
  }

  render() {
    const { articles, displayedPerRow } = this.state;
    const itemSize = Math.floor(COL_SIZE / displayedPerRow);

    return (
      <Grid container spacing={24}>
        {articles.map((item) => (
          <NewsArticle size={itemSize} article={item} key={uuid()} />
        ))}
      </Grid>
    );
  }
}
/* eslint-enable max-len */
export default News;
