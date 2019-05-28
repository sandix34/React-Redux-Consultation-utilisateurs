// action creator qui retourne une action
export function selectUser(user){
    console.log('----------------')
    console.log('selected',user.name);
    console.log('----------------');
    return {
        type : 'USER_SELECTED', // nom de l'action
        payload : user // retourne le chargement de 'user'
    }
}