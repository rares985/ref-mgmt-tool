import PropTypes from 'prop-types';
import React from 'react';
import SuggestionTextField from './SuggestionTextField';

function RefereesForm(props) {
  const {
    suggestions: { countySuggestions, lotSuggestions, categorySuggestions },
    placeholders: { countyPlaceholders, lotPlaceholders, categoryPlaceholders },
  } = props;

  return (
    <React.Fragment>
      <SuggestionTextField suggestions={countySuggestions} placeholder={countyPlaceholders} />
      <SuggestionTextField suggestions={lotSuggestions} placeholder={lotPlaceholders} />
      <SuggestionTextField suggestions={categorySuggestions} placeholder={categoryPlaceholders} />
    </React.Fragment>
  );
}

RefereesForm.propTypes = {
  suggestions: PropTypes.shape({
    countySuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    lotSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    categorySuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  placeholders: PropTypes.shape({
    countyPlaceholders: PropTypes.string.isRequired,
    lotPlaceholders: PropTypes.string.isRequired,
    categoryPlaceholders: PropTypes.string.isRequired,
  }).isRequired,
};

export default RefereesForm;
