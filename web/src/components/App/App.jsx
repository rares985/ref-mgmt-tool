import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Matches from '../Matches/Matches';
import Referees from '../Referees/Referees';
import News from '../News/News';
import TabContainer from './TabContainer';
import Navbar from './Navbar';
import SizeableAvatar from './SizeableAvatar';

const NEWS_PAGE_ID = 0;
const REFEREES_PAGE_ID = 1;
const MATCHES_PAGE_ID = 2;
const LOGIN_PAGE_ID = 3;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsStyles: {
    tabsIndicator: {
      backgroundColor: '#ffffff',
    },
  },
});

const App = (props) => {
  const [value, setValue] = useState(MATCHES_PAGE_ID);

  const { classes } = props;

  // TODO: Find out how to make scrollbar only on TabContainer...
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <SizeableAvatar />
          <Navbar value={value} onChange={(event, val) => setValue(val)} />
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
};

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default withStyles(styles)(App);
