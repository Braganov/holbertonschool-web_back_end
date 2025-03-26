/**
 * Classe représentant une promotion à Holberton
 */
export class HolbertonClass {
  /**
   * Crée une instance de HolbertonClass
   * @param {Number} year - Année de la promotion
   * @param {String} location - Localisation de la promotion
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Getter pour l'année
   */
  get year() {
    return this._year;
  }

  /**
   * Getter pour la localisation
   */
  get location() {
    return this._location;
  }
}

/**
 * Classe représentant un étudiant Holberton
 */
export class StudentHolberton {
  /**
   * Crée une instance de StudentHolberton
   * @param {String} firstName - Prénom de l'étudiant
   * @param {String} lastName - Nom de famille de l'étudiant
   * @param {HolbertonClass} holbertonClass - Promotion de l'étudiant
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Getter pour le nom complet
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Getter pour la promotion
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Getter pour la description complète de l'étudiant
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Création des instances de HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Création des instances de StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export de la liste d'étudiants
export const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
