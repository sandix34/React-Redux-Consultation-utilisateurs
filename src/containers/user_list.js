// les composants qui ont besoin de connaître les changements des morceaux de state sont des containers
import React, { Component } from "react";

// import de la fonction "connect" pour connecter react à redux
import { connect } from "react-redux";

// appel de l'action creator
import { selectUser } from "../actions/index";
import { bindActionCreators } from "redux";

class UserList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.myUsers.map(user => {
            return (
              <li key={user.id} onClick={() => this.props.selectUser(user)}>
                {user.name}
              </li>
            );
          })}
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
const mapStateToProps = (state) => {
  return {
    myUsers: state.users
  };
}

// envoie et dispatche l'action aux reducers
const  mapDispatchToProps = (dispatch) => {
 return {
   dispatch,
   ...bindActionCreators({selectUser}, dispatch)

 }
}


// connection du composant container à Redux
export default connect(
  mapStateToProps,
   mapDispatchToProps 
)(UserList);
