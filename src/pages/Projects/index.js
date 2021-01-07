import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Nav from '../../components/Nav';

class Projects extends Component {
  
    render() {

      return (
        <div>
            <Nav page="projects"/>
            This is a project
        </div>
      )
    }
  }

export default withRouter(Projects);