import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
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
    backgroundColor: indigo[600],
  },
});
/* eslint-enable no-unused-vars enable */

const NewsArticle = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { classes, article, size } = props;
  const avatarName = getInitials(article.author);

  return (
    <Grid item xs={size}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label={article.author}>
              {avatarName}
            </Avatar>
          }
          title={article.title}
          subheader={article.date_added}
        />
        <CardContent>
          <Typography component="p">{article.summary}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => setExpanded(!expanded)}
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
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  article: PropTypes.shape({
    author: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(NewsArticle);
