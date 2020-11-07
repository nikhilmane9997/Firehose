import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Data from "./Data.json";
import Button from "@material-ui/core/Button";
import "./Shipping.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    Container,
  } from "reactstrap";

  const S_Info_Table = () => {
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.NO</TableCell>
              <TableCell align="center">ITEM CODE </TableCell>
              <TableCell align="center">DESCRIPTION</TableCell>
              <TableCell align="center">REQ QTY</TableCell>
              <TableCell align="center">PICK QTY</TableCell>
              <TableCell align="center">NOTES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.item_no}
                </TableCell>
                <TableCell align="center">{row.tracking_unit}</TableCell>
                <TableCell align="center">Desc</TableCell>
                <TableCell align="center">Req Qty</TableCell>
                <TableCell align="center">Pick Qty</TableCell>
                <TableCell align="center">Notes</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }



const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function S_Try() {
  const In = [];
  // alert(In)
  const [state, setstate] = useState({
    state: false,
  });

  return (
    <>
    <Container>
      <div>
        <div className="S_h_scp"></div>
        <h1>SHIPPING CONFIRMATION PAGE</h1>
        <div className="r_head_block"></div>
      </div>

      {Data.map((val, index) => {
        return (
          <>
            <div className="S_Table_info">
              <table
                onClick={() => {
                  alert(index + " : from Vertical");
                }}
              >
                <div className="S_table_left">
                  <div className="">
                    <h4>{val.available}</h4>
                  </div>

                  <tr>
                    <div className="S_Left">
                      <div className="S_RP">
                        <tr>REQ Lading QTY : {val.available}</tr>
                        <tr>KED Lading QTY : {val.picked_qty}</tr>
                      </div>
                      <div className="">
                        <tr>status : {val.available}</tr>
                      </div>
                    </div>
                  </tr>
                </div>
              </table>
            </div>
          </>
        );
      })}

      <div>
        <div className="SI_info">
          <h3 className="SI_info_sti">SHIP TO INFORMATION</h3>
          <p className="SI_info_wsn">WH SHIPMENT NO</p>
          <h3 className="SI_info_bti">BILL TO INFORMATION</h3>
        </div>
        <div className="">
          <div className="SI_info_cd">
            <div className="SI_info_cd">
              <p>CUSTOMER NAME</p>
              <p className="SI_info_d">DIVISION NAME</p>
            </div>
            <div className="SI_info_cc">
              <p>CHECK-IN NO</p>
              <p className="SI_info_c">CHECK-IN DATE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="S_Info_SIT">
        <S_Info_Table />
      </div>
      <div className="SI_footer_buttons">
        <div className="OP_b_b12">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => window.print()}
          >
            PRINT
          </Button>
        </div>
        <div className="OP_b_b34">
          <Button className="S_Info_scb" variant="contained" color="secondary">
            SHIP CONFIRM
          </Button>
          <h6 className="S_Info_wait">PLEASE WAIT, GENERATING BOL</h6>
        </div>
      </div>
      </Container>
    </>
  );
}