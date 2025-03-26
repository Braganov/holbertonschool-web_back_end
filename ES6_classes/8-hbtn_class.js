/**
 * Classe représentant une classe Holberton
 * Avec conversion en primitive (nombre ou chaîne)
 */
export default class HolbertonClass {
  /**
   * Crée une instance de HolbertonClass
   * @param {Number} size - Taille de la classe
   * @param {String} location - Localisation de la classe
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Méthode spéciale permettant la conversion de l'objet en primitive
   * @param {String} hint - Type de conversion demandé ('number', 'string', 'default')
   * @returns {Number|String} La valeur correspondante selon le type demandé
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
