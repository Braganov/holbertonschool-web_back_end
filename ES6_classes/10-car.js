/**
 * Classe représentant une voiture
 */
export default class Car {
  /**
   * Crée une instance de Car
   * @param {String} brand - Marque de la voiture
   * @param {String} motor - Type de moteur
   * @param {String} color - Couleur de la voiture
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Symbole pour stocker le constructeur original
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Crée un clone de la voiture (même classe mais instance différente)
   * @returns {Car} Une nouvelle instance de la même classe
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
