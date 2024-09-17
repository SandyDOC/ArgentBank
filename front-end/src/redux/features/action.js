//  définition et exportation des actions Redux
// Selectors = moyen de faire appel à ce store pour RECUPERER un state par une fonction Hook de Redux  

// Exemple :Dans votre component, vous pouvez utiliser un Hook pour appeler ce sélecteur et récupérer vos articles
import { useSelector } from 'react-redux'
const items = useSelector(selectItems)
