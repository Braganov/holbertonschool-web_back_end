/**
 * Classe représentant un aéroport
 */
export default class Airport {
  /**
   * Crée une instance d'Airport
   * @param {String} name - Nom de l'aéroport
   * @param {String} code - Code IATA de l'aéroport
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Redéfinit le comportement de toString() pour retourner le code de l'aéroport
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
