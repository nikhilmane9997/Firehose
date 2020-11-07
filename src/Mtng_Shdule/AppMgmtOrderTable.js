
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Data from './Data.json'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AppMgmtOrderTable(props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const classes = useStyles();

  return (
      <>
     <center>
     <h5>{props.title}</h5>
     </center>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>REL</StyledTableCell>
            <StyledTableCell>DATE</StyledTableCell>
            <StyledTableCell align="right">CUSTOMER</StyledTableCell>
            <StyledTableCell align="right">DIVISION</StyledTableCell>
            <StyledTableCell align="right">ORDER REF</StyledTableCell>
            <StyledTableCell align="right">APPT CONF NO </StyledTableCell>
            <StyledTableCell align="right">FLAG</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              </StyledTableCell>
              <StyledTableCell align="right">{row.expiry}</StyledTableCell>
              <StyledTableCell align="right">{row.available}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.item_code}</StyledTableCell>
              <StyledTableCell align="right">{row.available}</StyledTableCell>
              <StyledTableCell align="right">{row.picked_qty}</StyledTableCell>
              <StyledTableCell align="right"><DeleteIcon /> </StyledTableCell>

              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}