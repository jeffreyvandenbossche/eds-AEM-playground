import { r as registerInstance, h, H as Host } from './index-17dff65c.js';

const BasePing = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pong = 'Pong';
  }
  render() {
    return h(Host, null, this.pong);
  }
};

export { BasePing as base_ping };

//# sourceMappingURL=base-ping.entry.js.map