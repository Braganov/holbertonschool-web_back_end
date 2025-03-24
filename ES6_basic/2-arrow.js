/**
 * Tâche 2: Fonctions fléchées
 * Classe qui utilise la syntaxe des fonctions fléchées ES6 pour les méthodes
 * Cela démontre comment les fonctions fléchées maintiennent le contexte 'this'
 */
export default function getNeighborhoodsList() {
  // Initialiser le tableau des quartiers
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Utilisation d'une fonction fléchée pour maintenir le contexte 'this'
  // Pas besoin de "const self = this" avec les fonctions fléchées
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
