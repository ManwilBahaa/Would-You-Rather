import React,{ Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Question extends Component{

  render(){
    return(
      <div className="card mb-3"  key={this.props.question.timestamp} width="400px">
        <div className="card-header">
          {this.props.author.name} asks:
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={this.props.author.avatarURL} className="img-fluid rounded-start" 
                 alt="..." 
                 height='100px' 
                 width='100%'></img>
          </div>
          <div className="col-md-8 text-center">
            <div className="card-body">
              <h5 className="card-title">Would you rather</h5>
              <p className="card-text">{this.props.question.text} -OR...</p>
              
              <Link to={'../question/'+this.props.id} color='white'>
                    <button type="button" id={this.props.id} className="btn btn-primary">
                              View Pool 
                    </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps ({ users ,questions ,authedUser},{id}) {
  let question=questions[id]
  let author=users[question.author]
  let { name, avatarURL } = author

  return {
    question:{
      text :question.optionOne.text,
      timestamp:question.timestamp
    },
    author:{
      name,
      avatarURL
    },
    authedUser
  }
}
export default connect(mapStateToProps)(Question)