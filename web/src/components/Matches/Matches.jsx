import React from 'react';
import Grid from '@material-ui/core/Grid';
import MatchesForm from './MatchesForm';
import { SEASONS, COMPETITIONS, GENDERS } from '../../constants/configurable-constants';

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
    const { suggestions, query, placeholders } = this.state;

    return (
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <MatchesForm suggestions={suggestions} placeholders={placeholders} />
        </Grid>
        <Grid item xs={9}>
          {query}
        </Grid>
      </Grid>
    );
  }
}

export default Matches;
