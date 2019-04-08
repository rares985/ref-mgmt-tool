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
        'Caras-severin',
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
        'Satu mare',
        'Sibiu',
        'Suceava',
        'Teleorman',
        'Timis',
        'Tulcea',
        'Vaslui',
        'Vilcea',
        'Vrancea',
      ],
      query: 'Lorem ipsum dolor sit amet plmmmmmmmmmmmmmmmmmmmmmmm',
    };
  }

  render() {
    const { query } = this.state;

    const { countySuggestions } = this.state;

    return (
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <SuggestionTextField suggestions={countySuggestions} placeholder="Alegeti judetul..." />
        </Grid>
        <Grid item xs={9}>
          {query}
        </Grid>
      </Grid>
    );
  }
}

export default Referees;
