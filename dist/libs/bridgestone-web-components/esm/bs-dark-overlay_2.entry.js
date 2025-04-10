import { r as registerInstance, h, H as Host, c as createEvent } from './index-17dff65c.js';
import { M as Memoize } from './memoize-43914bec.js';
import { i as isEmpty } from './is-empty-0ea2058d.js';
import { p as parseIfString } from './parse-if-string-dba46397.js';
import { I as IconName } from './icon.types-2d98aa0e.js';
import { B as BaseModalId } from './base-modal.types-57eb75b1.js';
import { c as compareBreakpoint, B as Breakpoint } from './breakpoints-eb85df3d.js';
import { t as throttle } from './throttle-fee772e9.js';
import { P as PlayerState } from './youtube-video.types-4fa0da6e.js';

const darkThemeOverlayCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}.dark-overlay{width:100%;height:100%;color:#fff;background-color:#161616}.dark-overlay .dark-overlay__content{display:flex;flex-direction:column;justify-content:center;max-width:108rem;height:100%;margin:0 auto}.dark-overlay .dark-overlay__head{display:flex;align-items:center;justify-content:space-between;margin:1.3333333333rem 0;font-size:1.5rem;color:#fff}@media screen and (max-width: 1023px) and (orientation: landscape){.dark-overlay .dark-overlay__head{z-index:3;position:absolute;top:0;left:0;box-sizing:border-box;max-width:100% !important;padding:0.8333333333rem 1.6666666667rem;margin:0 !important;background-color:rgba(255, 255, 255, 0.1)}}@media screen and (min-width: 1024px){.dark-overlay .dark-overlay__head{position:static;margin:2.6666666667rem 0}}.dark-overlay .dark-overlay__brand-icon{font-size:3.75rem}@media screen and (max-width: 767px){.dark-overlay .dark-overlay__brand-icon{font-size:2rem}}.dark-overlay .dark-overlay__close-icon{padding:0.5rem;font-size:1.6666666667rem;color:currentColor;background-color:#292929;border:0;border-radius:50%;outline:none}@media screen and (min-width: 768px){.dark-overlay .dark-overlay__close-icon{padding:0.6666666667rem;font-size:2rem}}.dark-overlay .dark-overlay__close-icon:focus{background-color:#3d3d3d}.dark-overlay .dark-overlay__navigation-icon{position:absolute;top:50%;padding:1.25rem;font-size:2rem;color:currentColor;color:#fff;background-color:#292929;border:0;border-radius:50%;z-index:2;outline:none}.dark-overlay .dark-overlay__navigation-icon:focus{background-color:#3d3d3d}.dark-overlay .dark-overlay__navigation-icon--previous{left:-1rem;transform:rotate(180deg) translateY(50%);transform-origin:left center}.dark-overlay .dark-overlay__navigation-icon--next{right:-1rem;transform:translateY(-50%) translateX(100%)}@media screen and (max-width: 1279px){.dark-overlay .dark-overlay__navigation-icon{display:none}}.dark-overlay .dark-overlay__body{position:relative;flex:1 1 500px;min-height:1px}@media screen and (max-width: 1023px){.dark-overlay .dark-overlay__body{display:flex;align-items:center;width:100%;overflow:scroll}}@media screen and (min-width: 1280px){.dark-overlay .dark-overlay__body{flex:0 1 679px}}.dark-overlay .dark-overlay__footer{display:flex;gap:1.6666666667rem;align-items:flex-end;justify-content:space-between;margin:1.3333333333rem 0;color:#fff}@media screen and (max-width: 1023px) and (orientation: landscape){.dark-overlay .dark-overlay__footer{z-index:3;position:absolute;bottom:0;left:0;box-sizing:border-box;max-width:100% !important;padding:0.8333333333rem 1.6666666667rem;margin:0 !important;background-color:rgba(255, 255, 255, 0.1)}}@media screen and (min-width: 1024px){.dark-overlay .dark-overlay__footer{box-sizing:border-box;gap:6.6666666667rem;align-items:center;margin:5.5rem 0 2.6666666667rem}}.dark-overlay .dark-overlay__title{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.dark-overlay .dark-overlay__title{font-size:1.3333333333rem;line-height:1.6}}.dark-overlay .dark-overlay__logo{max-width:120px;max-height:25px}@media screen and (min-width: 768px){.dark-overlay .dark-overlay__logo{max-width:200px;max-height:55px}}.media-container{width:100%;height:100%}.footer-main{display:flex;flex:1;flex-direction:column;gap:1.1666666667rem}:host-context(html[dir=rtl]) .dark-overlay__close-icon{right:unset;left:0.8333333333rem}:host-context(html[dir=rtl]) .dark-overlay__navigation-icon--previous{right:-1rem;left:unset;transform:rotate(180deg) translateY(50%);transform-origin:right center}:host-context(html[dir=rtl]) .dark-overlay__navigation-icon--next{right:unset;left:-1rem;transform:translateY(-50%) translateX(-100%)}";

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
const BsDarkOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Methods */
    this.onResize = () => {
      this.isMobile = compareBreakpoint('max', Breakpoint.lg);
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.isMobile = compareBreakpoint('max', Breakpoint.lg);
    this.mainTitle = undefined;
    this.screens = false;
    this.logo = undefined;
  }
  get parsedLogo() {
    return parseIfString(this.logo);
  }
  /** Listeners */
  handleScreenResized() {
    this.throttleMethod();
  }
  /**
   * This method triggers the close method on the modal.
   */
  async closeOverlay() {
    this.modalRef.close();
  }
  /**
   * This method triggers the previous slide method on the modal.
   */
  async previousSlide() {
    this.modalRef.previousSlide();
  }
  /**
   * This method triggers the next slide method on the modal.
   */
  async nextSlide() {
    this.modalRef.nextSlide();
  }
  /**
   * This method triggers the handle focus method on the modal.
   */
  async focusTrap() {
    this.modalRef.handleFocus();
  }
  render() {
    return (h(Host, null, h("bs-base-modal", { ref: (el) => {
        this.modalRef = el;
      }, modalId: BaseModalId.Media, transitionType: "fade" }, h("div", { class: "dark-overlay" }, h("div", { class: "dark-overlay__content" }, h("bs-container", { class: "dark-overlay__head", contained: true }, h("bs-icon", { class: "dark-overlay__brand-icon", name: IconName.BMark }), h("bs-click-action", { name: "close-dark-overlay", tagClass: "dark-overlay__close-icon", onBsClickAction: this.closeOverlay.bind(this) }, h("bs-icon", { name: IconName.Close }))), h("bs-container", { class: "dark-overlay__body", mobileFullWidth: true, contained: true }, this.screens && (h("bs-click-action", { name: "previous-media", tagClass: "dark-overlay__navigation-icon dark-overlay__navigation-icon--previous", onBsClickAction: this.previousSlide.bind(this), disabled: this.isMobile }, h("bs-icon", { name: IconName.CaretForward }))), h("div", { class: "media-container" }, h("slot", { name: "media" })), this.screens && (h("bs-click-action", { name: "next-media", tagClass: "dark-overlay__navigation-icon dark-overlay__navigation-icon--next", onBsClickAction: this.nextSlide.bind(this), disabled: this.isMobile }, h("bs-icon", { name: IconName.CaretForward })))), h("bs-container", { class: "dark-overlay__footer", contained: true }, h("div", { class: "footer-main" }, !isEmpty(this.mainTitle) && (h("bs-text", { text: this.mainTitle, class: "dark-overlay__title" })), h("slot", { name: "controller" })), !isEmpty(this.parsedLogo) && (h("bs-image", { class: "dark-overlay__logo", src: this.parsedLogo.src, "alt-text": this.parsedLogo.altText }))))))));
  }
};
__decorate([
  Memoize('logo')
], BsDarkOverlay.prototype, "parsedLogo", null);
BsDarkOverlay.style = darkThemeOverlayCss;

const youtubeControlCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host .youtube-control{background-color:#292929;border-radius:5px}@media screen and (max-width: 767px){:host .youtube-control{width:100%}}:host .media-control-bar{display:flex;gap:0.6666666667rem;align-items:center;height:40px;padding:0 8px;color:#fff}@media screen and (max-width: 767px){:host .media-control-bar{gap:1rem;height:54px}}:host .youtube-control-button{font-size:1.3333333333rem;color:#fff;background:transparent;border:0;outline-color:#fff}@media screen and (max-width: 767px){:host .youtube-control-button{font-size:1.5833333333rem}}:host .slider{width:100%;height:3px;appearance:none;outline-color:#fff}:host .slider::-webkit-slider-thumb{width:12px;height:12px;appearance:none;cursor:grabbing;background:#f00;border:2px solid #fff;border-radius:50%}:host .slider:disabled{background-color:#3d3d3d}:host .slider:disabled::-webkit-slider-thumb{cursor:default}:host bs-button{font-size:1.6666666667rem;line-height:0}:host bs-icon{font-size:2rem}";

const BsYoutubeControl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bsYoutubeControllerClick = createEvent(this, "bsYoutubeControllerClick", 7);
    /** Methods */
    this.onButtonClick = (e) => {
      this.bsYoutubeControllerClick.emit({
        id: this.videoId,
        action: e.detail.name,
        value: e.detail.value,
      });
    };
    this.onSliderChange = (e) => {
      const el = e.target;
      this.bsYoutubeControllerClick.emit({
        id: this.videoId,
        action: 'progress-bar-input',
        value: el.valueAsNumber,
      });
    };
    this.videoActive = false;
    this.videoId = undefined;
    this.playerState = PlayerState.UNSTARTED;
    this.mute = true;
    this.currentTime = 0;
  }
  /** Listeners */
  bsYoutubeControllerUpdateHandler(e) {
    if (this.videoId === e.detail.id) {
      this.mute = e.detail.mute;
      this.playerState = e.detail.playerState;
      this.currentTime = isEmpty(e.detail.currentTime) ? 0 : e.detail.currentTime;
      this.videoActive = [PlayerState.PLAYING, PlayerState.PAUSED, PlayerState.BUFFERING].includes(e.detail.playerState);
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "youtube-control" }, h("div", { class: "media-control-bar" }, h("bs-click-action", { name: "play", tagClass: "youtube-control-button", onBsClickAction: this.onButtonClick, value: this.playerState === PlayerState.PLAYING ? PlayerState.PAUSED : PlayerState.PLAYING }, h("bs-icon", { name: [PlayerState.PLAYING, PlayerState.BUFFERING].includes(this.playerState)
        ? IconName.Pause
        : IconName.Play })), h("input", { onInput: this.onSliderChange, value: this.currentTime, type: "range", id: "vol", name: "vol", min: "0", max: "100", class: "slider", step: "0.1", disabled: !this.videoActive }), h("bs-click-action", { name: "mute", tagClass: "youtube-control-button", onBsClickAction: (e) => {
        this.mute = !this.mute;
        this.onButtonClick(e);
      } }, h("bs-icon", { name: this.mute ? IconName.Mute : IconName.Volume })), h("bs-click-action", { name: "fullscreen", tagClass: "youtube-control-button", onBsClickAction: this.onButtonClick, disabled: !this.videoActive }, h("bs-icon", { name: IconName.Resize }))))));
  }
};
BsYoutubeControl.style = youtubeControlCss;

export { BsDarkOverlay as bs_dark_overlay, BsYoutubeControl as bs_youtube_control };

//# sourceMappingURL=bs-dark-overlay_2.entry.js.map