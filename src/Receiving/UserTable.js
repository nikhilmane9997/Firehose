
import React, { useState } from "react";
import { Table, Button, Input } from "reactstrap";
import { Container } from 'reactstrap';
import DeleteIcon from "@material-ui/icons/Delete";
import Data from './Receiving.json'

export default function UserTable() {
  const [rows, setRows] = useState([]);
  const handleChange = item => e => {
    const { name, value } = e.target;
    let items = rows.map(row => {
      if (row.id === item.id) {
        row[name] = value;
      }
      return row;
    });
    setRows(items);
  };
  const handleAddRow = () => {
    let item = {
      id: rows.length + 1,
      tracking_unit_no: "",
      quantity: "",
      location: "",
      damaged_qty: "",
      notes: "",
    };
    setRows([...rows, item]);
  };
  const handleRemoveRow = () => {
    setRows(rows.slice(0, -1));
  };
  const handleRemoveSpecificRow = item => () => {
    let items = rows.filter(row => row.id != item.id);
    setRows(items);
  };
  console.log(rows);
  return (
    <Container>
    <div>
        <br />
        <Button onClick={handleAddRow}>Add Row</Button><br />
        
      {rows.length != 0 && (
        <Table hover>
          <thead className="thead-light" align="center">
            <tr>
              <th>#</th>
              <th align="center">TRACKING UNIT NO</th>
              <th align="center">QUANTITY</th>
              <th align="center">LOCATION</th>
              <th align="center">DAMAGED QTY</th>
              <th align="center">NOTES</th>
              <th align="center">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr id="addr" key={index}>
                <td>{item.id}</td>
                <td>
                  <Input
                    type="text"
                    name="tracking_unit_no"
                    align="center"
                    value={item.tracking_unit_no}
                    onChange={handleChange(item)}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    name="quantity"
                    value={item.quantity}
                    align="center"
                    onChange={handleChange(item)}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    name="location"
                    value={item.location}
                    align="center"
                    onChange={handleChange(item)}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    align="center"
                    name="damaged_qty"
                    value={item.damaged_qty}
                    onChange={handleChange(item)}
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    align="center"
                    name="notes"
                    value={item.notes}
                    onChange={handleChange(item)}
                  />
                </td>
                <td>
                  <Button
                    outline
                    color="danger"
                    onClick={handleRemoveSpecificRow(item)}
                  >
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
     
    </div>
    </Container>
  );
}
