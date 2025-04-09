'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ef019db8.js');
const title_types = require('./title.types-c8079842.js');
const icon_types = require('./icon.types-5e9e7ac2.js');

const sharingButtons = [
  {
    icon: icon_types.IconName.SocialFacebook,
    text: 'Facebook',
    id: 'facebook',
  },
  {
    icon: icon_types.IconName.SocialLinkedin,
    text: 'Linkedin',
    id: 'linkedin',
  },
  {
    icon: icon_types.IconName.SocialEmail,
    text: 'Email',
    id: 'email',
  },
  {
    icon: icon_types.IconName.SocialTwitter,
    text: 'X',
    id: 'twitter',
  },
];

const shareBannerCss = ".flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"Decimal\", \"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", \"Noto Sans Bold\", Arial;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", \"Noto Sans Italic\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", \"Noto Sans\", Arial;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .share-banner{display:flex;gap:2rem;align-items:flex-start;justify-content:space-between;padding:3.6666666667rem 0}@media screen and (max-width: 639px){:host .share-banner{flex-direction:column;align-items:center}}:host .button-wrapper{display:grid;flex-wrap:wrap;grid-template-columns:repeat(4, 1fr);gap:1.3333333333rem;align-items:center;justify-content:flex-start}@media screen and (max-width: 639px){:host .button-wrapper{gap:2.25rem}}:host .button-wrapper bs-icon{padding:0.5833333333rem;font-size:2rem;color:#666;border:1px solid #cbcbcb;border-radius:50%}:host .social-section{display:flex;flex-direction:column;gap:1rem}:host .social-item{display:flex;gap:1rem;align-items:center}:host .text{flex:1}";

const BsShareBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.currentUrl = undefined;
    this.sectionTitle = undefined;
  }
  /** Methods */
  handleShareClick(type) {
    if (type === 'email') {
      this.shareByEmail();
    }
    else {
      this.shareToSocials(type);
    }
  }
  shareByEmail() {
    const encodedCurrentUrl = encodeURIComponent(this.currentUrl);
    window.open(`mailto:?body=${encodedCurrentUrl}`, '_blank' // <- This is what makes it open in a new window.
    );
  }
  shareToSocials(socialType) {
    const encodedCurrentUrl = encodeURIComponent(this.currentUrl);
    let sharingLinkUrl;
    switch (socialType) {
      case 'facebook':
        sharingLinkUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedCurrentUrl}`;
        break;
      case 'twitter':
        sharingLinkUrl = `https://twitter.com/intent/tweet?url=${encodedCurrentUrl}`;
        break;
      case 'linkedin':
        sharingLinkUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedCurrentUrl}`;
        break;
    }
    window.open(sharingLinkUrl, 'myWindow', 'width=550, height=400');
  }
  /** Lifecycle Hooks */
  componentDidLoad() {
    this.currentUrl = window.location.href;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "share-banner" }, index.h("bs-title", { text: this.sectionTitle, tag: title_types.TitleTag.H2, size: title_types.TitleSize.Head3 }), index.h("div", { class: "button-wrapper" }, sharingButtons.map((item) => (index.h("bs-click-action", { class: "icon", onBsClickAction: () => this.handleShareClick(item.id) }, index.h("bs-icon", { name: item.icon }))))))));
  }
};
BsShareBanner.style = shareBannerCss;

exports.bs_share_banner = BsShareBanner;

//# sourceMappingURL=bs-share-banner.cjs.entry.js.map