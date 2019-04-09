import PropTypes from 'prop-types';
import React from 'react';
import SuggestionTextField from './SuggestionTextField';

function RefereesForm(props) {
  const {
    suggestions: { countySuggestions, lotSuggestions, categorySuggestions },
    placeholders: { countyPlaceholder, lotPlaceholder, categoryPlaceholder },
  } = props;

  return (
    <React.Fragment>
      <SuggestionTextField
        suggestions={countySuggestions}
        placeholder={countyPlaceholder}
        label="Judet"
      />
      <SuggestionTextField suggestions={lotSuggestions} placeholder={lotPlaceholder} label="Lot" />
      <SuggestionTextField
        suggestions={categorySuggestions}
        placeholder={categoryPlaceholder}
        label="Categorie"
        acceptRomanNumerals
      />
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
    countyPlaceholder: PropTypes.string.isRequired,
    lotPlaceholder: PropTypes.string.isRequired,
    categoryPlaceholder: PropTypes.string.isRequired,
  }).isRequired,
};

export default RefereesForm;
