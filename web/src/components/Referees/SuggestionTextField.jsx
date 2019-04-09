import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  ENTER_KEY_CODE,
  UP_KEY_CODE,
  DOWN_KEY_CODE,
} from '../../constants/nonconfigurable-constants';
import { toRomanNumeral } from '../../Utils/misc';

class SuggestionTextField extends React.Component {
  static defaultProps = {
    helperText: '',
    acceptRomanNumerals: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      matching: [],
      show: false,
      userInput: '',
    };
  }

  handleChange = (event) => {
    const { suggestions, acceptRomanNumerals } = this.props;

    const currentInput = event.currentTarget.value.toLowerCase();

    const filterMatches = function filt(s) {
      const inputAsNumber = parseInt(currentInput, 10);
      let inputAsRomanNumeral = '';
      if (Number.isInteger(inputAsNumber)) {
        inputAsRomanNumeral = toRomanNumeral(inputAsNumber).toLowerCase();
      }

      const normalMatch = s.toLowerCase().indexOf(currentInput) > -1;
      const romanMatch = acceptRomanNumerals
        ? s.toLowerCase().indexOf(inputAsRomanNumeral) > -1
        : false;

      return normalMatch || romanMatch;
    };

    // FIXME: Input 1 matches 'IV', we do not want that @est(30m)
    const filtered = suggestions.filter(filterMatches);

    this.setState({
      userInput: event.currentTarget.value,
      matching: filtered,
      show: true,
      active: 0,
    });
  };

  handleClick = (event) => {
    this.setState({
      active: 0,
      matching: [],
      show: false,
      userInput: event.currentTarget.innerText,
    });
  };

  handleKeyDown = (event) => {
    const { active, matching } = this.state;

    switch (event.keyCode) {
      // TODO: Fix enter event handler...doesn't set value for some reason @done
      case ENTER_KEY_CODE:
        this.setState({
          active: 0,
          show: false,
          userInput: matching[active],
        });
        break;
      case UP_KEY_CODE:
        if (active !== 0) {
          this.setState({
            active: active - 1,
          });
        }
        break;
      case DOWN_KEY_CODE:
        if (active - 1 !== matching.length) {
          this.setState({
            active: active + 1,
          });
        }
        break;
      default:
        break;
    }
  };

  render() {
    const {
      handleChange,
      handleClick,
      handleKeyDown,
      state: { active, matching, show, userInput },
    } = this;

    const { placeholder, label, helperText } = this.props;

    let suggestionsListComponent;

    if (show && userInput) {
      if (matching.length) {
        suggestionsListComponent = (
          <List component="ul">
            {matching.map((suggestion, index) => (
              <ListItem button selected={active === index} onClick={handleClick} key={suggestion}>
                <ListItemText primary={suggestion} />
              </ListItem>
            ))}
          </List>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>Nu exista sugestii!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <TextField
          variant="filled"
          type="text"
          label={label}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={userInput}
          placeholder={placeholder}
          autoFocus
          helperText={helperText}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

SuggestionTextField.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  acceptRomanNumerals: PropTypes.bool,
};

export default SuggestionTextField;
