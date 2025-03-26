/**
 * Classe abstraite représentant un bâtiment
 */
export default class Building {
  /**
   * Crée une instance de Building
   * @param {Number} sqft - Surface en pieds carrés
   */
  constructor(sqft) {
    if (this.constructor !== Building) {
      // Vérification que la classe qui hérite implémente la méthode evacuationWarningMessage
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    this._sqft = sqft;
  }

  /**
   * Getter pour la surface
   */
  get sqft() {
    return this._sqft;
  }
}
