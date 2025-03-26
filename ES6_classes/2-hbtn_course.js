/**
 * Classe représentant un cours Holberton
 */
export default class HolbertonCourse {
  /**
   * Crée une instance de HolbertonCourse
   * @param {String} name - Nom du cours
   * @param {Number} length - Durée du cours
   * @param {Array} students - Liste des étudiants (tableau de chaînes)
   */
  constructor(name, length, students) {
    // Validation des types avant affectation
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Getter pour le nom du cours
   */
  get name() {
    return this._name;
  }

  /**
   * Setter pour le nom du cours
   * @param {String} name - Nom du cours
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Getter pour la durée du cours
   */
  get length() {
    return this._length;
  }

  /**
   * Setter pour la durée du cours
   * @param {Number} length - Durée du cours
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * Getter pour la liste des étudiants
   */
  get students() {
    return this._students;
  }

  /**
   * Setter pour la liste des étudiants
   * @param {Array} students - Liste des étudiants
   */
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }

    if (!students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = students;
  }
}
