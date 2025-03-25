import getBudgetObject from './7-getBudgetObject.js';
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
