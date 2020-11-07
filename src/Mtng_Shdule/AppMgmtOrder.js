
import React from 'react'
import AppMgmtOrderTable from './AppMgmtOrderTable'
import Button from '@material-ui/core/Button';
import "./Mgmt.css"
import { Container } from 'reactstrap';

const Input = (props) => (
  <input type="file" name="file-input" multiple {...props} />
)

const AppShdlOrder = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    console.log(e.target.files)
  }

  return (
   <>
   <Container className="themed-container">
        <center>
          <div className="heading_app">
          <h4>APPT SCHEDULE MANAGEMENT</h4><p className="heading_app_p">ORDER MGMT SCREEN</p>
          </div>
        </center>
        <Button variant="contained" color="secondary" className="button_dload">Download PDF</Button>
        <div className="AppOrd_table_size">

        </div>
        <AppMgmtOrderTable title="Inbound"/> <br/>
        <AppMgmtOrderTable title="Outbound"/>

        <Button variant="contained" color="secondary" className="button_update">UPDATE</Button>
        </Container>
    </>  
  )
}

export default AppShdlOrder;


