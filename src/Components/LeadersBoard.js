import { connect } from 'react-redux'
import React , { Component ,Fragment} from 'react'
import Nav from './nav';
import Login from "./Login";

class LeadersBoard extends Component {
  render(){
    let  userList, list2 ,arr

if(this.props.noUser!==true){
   userList=Object.values(this.props.users)
     list2=[]
    userList.forEach(x=>{

    arr=[ x , Object.keys(x.answers).length + x.questions.length]
   
    list2.push(arr)
    })
    console.log(list2.sort(function(a, b) {
      return  b[1]-a[1] ;
    }))
}

  return ( 
    <Fragment>
      {
        this.props.noUser===true ? 
        <Login/>:
        <Fragment>
        <Nav/>
        <hr></hr>
        <div className="container">
          {
            list2.map((x)=>(
  
              <div className='container text-center'>
        <div className="card mb-3"  width="400px">
          
          <div className="row g-0">
            <div className="col-md-4">
              <img src={x[0].avatarURL} className="img-fluid rounded-start" 
                   alt="..." 
                   height='100px' 
                   width='100%'></img>
            </div>
            <div className="col-md-8 text-center">
              <div className="card-body">
                <br></br>
                <h1 className="card-title">{x[0].name}</h1>
                <br></br>
                <h1 fontSize='xx-large'>Score : {x[1]}</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
            ))
          }
        </div>
        </Fragment>
      }
     

    </Fragment>
    
    );
  }
}

function mapStateToProps ({ users ,authedUser}) {
   let noUser=false
  if(authedUser===''){
    let noUser=true
    return{
      noUser
    }
  }else{
    return {
      users,
      noUser
    }
  }
}

export default connect(mapStateToProps)(LeadersBoard)