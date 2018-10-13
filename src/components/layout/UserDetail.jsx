import React from 'react';
import axios from "axios";

class UserDetail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id || null,
            name: "",
            lastname: "",
            email: ""
        }

        this.goBack = this.goBack.bind(this);
    }
    
    componentDidMount(){
        const {id} = this.state;
        var _this = this;
        if(id){
            axios.get(`/api/users/user/${id}`)
            .then(function(res){
                _this.setState({
                    name: res.data.name,
                    lastname: res.data.lastname,
                    email: res.data.email
                }); 
            })
            .catch(err=>console.log(err));
        }
    }

    goBack(){
        this.props.history.goBack();
    }    
    
    render() {
        const {name, lastname, email} = this.state;
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
                            <ul>
                                <li>{name}</li>
                                <li>{lastname}</li>
                                <li>{email}</li>
                            </ul>
                            </div>
                        </div>
                        <hr/>
                        <br/>
                        <button class="btn btn-primary" onClick={this.goBack}>Go Back</button>
                    </div>
                </div>
            </div>
               )
    }
}

export default UserDetail;