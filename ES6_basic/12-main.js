/**
 * Fichier de test pour la tâche 12
 * Crée un rapport à partir d'objets employés de différents départements
 */
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

// Crée un objet combinant plusieurs départements
const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

// Génère un rapport basé sur l'objet employés
const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
