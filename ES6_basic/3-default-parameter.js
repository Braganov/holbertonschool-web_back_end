/**
 * Tâche 3: Valeurs des paramètres par défaut
 * Démontre la syntaxe des paramètres par défaut ES6 dans la déclaration de fonction
 * @param {number} initialNumber - Valeur initiale sans défaut
 * @param {number} expansion1989 - Paramètre avec valeur par défaut 89
 * @param {number} expansion2019 - Paramètre avec valeur par défaut 19
 * @return {number} Somme de tous les paramètres
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019; // Retourner la somme de tous les paramètres (en utilisant les valeurs par défaut si non fournies)
}
