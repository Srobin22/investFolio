import React,{Component} from 'react';
import './App.css';
import AppLayout from './AppLayout'
import styled,{css}from 'styled-components';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Setting from '../Settings';
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
        <AppProvider>
          <AppBar/>
          <Setting/>
        </AppProvider>
      </AppLayout>
      
    );
  }
}

export default App;
