'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ef019db8.js');
const isEmpty = require('./is-empty-3de4afc0.js');
const button_types = require('./button.types-debd0963.js');

var Mode;
(function (Mode) {
  Mode["Bridgestone"] = "bridgestone";
  Mode["Firststop"] = "firststop";
})(Mode || (Mode = {}));

const bridgestoneButtonCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host(.is-full-width){display:inline-block;width:100%}:host .button{--button-bg-color:#d03825;--button-border-color:#d03825;--button-text-color:#fff;font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal;position:relative;box-sizing:border-box;display:inline-flex;gap:0.8333333333rem;align-items:center;justify-content:space-between;min-width:24rem;height:4.1666666667rem;padding:1rem 1.6666666667rem 1rem 2rem;color:var(--button-text-color);text-decoration:none;text-transform:uppercase;cursor:pointer;background-color:var(--button-bg-color);border:1px solid var(--button-border-color);border-radius:83.3333333333rem;transition:0.2s ease-out}@media screen and (min-width: 768px){:host .button{font-size:1.3333333333rem}}:host .button:hover{--button-bg-color:#872518;--button-border-color:#872518}:host .button:active{--button-bg-color:#58160d;--button-border-color:#58160d}:host .button:disabled{--button-bg-color:#cbcbcb;--button-border-color:#cbcbcb;--button-text-color:#fff}:host .button:focus{outline:2px solid #58160d;outline-offset:3px}:host .button.is-ghost{--button-bg-color:inherit;--button-text-color:#000;--button-border-color:#d03825}:host .button.is-ghost .icon--right:before{position:absolute;top:0;right:4.1666666667rem;width:1px;height:4rem;background-color:var(--button-bg-color);transition:0.2s ease-out;transform:skewX(-15deg)}:host .button.is-ghost:hover{--button-bg-color:#d03825;--button-border-color:#d03825;--button-text-color:#fff}:host .button.is-ghost:active{--button-bg-color:#872518;--button-border-color:#872518;--button-text-color:#fff}:host .button.is-ghost:disabled{--button-border-color:#cbcbcb}:host .button.is-secondary-variant{justify-content:center;border-radius:0.3333333333rem}:host .button.is-text-variant{--button-text-color:inherit;--button-border-color:transparent;--button-bg-color:transparent;font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal;min-width:unset;height:unset;min-height:unset;padding:0;text-transform:unset;border:0}:host .button.is-text-variant:disabled{color:#cbcbcb}:host .button.is-text-variant:hover,:host .button.is-text-variant:focus,:host .button.is-text-variant:active{--button-text-color:#58160d;text-decoration:underline;outline:0}:host .button.has-left-icon{flex-direction:row-reverse}:host .button.is-full-width{width:100%;min-width:unset}:host .button.is-full-width .text{flex:none}:host .button bs-icon{font-size:2rem;line-height:font-height(loose);color:currentColor;transition:0.2s ease-out}:host .button.is-primary-variant.is-ghost .icon{color:var(--button-border-color)}:host .button.is-primary-variant.is-ghost:hover .icon,:host .button.is-primary-variant.is-ghost:active .icon{color:var(--button-text-color)}:host-context(.is-sending) .button:active{pointer-events:none}:host-context(.is-sending) .button:hover{cursor:not-allowed}";

const buttonFirststopCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host .button{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal;position:relative;box-sizing:border-box;display:inline-flex;gap:0.5833333333rem;align-items:center;justify-content:space-between;height:3.3333333333rem;padding:1rem 1.9166666667rem;color:#fff;text-decoration:none;cursor:pointer;background-color:#ed1c2e;border:0}@media screen and (min-width: 768px){:host .button{font-size:1.3333333333rem}}:host .button:focus{outline:2px solid #58160d;outline-offset:3px}:host .text{line-height:0}:host bs-icon{font-size:1.6666666667rem;line-height:font-height(loose);color:currentColor}";

index.setMode((el) => el.getAttribute('mode') || Mode.Bridgestone);
const BsButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bsButtonClick = index.createEvent(this, "bsButtonClick", 7);
    this.mode = Mode.Bridgestone;
    this.text = undefined;
    this.href = undefined;
    this.target = undefined;
    this.value = undefined;
    this.type = button_types.ButtonType.Button;
    this.action = undefined;
    this.tagClass = undefined;
    this.variant = undefined;
    this.ghost = false;
    this.iconLeft = undefined;
    this.iconRight = undefined;
    this.isFullWidth = undefined;
    this.isDisabled = undefined;
  }
  handleClick() {
    const { type, href, target, action, value } = this;
    if (href && target === '_blank')
      return;
    this.bsButtonClick.emit({ type, href, target, action, value });
  }
  render() {
    const TagType = isEmpty.isEmpty(this.href) ? 'button' : 'a';
    const attributes = TagType === 'button'
      ? { type: this.type }
      : {
        href: this.href,
        target: this.target === 'internal' ? '_self' : this.target,
        rel: this.target === '_blank' ? 'noreferrer' : '',
      };
    return (index.h(index.Host, { class: `${this.isFullWidth ? 'is-full-width' : ''}` }, index.h(TagType, Object.assign({ class: `button
            ${this.tagClass}
            is-${this.variant}-variant
            ${this.ghost ? 'is-ghost' : ''}
            ${this.isFullWidth ? 'is-full-width' : ''}
            ${this.isDisabled ? 'is-disabled' : ''}` }, attributes, { onClick: this.handleClick.bind(this), "aria-label": this.text }), this.iconLeft && (index.h("span", { class: "icon" }, index.h("bs-icon", { name: this.iconLeft }))), !isEmpty.isEmpty(this.text) && index.h("span", { class: "text" }, this.text), this.iconRight && (index.h("span", { class: "icon icon--right" }, index.h("bs-icon", { name: this.iconRight }))))));
  }
};
BsButton.style = {
  bridgestone: bridgestoneButtonCss,
  firststop: buttonFirststopCss
};

exports.bs_button = BsButton;

//# sourceMappingURL=bs-button.cjs.entry.js.map