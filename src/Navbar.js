import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Receiving from './Receiving/Receiving'
import data from './Receiving/data'
import usertable from './Receiving/UserTable'
import Orderprep from './OrderPrep/Orderprep'
import AppMgmtOrder from './Mtng_Shdule/AppMgmtOrder'
import AppShdlMgmt from './Mtng_Shdule/AppShdlMgmt'
import ShippingC from './Ship_C_Page/ShippingC'
import ShippingInfo from './Ship_C_Page/ShippingInfo'
import Try from './try'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Firehose</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link activeClassName="active" to="/receiving" align="center" className="nav-link active">Receiving Page</Link>
            </NavItem>
            <NavItem>
              <Link activeClassName="active" to="/usertable" align="center" className="nav-link active">UserTable</Link>
            </NavItem>
            <NavItem>
              <Link activeClassName="active" to="/orderprep" align="center" className="nav-link active">Orderprep</Link>
            </NavItem>
            <NavItem>
              <Link activeClassName="active" to="/AppShdlMgmt" align="center" className="nav-link active">App Schedule</Link>
            </NavItem>
            <NavItem>
              <Link activeClassName="active" to="/appmgmtorder" align="center" className="nav-link active">App Order</Link>
            </NavItem>
            <NavItem>
              <Link activeClassName="active" to="/shipping" align="center" className="nav-link active">Shipping Confirmation</Link>
            </NavItem>
            <NavItem>
              <Link activeClassName="active" to="/shippinginfo" align="center" className="nav-link active">Shipping Information</Link>
            </NavItem>
            <NavItem>
              <Link activeClassName="active" to="/try" align="center" className="nav-link active">Try</Link>
            </NavItem>
          </Nav>
        
        </Collapse>
      </Navbar>
        <Switch>
          {/* <Route path="/receiving" component={Receiving}/> */}
          <Route path="/usertable" component={usertable}/>
          <Route path="/orderprep" component={Orderprep}/>
          <Route path="/appshdlmgmt" component={AppShdlMgmt}/>
          <Route path="/appmgmtorder" component={AppMgmtOrder}/>
          <Route path="/shipping" component={ShippingC}/>
          <Route path="/shippinginfo" component={ShippingInfo}/>
          <Route path="/receiving" component={data}/>
          <Route path="/try" component={Try}/>
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;