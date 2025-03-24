/**
 * Fonction auxiliaire pour obtenir l'année actuelle
 * @return {number} L'année actuelle
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Tâche 8: Noms de propriété calculés
 * Fonction qui utilise des noms de propriété calculés ES6 pour créer un objet budget
 * @param {number} income - Valeur du revenu
 * @param {number} gdp - Valeur du PIB
 * @param {number} capita - Valeur par habitant
 * @return {Object} Objet budget avec des noms de propriété dynamiques incluant l'année actuelle
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Utilisation de noms de propriété calculés avec la syntaxe [`nom-${expression}`]
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
