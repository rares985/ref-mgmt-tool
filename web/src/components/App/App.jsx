import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Login from "../Login/Login";
import Matches from "../Matches/Matches";
import Referees from "../Referees/Referees";
import News from "../News/News";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class App extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
          >
            <Tab label="Stiri" />
            <Tab label="Arbitri" />
            <Tab label="Meciuri" />
            <Tab label="Login" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <News />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Referees />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Matches />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <Login />
          </TabContainer>
        )}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
