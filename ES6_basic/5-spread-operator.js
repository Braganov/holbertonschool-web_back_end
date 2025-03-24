/**
 * Tâche 5: Les merveilles de la syntaxe spread
 * Fonction qui concatène deux tableaux et chaque caractère d'une chaîne
 * @param {Array} array1 - Premier tableau à concaténer
 * @param {Array} array2 - Deuxième tableau à concaténer
 * @param {String} string - Chaîne dont les caractères seront extraits et concaténés
 * @return {Array} Nouveau tableau contenant tous les éléments concaténés
 */
export default function concatArrays(array1, array2, string) {
  // Utilise l'opérateur spread (...) pour décomposer les tableaux et la chaîne
  return [...array1, ...array2, ...string];
}
