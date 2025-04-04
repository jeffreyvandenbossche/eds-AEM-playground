/**
 * The Slider component.
 */
export declare class BsSlider {
  private teaserSliderRef;
  private navigationRef;
  /** States */
  slides: boolean;
  activeIndex: number;
  /** Props */
  navigationOverlay: boolean;
  /** listeners */
  handleScreenResized(): void;
  /** Methods */
  private onResize;
  private throttleMethod;
  private onPreviousSlide;
  private onNextSlide;
  private scrollSlider;
  /** lifecycle hooks */
  componentDidLoad(): void;
  render(): any;
}
