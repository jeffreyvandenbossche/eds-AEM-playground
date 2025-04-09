import { BsTitle } from '../../atoms/title/title';
import { ExperienceZone } from './experience-zone.types';
/**
 * Experience Zone teaser component.
 */
export declare class BsExperienceZoneTeaser {
  /** States */
  slides: boolean;
  activeIndex: number;
  /** Props */
  /**
   * The Experience Zone contract.
   */
  experienceZoneData: ExperienceZone | string;
  get parsedExperienceZoneData(): ExperienceZone;
  /**
   * The Experience Zone Teaser title.
   */
  teaserTitle: BsTitle | string;
  get parsedTeaserTitle(): BsTitle;
  render(): any;
}
