import React from 'react';
import Grid from '@material-ui/core/Grid';
import RefereesForm from './RefereesForm';
import { COUNTIES, LOTS, CATEGORIES } from '../../constants/configurable-constants';

class Referees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: {
        countySuggestions: COUNTIES,
        lotSuggestions: LOTS,
        categorySuggestions: CATEGORIES,
      },
      placeholders: {
        countyPlaceholder: 'Alegeti judetul...',
        lotPlaceholder: 'Alegeti lotul...',
        categoryPlaceholder: 'Alegeti categoria...',
      },
      query: 'Lorem ipsum dolor sit amet plmmmmmmmmmmmmmmmmmmmmmmm',
    };
  }

  render() {
    const { suggestions, query, placeholders } = this.state;

    return (
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <RefereesForm suggestions={suggestions} placeholders={placeholders} />
        </Grid>
        <Grid item xs={9}>
          {query}
        </Grid>
      </Grid>
    );
  }
}

export default Referees;
