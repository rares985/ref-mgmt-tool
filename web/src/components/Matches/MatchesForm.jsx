import PropTypes from 'prop-types';
import React from 'react';
import SuggestionTextField from '../SuggestionTextField/SuggestionTextField';

function RefereesForm(props) {
  const {
    suggestions: { seasonSuggestions, competitionSuggestions, genderSuggestions },
    placeholders: { seasonPlaceholder, competitionPlaceholder, genderPlaceholder },
  } = props;

  // TODO: Cautare dupa nr de meci
  // TODO: Nr Meci
  // TODO: Cautare dupa perioada
  // TODO: Cautare dupa locatie

  return (
    <React.Fragment>
      <SuggestionTextField
        suggestions={seasonSuggestions}
        placeholder={seasonPlaceholder}
        label="Sezon"
      />
      <SuggestionTextField
        suggestions={competitionSuggestions}
        placeholder={competitionPlaceholder}
        label="Competitie"
      />
      <SuggestionTextField
        suggestions={genderSuggestions}
        placeholder={genderPlaceholder}
        label="Sex"
      />
    </React.Fragment>
  );
}

RefereesForm.propTypes = {
  suggestions: PropTypes.shape({
    seasonSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    competitionSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    genderSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  placeholders: PropTypes.shape({
    seasonPlaceholder: PropTypes.string.isRequired,
    competitionPlaceholder: PropTypes.string.isRequired,
    genderPlaceholder: PropTypes.string.isRequired,
  }).isRequired,
};

export default RefereesForm;
