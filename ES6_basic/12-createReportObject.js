/**
 * Tâche 12: Créons un objet rapport
 * Fonction qui crée un objet rapport à partir d'une liste d'employés
 * @param {Object} employeesList - Objet contenant les départements et leurs employés
 * @return {Object} Objet rapport avec la liste des employés et une méthode pour compter les départements
 */
export default function createReportObject(employeesList) {
  // Création d'un objet avec une propriété et une méthode
  return {
    // Utilisation de l'opérateur spread pour copier les propriétés de employeesList
    allEmployees: {
      ...employeesList,
    },
    // Méthode utilisant la syntaxe concise ES6 pour compter le nombre de départements
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
