import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Nav from '../../components/Nav';

class Landing extends Component {

    render() {

      return (
        <div>
            <Nav page="home"/>
            This is how you land
        </div>
      )
    }
  }

export default withRouter(Landing);