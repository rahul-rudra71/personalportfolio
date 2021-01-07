import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Nav from '../../components/Nav';

class Contact extends Component {
  
    render() {

      return (
        <div>
            <Nav page="contact"/>
            You can reach me here
        </div>
      )
    }
  }

export default withRouter(Contact);