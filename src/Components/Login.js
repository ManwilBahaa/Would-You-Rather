import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { authedUserChange } from "../actions/authedUser"

class  Login extends Component{
  state={
    authedUser:null
  }
  changeAuthedUser = ()=>{

    console.log('dispatching...')
    let {dispatch}=this.props

    dispatch(authedUserChange(this.state.authedUser))
    console.log('dispatched', this.state.authedUser)
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    if(e.value===''){
      this.setState({authedUser:null})
    }else{this.setState({authedUser:e.target.value})}
  }

  componentDidMount(){
    this.props.dispatch(authedUserChange(''))
  }

  render(){
    let Users = []
    Object.keys(this.props.users).map((x)=>{
      return Users.push(this.props.users[x])
    })

    return(
      <div className='container'>
        <br></br><br></br> <br></br>
        <div className="card text-center">
          <h5 className="card-header">Log In</h5>
          <div className="card-body">
          <h5 className="card-title">Chose User</h5>
          <select className="form-select text-center" 
                aria-label="Default select example" 
                onChange={(e)=>this.handleSubmit(e)}
                value={this.state.authedUser===null ? '' : this.state.authedUser}>

                <option value={null}>Select User</option>
                {
                  Users.map((user)=>(
                    <option key={user.id} value={user.id}>
                          {user.name}
                          </option>
                  ))}
          </select>

          <br></br>
          <Link to='/Home'>
            <button type="button" className="btn btn-submit" 
                    onClick={this.changeAuthedUser} disabled={this.state.authedUser===null}>
             Log In 
              </button>
          </Link>
          </div>
      </div>
</div>
    )
  }
}

function mapStateToProps ({ users ,authedUser}) {
  return {
    users,
    authedUser
  }
}


export default connect(mapStateToProps)(Login)


































































// import { Component } from "react"
// import React from 'react'
// import { Link } from "react-router-dom"
// import { connect } from 'react-redux'
// import { authedUserChange } from "../actions/authedUser"

// class  Login extends Component{
//   state={
//     authedUser:this.props.us
//   }
//   componentDidMount=()=>{
//     console.clear()
//     console.log(this.state)
//   }

//   changeAuthedUser = ()=>{
//     console.log('dispatching...')
//     let {dispatch}=this.props
//     dispatch(authedUserChange(this.state.authedUser))
//     console.log('dispatched', this.state.authedUser)
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(e.value)
//   }

//   render(){
//     let Users = []
//     Object.keys(this.props.users).map((x)=>{
//       return Users.push(this.props.users[x])
//     })

//     return(
//       <div className='container'>
//         <br></br>
//         <br></br>
//         <br></br>
//         <div className="card text-center">
//           <h5 className="card-header">Log In</h5>
//           <div className="card-body">
//           <h5 className="card-title">Chose User</h5>
//           <select className="form-select text-center" 
//                 aria-label="Default select example" 
//                 onChange={(e)=>{this.setState({authedUser:e.target.value})}}
//                 value={this.state.authedUser}>
//             {
//             Users.map((user)=>(
//               <option key={user.id} value={user.id} onSelect={(e)=>this.handleSubmit(e)}>
//                     {user.name}
//                     </option>
//             ))}
//           </select>
//           <br></br>
//           <Link to='/Home'>
//             <button type="button" className="btn btn-primary" onClick={this.changeAuthedUser}>Log In</button>
//           </Link>
//           </div>
//       </div>


        
// </div>
//     )
//   }
// }

// function mapStateToProps ({ users ,authedUser}) {
//   return {
//     users,
//     us : authedUser === null ? 'johndoe' : authedUser
//   }
// }


// export default connect(mapStateToProps)(Login)