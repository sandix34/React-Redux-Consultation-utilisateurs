// les composants qui ont besoin de connaître les changements des morceaux de state sont des containers
import React, { Component } from 'react';
// import de la fonction "connect" pour connecter react à redux
import { connect } from 'react-redux';

class UserList extends Component {
  
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.props.myUsers.map((user) => {
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
 
// fonction appelée à chaque fois que le state change
/*
le reducer va retourner le state, on récupère la partie qui nous intéresse du state => state.users
et on va la mettre dans "myUsers"
*/
function mapStateToProps(state){
    return {
      myUsers:  state.users
    }
}
// connection du composant container à Redux
export default connect(mapStateToProps)(UserList);