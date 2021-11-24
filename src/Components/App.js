import HomePage from './HomePage';
import Login from './Login';
import { connect } from 'react-redux'
import React , { Component } from 'react'
import {Routes,Route} from "react-router-dom";
import { handleInitialData } from '../actions/shared'
import CreateQuestion from './CreateQuestion';
import LeadersBoard from './LeadersBoard'
import PoolView from './PoolView'
class App extends Component {
  
  componentDidMount (){
    this.props.dispatch(handleInitialData())
   }

   render(){
    return (
      <div className="App">
        {this.props.loading === true
          ? null
          : <Routes>
          <Route exact path='/' element={
              <Login />
            } />
          <Route exact path='/home' element={
              <HomePage />
            } />
          <Route exact path='/Add' element={
            <CreateQuestion />
          } />
          <Route exact path='/LeadersBoard' element={
            <LeadersBoard />
          } />
          <Route exact path='/question/:id' element={
              <PoolView/>
            } />
       </Routes>}
        
      </div>
    );
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) 