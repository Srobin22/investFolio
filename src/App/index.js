import React,{Component} from 'react';
import './App.css';
import AppLayout from './AppLayout'
import Greeting from './greeting';
import styled,{css}from 'styled-components';
const MyButton=styled.div`
  color:green;
  ${props => props.primary && css`
  color: blue;
`}
`
const TomatoButton=styled(MyButton)`
  color:tomato;
  border-color: tomato;
`
class App extends Component{
  render(){
    return(
      <AppLayout>
        <Greeting/>

      </AppLayout>
      
    );
  }
}

export default App;
