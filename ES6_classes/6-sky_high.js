import Building from './5-building.js';

/**
 * Classe représentant un bâtiment de grande hauteur
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Crée une instance de SkyHighBuilding
   * @param {Number} sqft - Surface en pieds carrés
   * @param {Number} floors - Nombre d'étages
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter pour le nombre d'étages
   */
  get floors() {
    return this._floors;
  }

  /**
   * Méthode pour message d'évacuation d'urgence
   * @returns {String} Message d'évacuation
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
