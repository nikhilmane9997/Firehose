import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Data from "./Receiving.json";
import "./Receiving.css";
import { Table } from "reactstrap";
import { Container } from "reactstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataGrid } from '@material-ui/data-grid';
import { BrowserRouter as Router, Route, NavLink, useHistory } from 'react-router-dom'
import UserTable from "./UserTable";


export default function Receiving() {
  
  console.log(Data.checkin.checkin_date);
  const [state, setstate] = useState({
    checkin_no: "",
    order_no: "",
    status: false,
    
  });
  const [visible, setvisible] = useState(false);
  const [query, setQuery] = useState("");
  // const [rows, setRows] = useState([]);
  // const handleChange = item => e => {
  //   const { name, value } = e.target;
  //   let items = Data.orders[0].tracking_units.map((row, id) => {
  //     if (row.id === item.id) {
  //       row[name] = value;
  //     }
  //     return row;
  //   });
  //   setRows(items);
  // };


  const [checkbox, setcheckbox] = useState({
    checked: false,
  });

//   const handleAddRow = () => {
//   let item = Data.orders[0].tracking_units.map((value, index)=>{

//   })
//   setRows([...rows, item]);
// };

const history = useHistory();
const routeChange =() => {
  let path = "./usertable";
  history.push(path);
}

  const [Items, setItems] = useState([]);

  const handleQueryChange = (event) => {
    console.log("Event:", event.target.value);
    setQuery(event.target.value);
  };

  
  // const handleRemoveSpecificRow = item => () => {
  //   let items = rows.filter(row => row.id != item.id);
  //   setRows(items);
  // };



  const handle = (e) => {
    const { value, name } = e.target;
    setstate((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  // console.log(Data.orders[0].tracking_units.length);
  return (
    <>
      <Container>
        <br />
        <div>
          {/* d5d5d5 */}
          <div className="r_h_rcp"></div>
          <h1>RECEIVING CONFIRMATION PAGE</h1>
          <div className="r_head_block">
            <div className="r_head_input">
              <input
                type="text"
                placeholder="ORDER NO"
                name="order_no"
                value={state.order_no}
                onChange={handle}
              />
              <input
                type="text"
                placeholder="CHECK-IN NO"
                name="checkin_no"
                value={state.checkin_no}
                onChange={handle}
              />
            </div>
            <div className="r_head_btn">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  if (
                    state.checkin_no == Data.checkin.checkin_no ||
                    state.order_no == Data.orders[0].order.order_no
                  ) {
                    setvisible(true);
                  }
                }}
              >
                SEARCH
              </Button>
            </div>
          </div>
        </div>
        <br />
        {visible === true ? (
          <div>
            <span className="rh_display">
              <h6 className="">{Data.customer.code}</h6>
              <h6 className="rh_display_or">{Data.orders[0].order.order_no}</h6>
              <h6 className="rh_display_cin">{Data.checkin.checkin_no}</h6>
              <h6 className="rh_display_cid">{Data.checkin.checkin_date}</h6>
            </span>

            <span>
              <Button
                variant="contained"
                className="t_ehn_button"
                color="secondary"
                onClick={
                 ()=>{
                  routeChange()
                 }
                }
              >
                ADD LINE
              </Button>
              <p className="t_w_center">WH RECEIPT NO</p>
              <span className="t_w_right">
                <p>LINES {Data.orders[0].tracking_units.length}</p>
                <p>DAMAGE 0</p>
              </span>
            </span>

            <br />
            <br />
            <center>
              <Table hover>
                <thead>
                  <tr align="center">
                    <th align="center">
                      <input
                        type="checkbox"
                        value={checkbox.checked}
                        name="checked"
                        onClick={() => {
                          setcheckbox({ checked: true });
                        }}
                      />
                    </th>
                    <th align="center">Tracking No Units</th>
                    <th align="center">Quantity</th>
                    <th align="center" onClick={()=>{

                    }}>Location</th>
                    <th align="center">Damage Quantity</th>
                    <th align="center">Notes</th>
                    <th align="center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Data.orders[0].tracking_units.map((values, index) => {
                    const deleteItems = (index) => {
                      setItems(
                        Data.orders[0].tracking_units.filter(
                          (item, i) => i !== index
                        )
                      );
                    };
                    return (
                      <>
                        <tr className="borders" key={index}>
                          <td align="center">
                            <input
                              type="checkbox" 
                              onChange={handleQueryChange}
                              
                            />
                          </td>
                          <td align="center">{values.tracking_unit_no}</td>
                          <td align="center">{values.quantity}</td>
                          <td align="center" contentEditable={values.tracking_unit_no ? true : false}>
                            {values.location}
                          </td>
                          <td align="center" contentEditable={values.tracking_unit_no ? true : false}>
                            {/* {values.damaged_qty <= values.target.value
                              ? values.damaged_qty
                              : alert("Damage Qty is greater than Quantity")} */}
                          </td>
                          <td align="center" contentEditable={values.tracking_unit_no ? true : false}>
                            {values.notes}
                          </td>
                          <td align="center">
                            <DeleteIcon />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
              <br />
              <br />
              <div className="b_button_left">
                <input type="text" placeholder="LOCATION" />
                <Button variant="contained" color="secondary">
                  APPLY
                </Button>
              </div>
              <div className="b_button_right">
                <Button variant="contained" color="secondary">
                  RECEIVE
                </Button>
              </div>
            </center>
          </div>
        ) : (
          <h6 className="Error_intro">Enter the Details</h6>
        )}
      </Container>
    </>
  );
}

// import React, { useState } from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import Data from './Receiving.json'

// export default function DataGridDemo() {
  
//   const columns = [
//     { field: 'tracking_unit_no', headerName: 'Tracking unit no', width: 120},
//     { field: 'quantity', headerName: 'Quantity', width: 130 },
//     { field: 'location', headerName: 'Location', width: 130 },
//     { field: 'damaged_qty', headerName: 'damaged_qty', width: 130 },
//     { field: 'notes', headerName: 'notes', width: 130 },
//   ];
  
//   const rows = Data.orders[0].tracking_units
//   return (
//     <div style={{ height: 600, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={Data.orders[0].tracking_units.length} checkboxSelection   
//       />
//     </div>
//   );
// }

// import React from "react";
// import { render } from "react-dom";

// class Receiving extends React.Component {
//   state = {
//     rows: Data.orders[0].tracking_units,
//   };
//   handleChange = idx => e => {
//     const { name, value } = e.target;
//     const rows = [...this.state.rows];
//     rows[idx] = {
//       [name]: value
//     };
//     this.setState({
//       rows
//     });
//   };
//   handleAddRow = () => {
//     const item = {
//       name: "",
//       mobile: ""
//     };
//     this.setState({
//       rows: [...this.state.rows, item]
//     });
//   };
//   handleRemoveRow = () => {
//     this.setState({
//       rows: this.state.rows.slice(0, -1)
//     });
//   };
//   handleRemoveSpecificRow = (idx) => () => {
//     const rows = [...this.state.rows]
//     rows.splice(idx, 1)
//     this.setState({ rows })
//   }
//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row clearfix">
//             <div className="col-md-12 column">
//               <table
//                 className="table table-bordered table-hover"
//                 id="tab_logic"
//               >
//                 <thead>
//                   <tr>
//                     <th className="text-center"> # </th>
//                     <th className="text-center"> Name </th>
//                     <th className="text-center"> Track </th>
//                     <th className="text-center"> Quantity </th>
//                     <th />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.rows.map((item, idx) => (
//                     <tr id="addr0" key={idx}>
//                       <td>{item.id}</td>
//                       <td>{item.tracking_unit_no}</td>
//                       <td>{item.quantity}</td>
//                       <td>
//                         <input
//                           type="text"
//                           name="name"
//                           value={this.state.rows[idx].name}
//                           onChange={this.handleChange(idx)}
//                           className="form-control"
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="text"
//                           name="mobile"
//                           value={this.state.rows[idx].mobile}
//                           onChange={this.handleChange(idx)}
//                           className="form-control"
//                         />
//                       </td>
//                       <td>
//                         <button
//                           className="btn btn-outline-danger btn-sm"
//                           onClick={this.handleRemoveSpecificRow(idx)}
//                         >
//                           Remove
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button onClick={this.handleAddRow} className="btn btn-primary">
//                 Add Row
//               </button>
//               <button
//                 onClick={this.handleRemoveRow}
//                 className="btn btn-danger float-right"
//               >
//                 Delete Last Row
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Receiving