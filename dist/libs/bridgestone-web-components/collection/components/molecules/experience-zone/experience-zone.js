var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from '@stencil/core';
import { Memoize, parseIfString } from '@springbokagency/stencil-base';
import { ExperienceZoneLayout } from './experience-zone.types';
/**
 * Experience Zone teaser component.
 */
export class BsExperienceZoneTeaser {
  constructor() {
    this.slides = false;
    this.activeIndex = 0;
    this.experienceZoneData = undefined;
    this.teaserTitle = undefined;
  }
  get parsedExperienceZoneData() {
    return parseIfString(this.experienceZoneData);
  }
  get parsedTeaserTitle() {
    return parseIfString(this.teaserTitle);
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone" }, h("bs-title", { text: this.parsedTeaserTitle.text, tag: this.parsedTeaserTitle.tag, size: this.parsedTeaserTitle.size, variant: this.parsedTeaserTitle.variant, color: this.parsedTeaserTitle.color }), h("bs-slider", null, this.parsedExperienceZoneData.stories.map((story, index) => (h("bs-click-action", { name: "open-experience-zone-modal", class: "grow", slot: "slider-item", tagClass: "grow click-action", value: { activeIndex: index, experienceZoneData: this.experienceZoneData } }, h("bs-experience-zone-card", { class: "teaser-card", singular: this.parsedExperienceZoneData.stories.length === 1, cardTitle: story.storyTitle, cardImage: story.storyImage, video: story.screens[0].layout === ExperienceZoneLayout.Video }))))))));
  }
  static get is() { return "bs-experience-zone"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["experience-zone.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["experience-zone.css"]
    };
  }
  static get properties() {
    return {
      "experienceZoneData": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ExperienceZone | string",
          "resolved": "string | { logo: BsImage; stories: ExperienceZoneStory[]; }",
          "references": {
            "ExperienceZone": {
              "location": "import",
              "path": "./experience-zone.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The Experience Zone contract."
        },
        "attribute": "experience-zone-data",
        "reflect": false
      },
      "teaserTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsTitle | string",
          "resolved": "BsTitle | string",
          "references": {
            "BsTitle": {
              "location": "import",
              "path": "../../atoms/title/title"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The Experience Zone Teaser title."
        },
        "attribute": "teaser-title",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "slides": {},
      "activeIndex": {}
    };
  }
}
__decorate([
  Memoize('experienceZoneData')
], BsExperienceZoneTeaser.prototype, "parsedExperienceZoneData", null);
__decorate([
  Memoize('teaserTitle')
], BsExperienceZoneTeaser.prototype, "parsedTeaserTitle", null);
//# sourceMappingURL=experience-zone.js.map
