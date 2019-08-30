export default class Modal {
  constructor(service, name, data) {
    this._service = service;
    this._name = name;
    this._data = data;
  }

  close() {
    this._service._stack.removeObject(this);
  }
}
