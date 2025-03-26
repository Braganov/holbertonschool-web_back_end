import Currency from './3-currency.js';

/**
 * Classe représentant un prix
 */
export default class Pricing {
  /**
   * Crée une instance de Pricing
   * @param {Number} amount - Montant
   * @param {Currency} currency - Instance de la classe Currency
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Getter pour le montant
   */
  get amount() {
    return this._amount;
  }

  /**
   * Setter pour le montant
   * @param {Number} amount - Montant
   */
  set amount(amount) {
    this._amount = amount;
  }

  /**
   * Getter pour la devise
   */
  get currency() {
    return this._currency;
  }

  /**
   * Setter pour la devise
   * @param {Currency} currency - Instance de Currency
   */
  set currency(currency) {
    this._currency = currency;
  }

  /**
   * Affiche le prix complet avec la devise
   * @returns {String} Représentation du prix au format "montant nom (code)"
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Méthode statique pour convertir un prix selon un taux de conversion
   * @param {Number} amount - Montant à convertir
   * @param {Number} conversionRate - Taux de conversion
   * @returns {Number} Montant converti
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
