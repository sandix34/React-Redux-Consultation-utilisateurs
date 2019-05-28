// quand on rentre dans ce reducer si le type la concerne on renvoie les données sinon on laisse 
// le state tel qu'il est
export default function (state = null, action) {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
  }
  return state
}
