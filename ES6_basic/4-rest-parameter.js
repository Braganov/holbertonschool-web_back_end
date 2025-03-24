/**
 * Tâche 4: Syntaxe du paramètre rest
 * Fonction qui retourne le nombre d'arguments qui lui sont passés
 * @param {...any} args - Un nombre quelconque d'arguments de n'importe quel type
 * @return {number} Nombre d'arguments reçus
 */
export default function returnHowManyArguments(...args) {
  // La syntaxe du paramètre rest (...args) collecte tous les arguments dans un tableau
  // Retourner la longueur de ce tableau pour obtenir le nombre d'arguments
  return args.length;
}
