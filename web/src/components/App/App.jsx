import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Matches from '../Matches/Matches';
import Referees from '../Referees/Referees';
import News from '../News/News';
import TabContainer from './TabContainer';
import FrvLogo from '../../assets/frv_logo_no_bg.png';

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
});

const App = (props) => {
  const [value, setValue] = useState(NEWS_PAGE_ID);

  const { classes } = props;

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Avatar alt="FRVolei_logo" src={FrvLogo} size="400x600" />
          <Tabs
            value={value}
            onChange={(event, val) => setValue(val)}
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
};

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default withStyles(styles)(App);
