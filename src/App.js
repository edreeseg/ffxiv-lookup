import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom'
import axios from 'axios';
import * as privateVar from './private';

import Home from './components/Home';

const Container = styled.div`
  height: 100%;
  position: relative;
`;

class App extends React.Component {
  state = {
    id: '',
  };
  componentDidMount(){
    axios(`${privateVar.API}/character/search?name=merwin+vyraxian&server=excalibur`)
      .then(res => this.setState({ id: res.data.Results[0].ID }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <Route exact 
        path='/' 
        render={props => {
          return (
            <Home 
              {...props}
              id={this.state.id}
            />
          )
        }}
        
        />
        <Route />
        <Route />
      </Container>
    );
  }
}

export default App;