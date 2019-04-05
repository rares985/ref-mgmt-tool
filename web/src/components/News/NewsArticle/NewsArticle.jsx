import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class NewsArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { article, size } = this.props;
    const { expanded } = this.state;

    // TODO: Beautify this somehow..it looks horrible @est(30m) @low
    let avatarName = article.author.match(/\b\w/g) || [];
    avatarName = ((avatarName.shift() || "") + (avatarName.pop() || "")).toUpperCase();

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
              onClick={this.handleExpandClick}
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
  }
}

NewsArticle.propTypes = {
  size: PropTypes.number.isRequired,
  article: PropTypes.shape({
    author: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default NewsArticle;
