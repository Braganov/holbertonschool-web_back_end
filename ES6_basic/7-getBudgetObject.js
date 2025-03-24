/**
 * Tâche 7: Syntaxe abrégée pour les valeurs de propriété d'objet
 * Fonction qui utilise la syntaxe abrégée ES6 pour créer un objet budget
 * @param {number} income - Valeur du revenu
 * @param {number} gdp - Valeur du PIB
 * @param {number} capita - Valeur par habitant
 * @return {Object} Objet budget avec les propriétés définies
 */
export default function getBudgetObject(income, gdp, capita) {
  // Utilisation de la syntaxe abrégée des propriétés d'objet (le nom de la variable devient le nom de la propriété)
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
