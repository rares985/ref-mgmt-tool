/* eslint-disable no-unused-vars */
import { InputAdornment, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { RemoveRedEye } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import { HIDE_PASSWORD_DELAY_MS } from '../../../constants/configurable-constants';

const styles = (theme) => ({
  eye: {
    cursor: 'pointer',
  },
});

class MaskableTextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPasswordMasked: true,
    };

    this.togglePasswordMask = this.togglePasswordMask.bind(this);
    this.timer = null;
  }

  maskPassword = () => {
    const { isPasswordMasked } = this.state;
    if (!isPasswordMasked) {
      this.setState({
        isPasswordMasked: true,
      });
    }
  };

  togglePasswordMask = () => {
    setTimeout(this.maskPassword, HIDE_PASSWORD_DELAY_MS);

    this.setState((prevState) => ({
      isPasswordMasked: !prevState.isPasswordMasked,
    }));
  };

  render() {
    const { classes } = this.props;
    const { isPasswordMasked } = this.state;

    return (
      <TextField
        type={isPasswordMasked ? 'password' : 'text'}
        {...classes}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="Vedeti parola" onClick={this.togglePasswordMask}>
                {isPasswordMasked ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
}

MaskableTextField.propTypes = {
  classes: PropTypes.shape({
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.arrayOf]),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(MaskableTextField);
/* eslint-enable no-unused-vars */
