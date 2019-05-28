import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    const { user } = this.props
    if (!user) {
      return <div>Sélectionnez un utilisateur pour démarrer</div>;
    }
    return (
      <div>
        <h3>Détail de { user.name }</h3>
        <ul>
          <li>Id : { user.id }</li>
          <li>Role : { user.role }</li>
          <li>Actif : { user.active }</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.activeUser
  };
}
export default connect(mapStateToProps)(UserDetail);
