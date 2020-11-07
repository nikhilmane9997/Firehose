
import React from 'react'
import AppMgmtTable from './AppMgmtTable'
import Button from '@material-ui/core/Button';
import "./Mgmt.css"
import { Container } from 'reactstrap';

// import React from "react";

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload() {
  const [file, setFile] = React.useState("");
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    < >
    <input type="file" onChange={handleUpload} className="upload-box"/>
    <div className="upload-box_p">
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
    </div>
    </>
  );
}

const AppShdlMgmt = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    console.log(e.target.files)
  }

  return (
   <>
    <Container className="themed-container">
        <div className="AppUpld_bg">
          <FileUpload />
        </div>
        <center>
        <h4 className="AppMgmtU_App">APPT SCHEDULE MANAGEMENT</h4><p className="AppUpld_p">UPLOAD SCREEN</p>
        </center>
        <Button variant="contained" color="secondary" className="AppUpld_Dload">Download PDF</Button>
        
        <AppMgmtTable title="Inbound" uploaded={10} errors={2}/>
        <AppMgmtTable title="Outbound" uploaded={2} errors={2}/>

        <Button variant="contained" color="secondary" className="button_update">SUBMIT</Button>
        </Container>
    </>  
  )
}

export default AppShdlMgmt;


