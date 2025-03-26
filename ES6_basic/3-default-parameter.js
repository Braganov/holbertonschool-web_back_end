/**
 * Tâche 3: Paramètres par défaut
 * Démontre l'utilisation des valeurs par défaut pour les paramètres de fonction
 * @param {number} initialNumber - Premier paramètre sans valeur par défaut
 * @param {number} expansion1989 - Deuxième paramètre avec valeur par défaut 89
 * @param {number} expansion2019 - Troisième paramètre avec valeur par défaut 19
 * @return {number} La somme des trois paramètres
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  // Retourne la somme des trois valeurs (utilisant les valeurs par défaut si non fournies)
  return initialNumber + expansion1989 + expansion2019;
}
