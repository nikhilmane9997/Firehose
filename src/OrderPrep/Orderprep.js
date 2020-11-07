import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Orderprep.css";
import Data from "./order_prep-order.json";
import DataTable from "./order_prep-tu.json";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Table } from "reactstrap";

export default function Orderprep() {
  const [state, setstate] = useState({
    customer_code: "",
    order_no: "",
    division_code: "",
  });
  const [query, setQuery] = useState("");

  const [visible, setvisible] = useState(false);
  const [borderColor, setborderColor] = useState({
    bgColor: "",
  });

  const boxClick = (e) => {
    setborderColor({
      bgColor: "red"
    })
  }


  const [indexno, setindexno] = useState();

  const mystyle = {
    border: "2px solid #00c3ff",
  };

  const handle = (e) => {
    const { value, name } = e.target;
    setstate((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const ClickMe = (val) => {
    console.log(val.item.item_descr);
  };

  const Tables = () => {
    return (
      <>
        <Table className="OP_Table">
          <thead align="center">
            <tr>
              <th>Tracking Unit</th>
              <th>Location</th>
              <th>Item Code</th>
              <th>Expiry</th>
              <th>Available Qty</th>
              <th>Picked Qty</th>
            </tr>
          </thead>
          <tbody align="center">
            {DataTable.tracking_units.map((val, index) => {
              return (
                <>
                  <tr>
                    <td>{val.cust_tracking_no}</td>
                    <td contentEditable={true}>{val.location}</td>
                    <td>{DataTable.item.item_code}</td>
                    <td>{val.expiry_date}</td>
                    <td>{val.avail_qty}</td>
                    <td contentEditable={true}>{}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  };

  return (
    <>
      <Container>
        <div>
          {/* d5d5d5 */}
          <div className="r_h_rcp"></div>
          <center>
            <h1>ORDER PREP</h1>
          </center>

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
                placeholder="CUSTOMER CODE"
                name="customer_code"
                value={state.customer_code}
                onChange={handle}
              />
              <input
                type="text"
                placeholder="DIVISION CODE"
                name="division_code"
                value={state.division_code}
                onChange={handle}
              />
            </div>
            <div className="r_head_btn">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  if (
                    state.customer_code == Data.customer.code &&
                    state.order_no == Data.order.order_no &&
                    state.division_code == Data.division.code
                  ) {
                    // alert(state.order_no)
                    setvisible(true);
                  }
                }}
              >
                SEARCH
              </Button>
            </div>
          </div>
        </div>
        {visible === true ? (
          <span>
            <div className="ID_footer_T_overflow">
              <div className="ID_footer_T">
                <Tables />
              </div>
            </div>
            <div className="Card_overflow">
              {Data.items.map((val, index, event) => {
                // console.log(event.target.value)
                
                const changeColor = (event) => {
                  let newBg = mystyle.border;
                  setindexno(index);
                  setborderColor(newBg);
                };
                return (
                  <div className="">
                    <Card
                      onClick={() => {
                        
                        changeColor();
                      }}
                      style={{ border: borderColor }}
                      // style={{border: setborderColor.bgColor}}
                      // onClick={boxClick}>
                    >
                      <CardBody className="Card_Borders">
                        <CardTitle>
                          <center>
                            <h5>{val.item.item_descr}</h5>
                          </center>
                        </CardTitle>
                        <CardText>
                          <span>Item code : {val.item.item_code}</span>
                          <span className="card_right">Req Qty : </span>
                        </CardText>
                        <CardText>
                          <span className="card_right">Commited Qty : </span>
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}{" "}
            </div>
            <div className="ID_footer_pack">
              <div className="ID_footer_pack_h">
                <h4>{Data.order.transaction_ref}</h4>
              </div>
              <div className="ID_footer_cd">
                <div className="ID_footer_c">{Data.customer.code}</div>
                <div className="ID_footer_d">{Data.division.code}</div>
              </div>
            </div>
            <div className="OP_b_footer">
              <div className="OP_b_b12">
                <Button
                  className="OP_b_b1"
                  variant="contained"
                  color="secondary"
                  onClick={() => window.print()}
                >
                  PRINT
                </Button>
                <Button
                  className="OP_b_b2"
                  variant="contained"
                  color="secondary"
                >
                  DOWNLOAD
                </Button>
              </div>
              <div className="OP_b_b34">
                <input
                  type="text"
                  placeholder="TRACKING UNIT NO"
                  name="tno"
                  // value={state.tno}
                  // onChange={handle}
                />
                <Button
                  className="OP_b_b3"
                  variant="contained"
                  color="secondary"
                  // onClick={submit}
                >
                  ADD PALLET
                </Button>
                <Button
                  className="OP_b_b4"
                  variant="contained"
                  color="secondary"
                >
                  COMMIT
                </Button>
              </div>
            </div>
          </span>
        ) : (
          <h6 className="Error_intro_orderprep">Enter the Details</h6>
        )}
      </Container>
    </>
  );
}
