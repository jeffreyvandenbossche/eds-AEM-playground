import { Host, h } from '@stencil/core';
import { IconName } from '../../atoms/icon/icon.types';
import { throttle } from '../../../utils/throttle';
/**
 * The Slider component.
 */
export class BsSlider {
  constructor() {
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
  static get is() { return "bs-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["slider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["slider.css"]
    };
  }
  static get properties() {
    return {
      "navigationOverlay": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Props"
        },
        "attribute": "navigation-overlay",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "slides": {},
      "activeIndex": {}
    };
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleScreenResized",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=slider.js.map
