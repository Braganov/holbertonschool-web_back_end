import getBudgetObject from './7-getBudgetObject.js';

/**
 * Tâche 9: Méthodes de propriété ES6
 * Démontre la syntaxe simplifiée pour définir des méthodes dans un objet
 * @param {number} income - Revenu
 * @param {number} gdp - Produit intérieur brut
 * @param {number} capita - Revenu par habitant
 * @return {Object} Budget complet avec méthodes pour formater les montants
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  // Utilisation de la syntaxe ES6 pour définir des méthodes dans un objet
  // et de l'opérateur spread pour combiner des objets
  const fullBudget = {
    ...budget,
    // Syntaxe ES6: getIncomeInDollars(income) au lieu de getIncomeInDollars: function(income)
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
