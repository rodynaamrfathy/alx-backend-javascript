export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // Override valueOf to return size when the object is cast to a number
  valueOf() {
    return this.size;
  }

  // Override toString to return location when the object is cast to a string
  toString() {
    return this.location;
  }
}
