'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ef019db8.js');
const memoize = require('./memoize-77bb7912.js');
const parseIfString = require('./parse-if-string-1e2d7fee.js');
const icon_types = require('./icon.types-5e9e7ac2.js');
const throttle = require('./throttle-20539969.js');
const breakpoints = require('./breakpoints-d2c74c04.js');

const headerNavigationCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{--navigation--height:60px;--image--max-height:40px;--image--max-width:130px;--image--fit:\"contain\"}@media screen and (min-width: 768px){:host{--navigation--height:92px;--image--max-height:60px;--image--max-width:200px}}:host .header-navigation{z-index:3;position:relative;height:var(--navigation--height)}:host .bar{display:flex;align-items:center;width:100%;height:var(--navigation--height);background-color:#fff}:host .sticky-header{position:fixed;top:0;left:0;z-index:1;display:flex;align-items:center;width:100%;height:var(--navigation--height);background-color:#fff;border-bottom:1px solid #f5f6f6;transition:0.5s cubic-bezier(0.5, 0, 0, 1);transition-property:transform;transform:translateY(-110%)}:host .flex-between{display:flex;align-items:center;justify-content:space-between}:host .flex-end{display:flex;gap:3.3333333333rem;align-items:center;justify-content:flex-end}:host .is-visible{transform:translateY(0)}:host .logo{padding:0.8333333333rem;padding-left:0}:host .menu-button{display:flex;align-items:center;justify-content:center;padding:0.8333333333rem;padding-right:0;font:inherit;line-height:1;color:#000;text-transform:uppercase;pointer-events:visible;cursor:pointer;background:transparent;border:0;border-radius:0.4166666667rem}@media screen and (max-width: 767px){:host .menu-button{right:2.0833333333rem}}@media screen and (max-width: 767px){:host .menu-button .menu-button-text{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}}:host .menu-button>bs-icon{margin-left:0.5833333333rem;font-size:1.75rem}@media screen and (max-width: 767px){:host .menu-button>bs-icon{font-size:2.5rem}}:host-context(html[dir=rtl]) .menu-button{padding-right:0.8333333333rem;padding-left:0}:host-context(html[dir=rtl]) .logo{padding:0.8333333333rem;padding-right:0}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const BsHeaderNavigation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.stickyMenuIsVisible = undefined;
    this.headerNavigation = undefined;
  }
  get parsedHeaderNavigation() {
    return parseIfString.parseIfString(this.headerNavigation);
  }
  /**
   * Listeners
   */
  handleBodyScroll() {
    throttle.throttle(() => {
      this.stickyMenuIsVisible = window.scrollY > 20;
    }, 500)();
  }
  render() {
    return (index.h(index.Host, null, index.h("header", { class: "header-navigation" }, index.h("div", { class: "bar" }, index.h("bs-container", { class: "flex-between", contained: true }, index.h("div", { class: "main-logo" }, index.h("a", { href: "/", tabIndex: this.stickyMenuIsVisible ? -1 : 0 }, breakpoints.compareBreakpoint('max', breakpoints.Breakpoint.md) ? (index.h("bs-image", Object.assign({ class: "logo" }, this.parsedHeaderNavigation.mobileMainLogo))) : (index.h("bs-image", Object.assign({ class: "logo" }, this.parsedHeaderNavigation.mainLogo))))), index.h("bs-click-action", { "tag-class": `menu-button`, value: this.headerNavigation, name: "open-overlay-menu" }, index.h("bs-icon", { name: icon_types.IconName.Menu })))), index.h("div", { class: `sticky-header ${this.stickyMenuIsVisible ? 'is-visible' : ''}` }, index.h("bs-container", { class: "flex-between", contained: true }, index.h("div", { class: "logo" }, index.h("a", { href: "/", tabIndex: this.stickyMenuIsVisible ? 0 : -1 }, index.h("bs-image", Object.assign({ class: "logo" }, this.parsedHeaderNavigation.stickyLogo)))), index.h("div", { class: "flex-end" }, this.parsedHeaderNavigation.stickyButton &&
      this.parsedHeaderNavigation.stickyButton.text &&
      breakpoints.compareBreakpoint('min', breakpoints.Breakpoint.md) && (index.h("bs-button", Object.assign({}, this.parsedHeaderNavigation.stickyButton))), index.h("bs-click-action", { "tag-class": `menu-button`, value: this.headerNavigation, name: "open-overlay-menu" }, index.h("bs-icon", { name: icon_types.IconName.Menu }))))))));
  }
};
__decorate([
  memoize.Memoize('headerNavigation')
], BsHeaderNavigation.prototype, "parsedHeaderNavigation", null);
BsHeaderNavigation.style = headerNavigationCss;

exports.bs_header_navigation = BsHeaderNavigation;

//# sourceMappingURL=bs-header-navigation.cjs.entry.js.map