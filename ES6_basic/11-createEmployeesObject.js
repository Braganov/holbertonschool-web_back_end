/**
 * Tâche 11: Itérateur
 * Fonction qui crée un objet employés pour un département
 * @param {String} departmentName - Nom du département
 * @param {Array} employees - Tableau des noms d'employés
 * @return {Object} Objet avec le nom du département comme clé et le tableau d'employés comme valeur
 */
export default function createEmployeesObject(departmentName, employees) {
  // Utilisation des noms de propriété calculés pour créer dynamiquement la structure
  return {
    [departmentName]: employees,
  };
}
