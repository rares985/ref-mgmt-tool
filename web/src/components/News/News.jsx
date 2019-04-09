import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid';
import { connect } from 'react-redux';
import NewsArticle from './NewsArticle/NewsArticle';

const COL_SIZE = 12;
const DISPLAYED_PER_ROW = 3;

const ITEM_SIZE = Math.floor(COL_SIZE / DISPLAYED_PER_ROW);

const mapStateToProps = (state) => ({
  articles: state.newsPage.articles,
});

/* eslint-disable no-unused-vars */
const mapDispatchToProps = (dispatch) => ({});
/* eslint-enable no-unused-vars */

const News = (props) => {
  const { articles } = props;
  return (
    <Grid container spacing={24}>
      {articles.map((item) => (
        <NewsArticle size={ITEM_SIZE} article={item} key={uuid()} />
      ))}
    </Grid>
  );
};

News.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date_added: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
