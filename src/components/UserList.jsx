import React from 'react';
import { Link } from 'react-router-dom';

class UserList extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>        
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.userlist.map(function(user){
                        return (
                            <tr key={user._id} >
                                <td>{user.name}</td>
                                <td>
                                    <Link to={`/edituser/${user._id}`}>
                                        Details
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
               )
    }
}

export default UserList