export default function getBudgetObject(income, gdp, capita) {
  // Utilisation de la syntaxe abrégée des propriétés d'objet (le nom de la variable devient le nom de la propriété)
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
