import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import MatchesForm from './MatchesForm';
import MatchesShowcase from './MatchesShowcase';
import { SEASONS, COMPETITIONS, GENDERS } from '../../constants/configurable-constants';

const mapStateToProps = (state) => ({
  matches: state.matchesPage.matches,
  loading: state.matchesPage.loading,
  error: state.matchesPage.error,
});

/* eslint-disable no-unused-vars */
const mapDispatchToProps = (dispatch) => {};

class Matches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: {
        seasonSuggestions: SEASONS,
        competitionSuggestions: COMPETITIONS,
        genderSuggestions: GENDERS,
      },
      placeholders: {
        seasonPlaceholder: 'Alegeti sezonul...',
        competitionPlaceholder: 'Alegeti competitia...',
        genderPlaceholder: 'Alegeti sexul...',
      },
      query: 'Lorem ipsum dolor sit amet plmmmmmmmmmmmmmmmmmmmmmmm',
    };
  }

  render() {
    const { matches, loading, error } = this.props;
    /* eslint-enable no-unused-vars */

    // eslint-disable-next-line no-unused-vars
    const { suggestions, query, placeholders } = this.state;

    return (
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <MatchesForm suggestions={suggestions} placeholders={placeholders} />
        </Grid>
        <Grid item xs={9}>
          <MatchesShowcase matches={matches} />
        </Grid>
      </Grid>
    );
  }
}

Matches.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      matchNumber: PropTypes.number.isRequired,
      homeTeamName: PropTypes.string.isRequired,
      awayTeamName: PropTypes.string.isRequired,
      dateString: PropTypes.string.isRequired,
      locality: PropTypes.string.isRequired,
      A1: PropTypes.string.isRequired,
      A2: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
