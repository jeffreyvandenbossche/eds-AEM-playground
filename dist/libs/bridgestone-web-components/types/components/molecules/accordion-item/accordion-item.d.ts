import { EventEmitter } from '../../../stencil-public-runtime';
import { TitleSize, TitleTag } from '../../atoms/title/title.types';
export declare class BsAccordionItem {
  /**
   * Accordion's unique identifier used for accessibility.
   */
  identifier: string;
  validateIdentifier(newValue: string): void;
  /**
   * Accordion's title.
   */
  accordionItemTitle: string;
  /**
   * Accordion's active state
   */
  active?: boolean;
  /**
   * Is the accordion expandable?
   */
  expandable?: boolean;
  /**
   * To set the title tag
   */
  itemTag: TitleTag;
  /**
   * To set the title size
   */
  itemSize: TitleSize;
  /**
   * Accordion's event emitter
   */
  bsAccordionStateAction: EventEmitter<Boolean>;
  private bsAccordionStateActionHandler;
  render(): any;
}
