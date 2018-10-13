import React, { Component } from 'react'
import axios from "axios";
import UserList from "../UserList.jsx";

class UserListing extends Component {
  constructor() {
    super();
    this.state = {users: []}
  }

  componentDidMount(){
    var _this = this;
    axios.get('/api/users/list')
    .then(function(res){
      _this.setState({
        users: res.data
      }); 
    })
    .catch(err=>console.log(err));
  }

  render() {
    return (  
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            <h2>
              List of Users
            </h2>
            <hr/>
            <div className="container">
              <UserList userlist={this.state.users} />
            </div>
          </div>
        </div>
      </div>
    </div>
      
    )
  }
}

export default UserListing;