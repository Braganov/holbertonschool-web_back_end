/**
 * Tâche 1: Portée de bloc
 * Fonction qui démontre la portée des variables avec les déclarations let
 * @param {boolean} trueOrFalse - Condition pour déterminer si le bloc doit s'exécuter
 * @return {Array} Tableau contenant les valeurs de task et task2
 */
export default function taskBlock(trueOrFalse) {
  // Initialiser les variables dans la portée de la fonction
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // Ces nouvelles variables sont limitées à ce bloc uniquement
    // Elles n'affectent pas les variables externes du même nom
    const task = true;
    const task2 = false;
  }

  // Retourner les variables de la portée externe, qui restent inchangées
  return [task, task2];
}
