// reducers Redux (définition et exportation)
// Reducer = fonction qui permet la MODIFICATION du state (ajouter ou supprimer des éléments) par la mise à jour du state

// Exemple :nom de fonction 'reducer' addItemToBasket. Cette fonction renverra le nouveau state qui inclut le nouvel élément.
// Dans votre composant, vous pouvez appeler la fonction 'reducer' en utilisant le hook dispatch

import { useDispatch } from 'react-redux'
import { addItemToBasket } from './basketSlice'
const dispatch = useDispatch()

return ( 
  <button onClick={() => dispatch(addItemToBasket(item))}>Add</button>
)
