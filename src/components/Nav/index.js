import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

class Nav extends Component {

    state = { activeItem: this.props.page }
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing secondary style={{ backgroundColor: '#6E6E6E' }}>
            <Menu.Item
              style={{ color: 'white' }}
              name='home'
              active={activeItem === 'home'}
              onClick ={ () => {
                this.props.history.push("/");
              }}
            />
            <Menu.Item
              style={{ color: 'white' }}
              name='projects'
              active={activeItem === 'projects'}
              onClick ={ () => {
                this.props.history.push("/Projects");
              }}
            />
            <Menu.Item
              style={{ color: 'white' }}
              name='AV research'
              active={activeItem === 'AV research'}
              onClick ={ () => {
                this.props.history.push("/AVresearch");
              }}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                style={{ color: 'white' }}
                name='contact'
                active={activeItem === 'contact'}
                onClick ={ () => {
                    this.props.history.push("/Contact");
                }}
              />
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }

export default withRouter(Nav);