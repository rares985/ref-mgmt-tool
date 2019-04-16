import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import uuid from 'uuid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsIndicator: {
    backgroundColor: '#ffffff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#ffffff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

const Navbar = (props) => {
  const { value, onChange, classes } = props;

  const tabNames = ['Stiri', 'Arbitri', 'Meciuri', 'Login'];

  return (
    <Tabs
      value={value}
      onChange={onChange}
      classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
      variant="fullWidth"
      scrollButtons="auto"
    >
      {tabNames.map((item) => (
        <Tab
          disableRipple
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          label={item}
          key={uuid()}
        />
      ))}
      ;
    </Tabs>
  );
};

Navbar.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
