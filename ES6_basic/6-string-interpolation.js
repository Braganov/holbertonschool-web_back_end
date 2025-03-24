/**
 * Tâche 6: Profiter des littéraux de modèle
 * Fonction qui utilise des littéraux de modèle pour créer une description de San Francisco
 * @return {String} Description formatée de San Francisco avec des valeurs interpolées
 */
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  // Utilisation de littéraux de modèle (template literals) pour l'interpolation de chaînes
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
