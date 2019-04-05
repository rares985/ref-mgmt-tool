import { InputAdornment, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { RemoveRedEye } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { Component } from "react";

const HIDE_PASSWORD_DELAY_MS = 1500;

const styles = theme => ({
  eye: {
    cursor: "pointer"
  }
});

class MaskableTextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPasswordMasked: true
    };

    this.togglePasswordMask = this.togglePasswordMask.bind(this);
    this.timer = null;
  }

  togglePasswordMask = () => {
    setTimeout(() => {
      if (!this.state.isPasswordMasked) {
        this.setState(prevState => ({
          isPasswordMasked: true
        }));
      }
    }, HIDE_PASSWORD_DELAY_MS);

    this.setState(prevState => ({
      isPasswordMasked: !prevState.isPasswordMasked
    }));
  };

  render() {
    const { classes } = this.props;
    const { isPasswordMasked } = this.state;

    return (
      <TextField
        type={isPasswordMasked ? "password" : "text"}
        {...this.props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <RemoveRedEye className={classes.eye} onClick={() => this.togglePasswordMask()} />
            </InputAdornment>
          )
        }}
      />
    );
  }
}

MaskableTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default withStyles(styles)(MaskableTextField);
