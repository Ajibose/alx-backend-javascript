/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('Area must be a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
