/**
 * Tâche 1: Portée de bloc
 * Fonction qui démontre la portée des variables avec les déclarations let
 * @param {boolean} trueOrFalse - Condition pour déterminer si le bloc doit s'exécuter
 * @return {Array} Tableau contenant les valeurs de task et task2
 */
export default function taskBlock(trueOrFalse) {
  // Initialiser les variables dans la portée de la fonction
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // rien
  }

  // Retourner les variables de la portée externe, qui restent inchangées
  return [task, task2];
}
