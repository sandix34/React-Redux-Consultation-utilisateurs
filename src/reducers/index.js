// Fichier de configuration des Reducers où on associe le retrour d'un Reducer 
// à une variable qui sera une variable du state de l'application

import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({

  // on mappe le retour du Reducer 'UsersReducer' dans la variable 'users'
  users: UsersReducer
  
});

export default rootReducer;