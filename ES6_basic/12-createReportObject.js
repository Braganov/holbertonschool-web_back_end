/**
 * Tâche 12: Création d'un objet rapport
 * Crée un objet de rapport à partir d'une liste d'employés
 * @param {Object} employeesList - Objet contenant des départements et leurs employés
 * @return {Object} Objet rapport avec la liste d'employés et une méthode pour compter les départements
 */
export default function createReportObject(employeesList) {
  // Retourne un nouvel objet avec la propriété allEmployees contenant tous les employés
  // et une méthode pour compter le nombre de départements
  return {
    // Utilisation de l'opérateur spread pour copier les propriétés dans un nouvel objet
    allEmployees: {
      ...employeesList,
    },
    // Méthode utilisant la syntaxe concise ES6
    getNumberOfDepartments(employeesList) {
      // Compte le nombre de clés (départements) dans l'objet
      return Object.keys(employeesList).length;
    },
  };
}
