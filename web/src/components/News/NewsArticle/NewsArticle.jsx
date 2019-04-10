import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { getInitials } from '../../../Utils/strmanip';

/* eslint-disable no-unused-vars */
const styles = (theme) => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
/* eslint-enable no-unused-vars enable */

const NewsArticle = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { article, size } = props;
  const avatarName = getInitials(article.author);

  return (
    <Grid item xs={size}>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label={article.author}>{avatarName}</Avatar>}
          title={article.title}
          subheader={article.date_added}
        />
        <CardContent>
          <Typography component="p">{article.summary}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <Typography paragraph>{article.content}</Typography>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

NewsArticle.propTypes = {
  size: PropTypes.number.isRequired,
  article: PropTypes.shape({
    author: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(NewsArticle);
