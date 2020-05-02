import React from "react"
import { Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import './App.css'

class App extends React.Component {    
  constructor(props){
    super(props);
    this.state={
      title: 'Me',
      headerLinks:[
        {title:'Home', path:'/'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'},
      ],
      home:{
        title:'Title',
        subTitle:'Subtitle',
        Text: 'checkout my prohjj'
      },
      
      about:{
        title:'about'
        },
      contact:{
        title:'contacc'
        }
    }
  }

  render(){
  return(
<Route>

</Route>

    )
}
}

export default App;
