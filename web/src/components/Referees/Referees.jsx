import React from 'react';
import Grid from '@material-ui/core/Grid';
import SuggestionTextField from './SuggestionTextField';

class Referees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countySuggestions: [
        'Alba',
        'Arad',
        'Arges',
        'Bacau',
        'Bihor',
        'Bistrita-Nasaud',
        'Botosani',
        'Braila',
        'Brasov',
        'Buzau',
        'Calarasi',
        'Caras-Severin',
        'Cluj',
        'Constanta',
        'Covasna',
        'Dimbovita',
        'Dolj',
        'Galati',
        'Giurgiu',
        'Gorj',
        'Harghita',
        'Hunedoara',
        'Ialomita',
        'Iasi',
        'Ilfov',
        'Maramures',
        'Mehedinti',
        'Mures',
        'Neamt',
        'Olt',
        'Prahova',
        'Salaj',
        'Satu Mare',
        'Sibiu',
        'Suceava',
        'Teleorman',
        'Timis',
        'Tulcea',
        'Vaslui',
        'Vilcea',
        'Vrancea',
      ],
      lotSuggestions: ['A', 'B', 'IL', 'NEDIV', 'RETRAS'],
      categorySuggestions: ['INT', 'R', 'I', 'II', 'III', 'IV'],
      query: 'Lorem ipsum dolor sit amet plmmmmmmmmmmmmmmmmmmmmmmm',
    };
  }

  render() {
    const { query } = this.state;

    const { countySuggestions, lotSuggestions, categorySuggestions } = this.state;

    return (
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <SuggestionTextField suggestions={countySuggestions} placeholder="Alegeti judetul..." />
          <SuggestionTextField suggestions={lotSuggestions} placeholder="Alegeti lotul..." />
          <SuggestionTextField
            suggestions={categorySuggestions}
            placeholder="Alegeti categoria..."
          />
        </Grid>
        <Grid item xs={9}>
          {query}
        </Grid>
      </Grid>
    );
  }
}

export default Referees;
