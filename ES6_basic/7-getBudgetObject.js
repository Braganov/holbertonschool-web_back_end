/**
 * Tâche 7: Syntaxe abrégée pour les propriétés d'objet
 * Démontre la syntaxe raccourcie pour créer des objets quand le nom de la propriété
 * est identique au nom de la variable
 * @param {number} income - Revenu
 * @param {number} gdp - Produit intérieur brut
 * @param {number} capita - Revenu par habitant
 * @return {Object} Objet budget avec les propriétés définies
 */
export default function getBudgetObject(income, gdp, capita) {
  // Utilisation de la syntaxe raccourcie ES6 (au lieu de income: income, gdp: gdp, etc.)
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
