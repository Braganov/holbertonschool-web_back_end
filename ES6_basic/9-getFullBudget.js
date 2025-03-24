import getBudgetObject from './7-getBudgetObject.js';

/**
 * Tâche 9: Propriétés de méthode ES6
 * Fonction qui crée un objet budget complet avec des méthodes
 * @param {number} income - Valeur du revenu
 * @param {number} gdp - Valeur du PIB
 * @param {number} capita - Valeur par habitant
 * @return {Object} Objet budget complet avec des méthodes utilisant la syntaxe ES6
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  // Utilisation de la syntaxe des méthodes ES6 (sans le mot-clé 'function')
  // et de l'opérateur spread pour combiner les objets
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
