import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Matches from '../Matches/Matches';
import Referees from '../Referees/Referees';
import News from '../News/News';

const NEWS_PAGE_ID = 0;
const REFEREES_PAGE_ID = 1;
const MATCHES_PAGE_ID = 2;
const LOGIN_PAGE_ID = 3;

function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class App extends React.Component {
  state = {
    value: REFEREES_PAGE_ID,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BrowserRouter>
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
          {value === NEWS_PAGE_ID && (
            <TabContainer>
              <News />
            </TabContainer>
          )}
          {value === REFEREES_PAGE_ID && (
            <TabContainer>
              <Referees />
            </TabContainer>
          )}
          {value === MATCHES_PAGE_ID && (
            <TabContainer>
              <Matches />
            </TabContainer>
          )}
          {value === LOGIN_PAGE_ID && (
            <TabContainer>
              <Login />
            </TabContainer>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default withStyles(styles)(App);
