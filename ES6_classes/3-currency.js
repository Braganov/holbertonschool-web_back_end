/**
 * Classe représentant une devise
 */
export default class Currency {
  /**
   * Crée une instance de Currency
   * @param {String} code - Code de la devise
   * @param {String} name - Nom de la devise
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Getter pour le code de la devise
   */
  get code() {
    return this._code;
  }

  /**
   * Setter pour le code de la devise
   * @param {String} code - Code de la devise
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Getter pour le nom de la devise
   */
  get name() {
    return this._name;
  }

  /**
   * Setter pour le nom de la devise
   * @param {String} name - Nom de la devise
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Retourne une représentation complète de la devise (nom et code)
   * @returns {String} Représentation de la devise au format "nom (code)"
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
