import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import FrvLogo from '../../assets/frv_logo_no_bg.png';

const styles = {
  bigAvatar: {
    width: 80,
    height: 80,
    marginTop: 5,
  },
};

const SizeableAvatar = (props) => {
  const { classes } = props;

  return <Avatar alt="FRVolei_logo" src={FrvLogo} className={classes.bigAvatar} />;
};

SizeableAvatar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SizeableAvatar);
