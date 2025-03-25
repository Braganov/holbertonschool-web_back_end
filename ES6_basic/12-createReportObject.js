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
