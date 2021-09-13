import { A } from '@ember/array';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import Service from '@ember/service';

import Modal from '../modal';

export default Service.extend({
  count: computed('_stack.@each.isClosing', function () {
    return this._stack.filter(modal => !modal.isClosing).length;
  }),
  top: alias('_stack.lastObject'),

  allowOutsideClick: undefined,
  clickOutsideDeactivates: true,

  init() {
    this._super(...arguments);
    this._stack = A([]);
  },

  willDestroy() {
    this._onLastModalRemoved();
  },

  open(name, data, options) {
    let modal = new Modal(this, name, data, options);

    this._stack.pushObject(modal);

    if (this._stack.length === 1) {
      this._onFirstModalAdded();
    }

    return modal;
  },

  _onFirstModalAdded() {
    document.body.classList.add('epm-scrolling-disabled');
  },

  _onLastModalRemoved() {
    document.body.classList.remove('epm-scrolling-disabled');
  },

  _onModalAnimationStart() {
    document.body.classList.add('epm-animating');
  },

  _onModalAnimationEnd() {
    document.body.classList.remove('epm-animating');
  },
});
