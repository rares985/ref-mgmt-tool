import React from "react";
import Grid from "@material-ui/core/Grid";
import chunk from "lodash/chunk";
import NewsArticle from "./NewsArticle/NewsArticle";

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedPerRow: 3,
      articles: [
        {
          author: "Alin Mateizer",
          title: "Article 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          summary: "Article 1 content",
          date_added: "September 17, 2019"
        },
        {
          author: "Rares",
          title: "Article 2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          summary: "Article 2 content",
          date_added: "September 17, 2019"
        },
        {
          author: "Daniel",
          title: "Article 3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          summary: "Article 3 content",
          date_added: "September 17, 2019"
        },
        {
          author: "Giancarlo De Carlo",
          title: "Article 4",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          summary: "Article 4 content",
          date_added: "September 17, 2019"
        }
      ]
    };
  }
  render() {
    let itemSize = ~~(12 / this.state.displayedPerRow);
    console.log(itemSize);

    // TODO: Use different value for key, not index @est(1h)
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          {this.state.articles.map((item, key) => (
            <NewsArticle size={itemSize} article={item} key={key} />
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default News;
