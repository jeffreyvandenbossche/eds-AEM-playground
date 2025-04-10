import { r as registerInstance, h, H as Host } from './index-17dff65c.js';
import { M as Memoize } from './memoize-43914bec.js';
import { p as parseIfString } from './parse-if-string-dba46397.js';
import { c as compareBreakpoint, B as Breakpoint } from './breakpoints-eb85df3d.js';
import { I as IconName } from './icon.types-2d98aa0e.js';
import { a as TextSize } from './text.types-fbe6ed81.js';

const carouselCardCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:flex;height:100%}:host .carousel-card{display:flex;flex:1;flex-flow:wrap;gap:0.5833333333rem;padding:0.8333333333rem;border:1px solid #cbcbcb;border-radius:6px}:host .card-item{position:relative;display:flex;flex:1 1 0;flex-direction:column;gap:0.6666666667rem;align-items:center;justify-content:center;width:103px;height:77px;overflow:hidden;border:1px transparent;border-radius:4px}@media screen and (min-width: 768px){:host .card-item{flex:1 0 0%;width:144px;height:108px}}:host .card-item:last-child{display:flex;flex:1 0 100%;height:4rem;border:0}:host .card-item:last-child .cover{display:flex;flex-direction:row;gap:0.6666666667rem;align-items:center;justify-content:center}:host .card-item:last-child .cta-icon{font-size:2rem}@media screen and (min-width: 768px){:host .card-item:last-child{flex:unset;height:9rem}:host .card-item:last-child .cover{flex-direction:column}}:host .button-square{--button-bg-color:#fff;--button-text-color:#000;--button-border-color:#d03825;display:flex;gap:0.6666666667rem;align-items:center;justify-content:center;width:100%;height:100%;color:var(--button-text-color);background-color:var(--button-bg-color);border:1px solid var(--button-border-color);border-radius:4px}:host .button-square:hover{--button-bg-color:#d03825;--button-border-color:#d03825;--button-text-color:#fff}:host .button-square:active{--button-bg-color:#872518;--button-border-color:#872518;--button-text-color:#fff}@media screen and (min-width: 768px){:host .button-square{flex-direction:column}}:host .button-square .icon{font-size:2rem}:host(.is-slim) .card-item{flex:1 1 0;min-width:103px;height:130px}:host(.is-slim) .card-item:last-child{flex:1 0 100%;align-self:flex-end;height:4rem}:host(.is-slim) .card-item:last-child .cover{flex-direction:row}:host(.is-slim) .button-square{flex-direction:row}";

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
const BsCarouselCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageCollection = undefined;
    this.autoplay = false;
    this.slow = false;
    this.carouselTitle = undefined;
    this.logo = undefined;
    this.cta = undefined;
    this.slim = false;
  }
  get parsedImageCollection() {
    const parsed = parseIfString(this.imageCollection);
    const length = compareBreakpoint('min', Breakpoint.md) && !this.slim ? 4 : 3;
    return parsed.slice(0, length);
  }
  render() {
    const carouselData = {
      logo: this.logo,
      carouselTitle: this.carouselTitle,
      autoplay: this.autoplay,
      slow: this.slow,
      imageCollection: this.imageCollection,
    };
    return (h(Host, { class: this.slim ? 'is-slim' : '' }, h("div", { class: "carousel-card" }, this.parsedImageCollection.map((image, index) => (h("bs-click-action", { name: "open-carousel-modal", value: Object.assign({ index }, carouselData), class: "card-item" }, h("bs-image", { class: "card-image", src: image.src, srcset: image.srcset, width: image.width, height: image.height, imageSizes: "200px, 400px", altText: image.altText, itemprop: image.itemprop, cover: true })))), h("bs-click-action", { name: "open-carousel-modal", class: "card-item", value: Object.assign({ index: 0 }, carouselData), tagClass: "button-square" }, h("span", { class: "icon" }, h("bs-icon", { name: IconName.Gallery })), h("bs-text", { text: this.cta, size: TextSize.Default })))));
  }
};
__decorate([
  Memoize('imageCollection')
], BsCarouselCard.prototype, "parsedImageCollection", null);
BsCarouselCard.style = carouselCardCss;

export { BsCarouselCard as bs_carousel_card };

//# sourceMappingURL=bs-carousel-card.entry.js.map