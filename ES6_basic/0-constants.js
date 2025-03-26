/**
 * Tâche 0: Constantes
 * Démontre l'utilisation de const et let dans ES6
 */

/**
 * Retourne une chaîne utilisant une constante
 * @return {string} Message de préférence pour const
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Fonction auxiliaire qui retourne un suffixe de phrase
 * @return {string} Complément de phrase
 */
export function getLast() {
  return ' is okay';
}

/**
 * Utilise let pour une variable qui doit être modifiée
 * @return {string} Message indiquant quand utiliser let
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
