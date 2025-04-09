'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ef019db8.js');
const memoize = require('./memoize-77bb7912.js');
const isEmpty = require('./is-empty-3de4afc0.js');
const parseIfString = require('./parse-if-string-1e2d7fee.js');
const title_types = require('./title.types-c8079842.js');
const breakpoints = require('./breakpoints-d2c74c04.js');
const throttle = require('./throttle-20539969.js');

var Variant;
(function (Variant) {
  Variant["Image"] = "image";
  Variant["Video"] = "video";
})(Variant || (Variant = {}));

const headerBannerCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;overflow:hidden}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .header-banner{display:flex;flex-direction:column;gap:2rem;background-color:#f5f6f6}@media screen and (min-width: 768px){:host .header-banner{flex-direction:row;gap:0;height:35.4166666667rem}}:host .content{position:relative;display:flex;flex:1;flex-direction:column;gap:1.3333333333rem;padding:3.3333333333rem 2rem 0}@media screen and (min-width: 768px){:host .content{gap:0;padding:3.3333333333rem;padding-right:0;margin-right:1px}:host .content:before{z-index:2;position:absolute;top:0;right:0;width:3px;height:100%;content:\"\";border-top:425px solid #f5f6f6;border-right:99px solid transparent;transform:translateX(100%)}:host .content:after{z-index:2;position:absolute;top:0;right:0;width:2px;height:100%;content:\"\";background-color:#f00;transform:skew(-13deg) translateX(1px);transform-origin:right bottom}}:host .image{position:relative;flex:2;width:100%;aspect-ratio:16/9}@media screen and (min-width: 768px){:host .image{--image--height:425px;width:756px;max-width:756px;aspect-ratio:auto}}:host .logo{--image--max-width:180px;--image--max-height:60px;margin-bottom:0.6666666667rem}:host .label{margin-bottom:0.6666666667rem}@media screen and (min-width: 768px){:host .label{margin-bottom:3.5rem}}:host .title+.button{margin-top:1.6666666667rem}:host .center{display:flex;flex:1;flex-direction:column;justify-content:center}@media screen and (min-width: 768px){:host-context(html[dir=rtl]) .content{align-items:flex-start;padding-right:3.3333333333rem;padding-left:0}:host-context(html[dir=rtl]) .content:before{right:unset;left:1px;border-top:0;border-right:0;border-bottom:425px solid #f5f6f6;border-left:99px solid transparent;transform:translateX(-100%)}:host-context(html[dir=rtl]) .content:after{right:unset;left:1px;transform:skew(-13deg) translateX(-1px);transform-origin:right top}}";

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
const BsHeaderBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Methods */
    this.onResize = () => {
      this.isMobile = breakpoints.compareBreakpoint('max', breakpoints.Breakpoint.md);
    };
    this.throttleMethod = throttle.throttle(this.onResize, 1000);
    this.isMobile = breakpoints.compareBreakpoint('max', breakpoints.Breakpoint.md);
    this.image = undefined;
    this.logo = undefined;
    this.label = undefined;
    this.headerTitle = undefined;
    this.subtitle = undefined;
    this.button = undefined;
    this.variant = undefined;
    this.video = undefined;
  }
  get parsedImage() {
    return parseIfString.parseIfString(this.image);
  }
  get parsedLogo() {
    return parseIfString.parseIfString(this.logo);
  }
  get parsedHeaderTitle() {
    return parseIfString.parseIfString(this.headerTitle);
  }
  get parsedButton() {
    return parseIfString.parseIfString(this.button);
  }
  get parsedvideo() {
    return parseIfString.parseIfString(this.video);
  }
  /** Listeners */
  handleScreenResized() {
    this.throttleMethod();
  }
  render() {
    return (index.h(index.Host, null, index.h("header", { class: "header-banner" }, index.h("div", { class: "content" }, !isEmpty.isEmpty(this.parsedLogo) ? (this.parsedLogo.src && index.h("bs-image", Object.assign({ class: "logo" }, this.parsedLogo))) : (index.h("bs-title", { size: title_types.TitleSize.Head2, tag: title_types.TitleTag.Span, class: "label", text: this.label })), index.h("div", { class: "center" }, index.h("bs-title", Object.assign({ class: "title" }, this.parsedHeaderTitle)), this.subtitle && index.h("bs-text", { class: "sub", text: this.subtitle }), this.parsedButton && this.parsedButton.text && (index.h("bs-button", Object.assign({ class: "button" }, this.parsedButton, { isFullWidth: !!this.isMobile }))))), index.h("div", { class: "image" }, this.variant === Variant.Image ? (index.h("bs-image", Object.assign({}, this.parsedImage, { caption: "" }))) : (index.h("bs-video-card", Object.assign({}, this.parsedvideo)))))));
  }
};
__decorate([
  memoize.Memoize('image')
], BsHeaderBanner.prototype, "parsedImage", null);
__decorate([
  memoize.Memoize('logo')
], BsHeaderBanner.prototype, "parsedLogo", null);
__decorate([
  memoize.Memoize('headerTitle')
], BsHeaderBanner.prototype, "parsedHeaderTitle", null);
__decorate([
  memoize.Memoize('button')
], BsHeaderBanner.prototype, "parsedButton", null);
__decorate([
  memoize.Memoize('video')
], BsHeaderBanner.prototype, "parsedvideo", null);
BsHeaderBanner.style = headerBannerCss;

exports.bs_header_banner = BsHeaderBanner;

//# sourceMappingURL=bs-header-banner.cjs.entry.js.map