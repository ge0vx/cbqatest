import React, { Component } from 'react'
import axios from 'axios';

class UserAdding extends Component {
  constructor(){
    super();
    
    this.state = {
      name:'',
      lastName:'',
      email:'',
      errors: {},
      userAdded:''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const _this = this;
    const newUser = {
      name: this.state.name,
      lastname: this.state.lastName,
      email: this.state.email
    }

    console.log(newUser);

    axios.post('/api/users/create', newUser)
      .then(res=>{
        _this.setState({
          userAdded: "User Added Successfully",
          name: "",
          lastName: "",
          email: ""
        });
      })
      .catch(err=>{
        console.log(`error: ${err}`);
      });

  }

  render() {
    const {name, lastName, email, userAdded} = this.state;
    return (  
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            
          <form onSubmit={this.onSubmit}>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Name</label>
                <input value={name} onChange={this.onChange} name="name"
                  type="text" 
                  className="form-control" 
                  placeholder="Name" 
                  id="name" 
                  required data-validation-required-message="Please enter your name."
                  />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Last name</label>
                <input value={lastName} onChange={this.onChange} name="lastName"
                  type="text" 
                  className="form-control" 
                  placeholder="Last name" id="lastName" 
                  required data-validation-required-message="Please enter your name."/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input value={email} onChange={this.onChange} name='email'
                  type="email" 
                  className="form-control" 
                  placeholder="Email Address" 
                  id="email" 
                  required data-validation-required-message="Please enter your email address."/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <br />
            <div id="success"></div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
              <div style={{paddingTop:"1em"}}>
                {userAdded}
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UserAdding;