import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ENTER_KEY_CODE = 13;
const UP_KEY_CODE = 38;
const DOWN_KEY_CODE = 40;

class SuggestionTextField extends React.Component {
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
    const { suggestions } = this.props;

    const filterFunc = function filt(s) {
      return s.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) > -1;
    };

    const filtered = suggestions.filter(filterFunc);

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
    const { active, filtered, matching } = this.state;

    switch (event.keyCode) {
      case ENTER_KEY_CODE:
        this.setState({
          active: 0,
          show: false,
          userInput: filtered[active],
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

    const { placeholder } = this.props;

    let suggestionsListComponent;

    if (show && userInput) {
      if (matching.length) {
        suggestionsListComponent = (
          <List component="ul">
            {matching.map((suggestion, index) => (
              <ListItem button selected={active === index} onClick={handleClick}>
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
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={userInput}
          placeholder={placeholder}
          autoFocus
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

SuggestionTextField.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SuggestionTextField;
