/**
 * Tâche 10: Boucles For...of
 * Fonction qui ajoute une chaîne à chaque valeur d'un tableau
 * @param {Array} array - Tableau d'entrée
 * @param {String} appendString - Chaîne à ajouter à chaque élément
 * @return {Array} Nouveau tableau avec les éléments modifiés
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  // Utilisation de la boucle for...of d'ES6 pour itérer sur les valeurs
  // contrairement à for...in qui itère sur les indices
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
