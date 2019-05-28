// Fichier de configuration des Reducers où on associe le retour d'un Reducer 
// à une variable qui sera une variable du state de l'application

import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import ActiveUserReducer from './reducer_active_user'

const rootReducer = combineReducers({

  // on mappe le retour du Reducer 'UsersReducer' dans la variable 'users'
  users: UsersReducer,
  // on mappe le retour du Reducer 'ActiveUserReducer' dans la variable 'activeUser'
  activeUser : ActiveUserReducer 

});

export default rootReducer;