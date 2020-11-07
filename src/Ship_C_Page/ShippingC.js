import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
} from "reactstrap";
import Data from "./Data.json";

function Header() {
  const [state, setstate] = useState({
    checkin_no: "",
    order_no: "",
    status: false,
  });

  const handle = (e) => {
    const { value, name } = e.target;
    setstate((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      {/* d5d5d5 */}
      <div className="container">
        <br />
        <div>
          {/* d5d5d5 */}
          <div className="r_h_rcp"></div>
          <h1>SHIPPING CONFIRMATION PAGE</h1>
          <div className="r_head_block">
            <div className="r_head_input">
              <input
                className="r_head_input_chk"
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
                //   onClick={() => {
                //     // alert(Data.orders[0].order.order_no);
                //     if (
                //       this.state.checkin_no == Data.checkin.checkin_no
                //     ) {
                //       this.setState({
                //         visible: true,
                //       });
                //     }
                //   }}
              >
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Footer = () => {
  return <>
      <div className="">
                <div className="S_Try_leftb">
                  <Button variant="contained" color="secondary" className="" 
                  >REVIEW BOL</Button>
                  <div className="S_Try_left">
                  <input type="text" className="S_Try_leftInp"/>
                  <Button variant="contained" color="secondary" className="">ADD RECORD</Button>
                  </div>
                  </div>
                  <div className="S_Try_Rightb">
                  <input type="text" className="S_Try_RightInp"/>
                  <Button variant="contained" color="secondary" className="S_Try_RightButton">ADD NO TAG</Button>
                  <Button variant="contained" color="secondary" className="">COMMIT</Button>
                </div>
                </div>
  </>;
};

const ItemTable = () => {
  return (
    <>
      <div>
      <div className="Tables_right">
              <Tables />
            </div>
        <div className="Card_overflow_">
          {/* {Data.items.map((val, index) => { */}
          {/* return ( */}
          <>
            <Card
              className="Card_Borders"
              style={{ border: "0px solid black" }}
            >
              <CardBody className="Card_Borders">
                <CardTitle>
                  <center>
                    <h5>Item Desctiption</h5>
                  </center>
                </CardTitle>
                <CardText>
                  <span>Item code : </span>
                  <span className="card_right">Req Qty : </span>
                </CardText>
                <CardText>
                  <span className="card_right">Commited Qty : </span>
                </CardText>
              </CardBody>
            </Card>
          </>
          );
          {/* })}  */}
        </div>
        <div className="Card_overflow_Horizontal">
          {/* {Data.items.map((val, index) => { */}
          {/* return ( */}
          <>
          
            <div className="Card_horizontal_left">
              <Card
                className="Card_Borders_Order"
                style={{ border: "0px solid black" }}
              >
                <CardBody className="Card_Borders">
                  <CardTitle>
                    <center>
                      <h5>ORDER NO</h5>
                    </center>
                  </CardTitle>
                  <CardText>
                    <span>Req Lading Qty : </span>
                    <div>PICKED Lading QTY : </div>
                  </CardText>
                </CardBody>
              </Card>
            </div>
            
            <Footer />
            <div>
            </div>
          </>
          );
          {/* })}  */}
        </div>
      </div>
    </>
  );
};

const Tables = () => {
  return (
    <>
      <div className="Table_fixed_height">
        <Table hover id="tab_logic">
          <thead className="t_border">
            <tr align="center">
              <th align="center"  >
                <input type="checkbox" name="isCheckedC" />
              </th>
              <th align="center"  className="t_border"> TRACKING UNIT</th>
              <th align="center"  className="t_border"> LOCATION </th>
              <th align="center"  className="t_border"> ITEM CODE </th>
              <th align="center"  className="t_border"> EXPIRY </th>
              <th align="center"  className="t_border"> AVAIL QTY </th>
              <th align="center"  className="t_border"> REQ PICK QTY</th>
              <th align="center"  className="t_border"> PICKED </th>
              <th align="center"  className="t_border"> NOTES </th>
            </tr>
          </thead>
          <tbody  >
            {Data.map((item, idx) => (
              <tr id="addr0" key={idx}  className="t_border">
                <td align="center" >
                  <input type="checkbox" name="checkbox" />
                </td>
                <td align="center">{item.tracking_unit}</td>
                <td align="center">{item.picked_qty}</td>
                <td align="center">{item.picked_qty}</td>
                <td align="center">{item.picked_qty}</td>
                <td align="center">{item.picked_qty}</td>
                <td align="center"  contentEditable={item.item_no ? true : false}>{item.picked_qty}</td>
                <td align="center">{item.picked_qty}</td>
                <td
                  align="center"
                  contentEditable={item.item_no ? true : false}
                >NOTES  {/* {item.damaged_qty <= item.target.value
                  ? item.damaged_qty
                  : alert("Damage Qty is greater than Quantity")} */}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default function ShippingC() {
  return (
    <>
      <Container>
        <Header />
        <ItemTable />
      </Container>
    </>
  );
}
