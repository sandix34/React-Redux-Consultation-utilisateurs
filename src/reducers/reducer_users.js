/*
Un Reducer est une fonction qui retourne un objet qui est une partie du state de l'application 
*/

export default function(){
    return [
        {name: 'Sarah Croche',id:1,role:'ROOT',active:'NON'},
        {name: 'Eléonore Labanquise',id:2,role:'USER',active:'OUI'},
        {name: 'Emma Karena',id:3,role:'USER',active:'NON'},
        {name: 'Jean Bonnot',id:4,role:'ADMIN',active:'OUI'},
    ]
}