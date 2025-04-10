import { r as registerInstance, h, H as Host } from './index-17dff65c.js';
import { I as IconName } from './icon.types-2d98aa0e.js';
import { t as throttle } from './throttle-fee772e9.js';

const sliderCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;position:relative}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .overlay{z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;display:flex;height:calc(100% - 1.6666666667rem);pointer-events:none}@media screen and (max-width: 767px){:host .overlay{display:none}}:host .navigation{position:relative;width:100%;background:white;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.8) 90%, white 100%)}:host .navigation--transparent{background:transparent}:host .navigation-back{position:absolute;top:50%;left:0;transform:translate(-50%, -50%)}:host .navigation-forward{position:absolute;top:50%;right:0;transform:translate(50%, -50%)}:host .head{position:absolute;top:-2.6666666667rem;right:0;display:flex;width:8rem;height:3.5rem;pointer-events:none;transform:translateY(-3.5rem)}:host .head .navigation-back,:host .head .navigation-forward{transform:translateY(-50%)}:host .teaser-slider{display:flex;gap:1rem;overflow:auto}@media screen and (min-width: 768px){:host .teaser-slider{gap:2rem;padding-bottom:1.6666666667rem}}:host .teaser-slider::-webkit-scrollbar-track{background-color:#f8f7f3}:host .teaser-slider::-webkit-scrollbar{height:2px;background-color:transparent}@media screen and (max-width: 767px){:host .teaser-slider::-webkit-scrollbar{display:none}}:host .teaser-slider::-webkit-scrollbar-thumb{background-color:#f00}:host .navigation-button{padding:0.6666666667rem;font-size:2rem;pointer-events:all;background-color:#fff;border:1px solid #cbcbcb;border-radius:50%}:host .navigation-button:focus{background-color:#cbcbcb;outline:0}:host-context(html[dir=rtl]) .navigation{transform:rotateY(180deg)}:host-context(html[dir=rtl]) .navigation-button{transform:rotateY(180deg)}:host-context(html[dir=rtl]) .head{right:unset;left:0}";

const BsSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Methods */
    this.onResize = () => {
      this.slides =
        this.teaserSliderRef && this.teaserSliderRef.scrollWidth > this.teaserSliderRef.offsetWidth;
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.onPreviousSlide = () => {
      if (this.teaserSliderRef.scrollLeft === 0)
        return;
      this.activeIndex -= 1;
      this.scrollSlider();
    };
    this.onNextSlide = () => {
      if (Math.abs(this.teaserSliderRef.scrollLeft) + this.teaserSliderRef.clientWidth ===
        this.teaserSliderRef.scrollWidth)
        return;
      this.activeIndex += 1;
      this.scrollSlider();
    };
    this.scrollSlider = () => {
      let scrollDistance;
      const activeSliderItem = this.teaserSliderRef.children[0].assignedElements()[this.activeIndex];
      if (document.dir === 'rtl') {
        scrollDistance =
          activeSliderItem.offsetLeft +
            activeSliderItem.offsetWidth -
            (this.teaserSliderRef.offsetLeft + this.teaserSliderRef.offsetWidth);
      }
      else {
        scrollDistance = activeSliderItem.offsetLeft - this.teaserSliderRef.offsetLeft;
      }
      this.teaserSliderRef.scrollTo({
        top: 0,
        left: scrollDistance,
        behavior: 'smooth',
      });
    };
    this.slides = true;
    this.activeIndex = 0;
    this.navigationOverlay = false;
  }
  /** listeners */
  handleScreenResized() {
    this.throttleMethod();
  }
  /** lifecycle hooks */
  componentDidLoad() {
    this.slides = this.teaserSliderRef.scrollWidth > this.teaserSliderRef.offsetWidth;
    if (this.slides) {
      this.teaserSliderRef.addEventListener('scroll', throttle(() => {
        if (Math.abs(this.teaserSliderRef.scrollLeft) + this.teaserSliderRef.offsetWidth >=
          this.teaserSliderRef.scrollWidth) {
          this.navigationRef.classList.add('navigation--transparent');
        }
        else {
          this.navigationRef.classList.remove('navigation--transparent');
        }
      }, 0));
    }
  }
  render() {
    return (h(Host, null, this.slides && (h("div", { class: this.navigationOverlay ? 'overlay' : 'head' }, h("div", { class: `navigation ${this.navigationOverlay ? 'navigation--overlay' : ''}`, ref: (el) => {
        this.navigationRef = el;
      } }, h("div", { class: "navigation-back" }, h("bs-click-action", { name: "previous", onBsClickAction: this.onPreviousSlide, tagClass: "navigation-button", ariaLabelText: "backward" }, h("bs-icon", { name: IconName.ArrowBackward }))), h("div", { class: "navigation-forward" }, h("bs-click-action", { name: "next", onBsClickAction: this.onNextSlide, tagClass: "navigation-button", ariaLabelText: "forward" }, h("bs-icon", { name: IconName.ArrowForward })))))), h("div", { class: "teaser-slider", ref: (el) => {
        this.teaserSliderRef = el;
      } }, h("slot", { name: "slider-item" }))));
  }
};
BsSlider.style = sliderCss;

export { BsSlider as bs_slider };

//# sourceMappingURL=bs-slider.entry.js.map