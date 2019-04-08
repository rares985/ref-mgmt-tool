import PropTypes from 'prop-types';
import React from 'react';
import SuggestionTextField from './SuggestionTextField';

function RefereesForm(props) {
  const { suggestions, placeholder } = props;

  return <SuggestionTextField suggestions={suggestions} placeholder={placeholder} />;
}

RefereesForm.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default RefereesForm;
