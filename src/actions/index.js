// action creator qui retourne une action
export const USER_SELECTED = 'USER_SELECTED';
export function selectUser(user){
    return {
        type : USER_SELECTED, // nom de l'action
        payload : user // retourne le chargement de 'user'
    }
}