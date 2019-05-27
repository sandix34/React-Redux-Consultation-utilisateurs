// les composants qui ont besoin de connaître les changements des morceaux de state sont des containers

import React, { Component } from 'react';

class UserList extends Component {
  
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.props.users.map((user) => {
                            return (
                                <li key={user.id}>
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
         );
    }
}
 
export default UserList;