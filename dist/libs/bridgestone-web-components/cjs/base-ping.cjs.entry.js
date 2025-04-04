'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ef019db8.js');

const BasePing = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.pong = 'Pong';
  }
  render() {
    return index.h(index.Host, null, this.pong);
  }
};

exports.base_ping = BasePing;

//# sourceMappingURL=base-ping.cjs.entry.js.map