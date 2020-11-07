import React, { Component, useState } from "react";
import { render } from "react-dom";
import Data from "./Receiving.json";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
// import Checkbox from '@material-ui/core/Checkbox';
import { Table } from "reactstrap";
import {
  Route,
  Router,
  NavLink,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import { Check } from "@material-ui/icons";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  
  console.log(props.name)
  const handleChange = (e) => {
    setIsChecked(!isChecked);
  };

  return <input type="checkbox"value={props.value} onChange={handleChange} checked={isChecked} />;
};

class Receiving extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      rows: Data.orders[0].tracking_units,
      checkin_no: "",
      order_no: "",
      visible: false,
      values: [],
      isChecked: false,
      location: "",
      locationShow: false
    }
    this.toggleChange = this.toggleChange.bind(this)
  }

  toggleChange = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.checked,
    // });
    let data = this.state.values;
    data.push(this.state.location)
    this.setState({values:data})        
    console.log(data)
  };

  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };

  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onButtonClickHandler = (e, idx) => {
    // if(this.state.values){
    //   this.setState({ [e.target.name]: e.target.value });
    //   this.setState({locationShow: true});
    // }
    let data = this.state.values;
    data.push(idx)
    this.setState({values:data})
     console.log(data)
  };

  render() {
    const { isChecked, isCheckedC } = this.state;
    // alert(this.state.isChecked)

    return (
      <>
        <div className="container">
          <br />
          <div>
            {/* d5d5d5 */}
            <div className="r_h_rcp"></div>
            <h1>RECEIVING CONFIRMATION PAGE</h1>
            <div className="r_head_block">
              <div className="r_head_input">
                
                <input
                  className="r_head_input_chk"
                  type="text"
                  placeholder="CHECK-IN NO"
                  name="checkin_no"
                  value={this.state.checkin_no}
                  onChange={this.handleChanges}
                />
              </div>
              <div className="r_head_btn">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    // alert(Data.orders[0].order.order_no);
                    if (this.state.checkin_no == Data.checkin.checkin_no) {
                      this.setState({
                        visible: true,
                      });
                    }
                  }}
                >
                  SEARCH
                </Button>
              </div>
            </div>
          </div>
          <br />
          {this.state.visible === true ? (
            <div>
              <span className="rh_display">
                <h6 className="">{Data.customer.code}</h6>
                <h6 className="rh_display_or">
                  {Data.orders[0].order.order_no}
                </h6>
                <h6 className="rh_display_cin">{Data.checkin.checkin_no}</h6>
                <h6 className="rh_display_cid">{Data.checkin.checkin_date}</h6>
              </span>

              <span>
                <Button
                  variant="contained"
                  className="t_ehn_button"
                  color="secondary"
                  onClick={() => this.props.history.push("/usertable")}
                >
                  {" "}
                  ADD LINE
                </Button>
                <p className="t_w_center">WH RECEIPT NO</p>
                <span className="t_w_right">
                  <p>LINES {Data.orders[0].tracking_units.length}</p>
                  <p>DAMAGE 0</p>
                </span>
              </span>
              <div className="Table_fixed_height">
                <Table hover id="tab_logic">
                  <thead>
                    <tr align="center">
                      <th align="center">
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="Headerchecked"
                        color="primary"
                        
                      />
                      </th>
                      <th align="center"> Tracking Unit No </th>
                      <th align="center"> Quantity </th>
                      <th align="center"> Location </th>
                      <th align="center"> Damage Quantity </th>
                      <th align="center"> Notes </th>
                      <th align="center"> Delete </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td align="center">
                        <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="Bodychecked"
                        color="primary"
                        value={idx}
                        onChange={(e)=>this.toggleChange(e, idx)}
                      />
                        </td>
                        <td align="center">{item.tracking_unit_no}</td>
                        <td align="center">{item.quantity}</td>
                        <td
                          align="center"
                          contentEditable={item.tracking_unit_no ? true : false}
                        >
                          {this.state.locationShow && this.state.location}
                        </td>
                        <td
                          align="center"
                          contentEditable={item.tracking_unit_no ? true : false}
                        >
                          {/* {item.damaged_qty <= item.target.value
                              ? item.damaged_qty
                              : alert("Damage Qty is greater than Quantity")} */}
                        </td>
                        <td
                          align="center"
                          contentEditable={item.tracking_unit_no ? true : false}
                        >
                          {item.notes}
                        </td>
                        <td align="center">
                          <DeleteIcon
                            onClick={this.handleRemoveSpecificRow(idx)}
                          >
                            Remove
                          </DeleteIcon>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="b_button_left">
                <input
                  type="text"
                  placeholder="LOCATION"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChanges}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.onButtonClickHandler}
                >
                  APPLY
                </Button>
              </div>
              <div className="b_button_right">
                <Button variant="contained" color="secondary">
                  RECEIVE
                </Button>
              </div>
            </div>
          ) : (
            <h6 className="Error_intro">Enter the Details</h6>
          )}
          {/* <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              < DeleteIcon onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"/> */}
        </div>
      </>
    );
  }
}

export default Receiving;
