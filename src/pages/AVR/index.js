import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Nav from '../../components/Nav';

class AVR extends Component {
  
    render() {

      return (
        <div>
            <Nav page="AV research"/>
            F1/10 guides
        </div>
      )
    }
  }

export default withRouter(AVR);