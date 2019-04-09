import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import uuid from 'uuid';

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.indigo,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const CustomizedTable = (props) => {
  const { classes, matches } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Numar meci</CustomTableCell>
            <CustomTableCell align="right">Gazda</CustomTableCell>
            <CustomTableCell align="right">Oaspete</CustomTableCell>
            <CustomTableCell align="right">Localitate</CustomTableCell>
            <CustomTableCell align="right">Data</CustomTableCell>
            <CustomTableCell align="right">A1</CustomTableCell>
            <CustomTableCell align="right">A2</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((match) => (
            <TableRow className={classes.row} key={uuid()}>
              <CustomTableCell align="right">{match.matchNumber}</CustomTableCell>
              <CustomTableCell align="right">{match.homeTeamName}</CustomTableCell>
              <CustomTableCell align="right">{match.awayTeamName}</CustomTableCell>
              <CustomTableCell align="right">{match.dateString}</CustomTableCell>
              <CustomTableCell align="right">{match.locality}</CustomTableCell>
              <CustomTableCell align="right">{match.A1}</CustomTableCell>
              <CustomTableCell align="right">{match.A2}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

CustomizedTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
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

export default withStyles(styles)(CustomizedTable);
