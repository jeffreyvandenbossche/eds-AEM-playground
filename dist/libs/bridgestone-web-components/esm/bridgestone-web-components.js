import { p as promiseResolve, b as bootstrapLazy } from './index-17dff65c.js';
export { s as setNonce } from './index-17dff65c.js';

/*
 Stencil Client Patch Browser v3.4.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["bs-click-action_2",[[4,"bs-click-action",{"name":[1],"value":[8],"type":[1],"href":[1],"target":[1],"tagClass":[1,"tag-class"],"disabled":[4],"ariaLabelText":[1,"aria-label-text"]}],[1,"bs-icon",{"name":[1]}]]],["bs-default-layout",[[1,"bs-default-layout",{"theme":[1],"overlayMenuIsOpen":[32],"overlayMenuData":[32],"youtubeModalIsOpen":[32],"youtubeModalData":[32],"carouselModalIsOpen":[32],"carouselModalData":[32],"experienceZoneModalIsOpen":[32],"experienceZoneModalData":[32],"testBadgeModalIsOpen":[32],"testBadgeModalData":[32],"handleTouch":[64]},[[0,"bsClickAction","bsClickActionHandler"],[0,"bsButtonClick","bsClickActionHandler"],[0,"bsModalIsClosed","bsModalIsClosedHandler"],[1,"touchstart","handleTouchStart"],[1,"touchend","handleTouchEnd"]]]]],["bs-header-banner",[[1,"bs-header-banner",{"image":[1],"logo":[1],"label":[1],"headerTitle":[1,"header-title"],"subtitle":[1],"button":[1],"variant":[1],"video":[1],"isMobile":[32]},[[9,"resize","handleScreenResized"]]]]],["bs-experience-zone",[[1,"bs-experience-zone",{"experienceZoneData":[1,"experience-zone-data"],"teaserTitle":[1,"teaser-title"],"slides":[32],"activeIndex":[32]}]]],["bs-test-badge-slider",[[1,"bs-test-badge-slider",{"testBadgeCollection":[1,"test-badge-collection"]}]]],["bs-related-articles",[[1,"bs-related-articles",{"articlesData":[1,"articles-data"],"relatedArticlesTitle":[1,"related-articles-title"]}]]],["bs-header-navigation",[[1,"bs-header-navigation",{"headerNavigation":[1,"header-navigation"],"stickyMenuIsVisible":[32]},[[9,"scroll","handleBodyScroll"]]]]],["bs-carousel-card",[[1,"bs-carousel-card",{"imageCollection":[1,"image-collection"],"autoplay":[4],"slow":[4],"carouselTitle":[1,"carousel-title"],"logo":[1],"cta":[1],"slim":[4]}]]],["bs-cta-banner",[[1,"bs-cta-banner",{"bannerTitle":[1,"banner-title"],"subtitle":[1],"button":[1],"variant":[1],"filled":[4]}]]],["bs-follow-us-banner",[[1,"bs-follow-us-banner",{"sectionTitle":[1,"section-title"],"socialLinks":[1,"social-links"]}]]],["bs-newsletter-banner",[[1,"bs-newsletter-banner",{"sectionTitle":[1,"section-title"],"subtitle":[1],"button":[1]}]]],["bs-share-banner",[[1,"bs-share-banner",{"sectionTitle":[1,"section-title"],"currentUrl":[32]}]]],["bs-author",[[1,"bs-author",{"authorImage":[1,"author-image"],"authorName":[1,"author-name"],"authorPosition":[1,"author-position"],"aboutTitle":[1,"about-title"],"description":[1]}]]],["bs-blog-header",[[1,"bs-blog-header",{"image":[1],"logo":[1],"head":[1]}]]],["bs-breadcrumb",[[1,"bs-breadcrumb",{"data":[1],"wrapped":[32],"displayedItems":[32]}]]],["bs-country-card",[[1,"bs-country-card",{"flag":[1],"countryTitle":[1,"country-title"],"brands":[1]}]]],["bs-form-field",[[1,"bs-form-field",{"value":[1],"name":[1],"filled":[516],"focused":[516],"invalid":[516],"required":[4],"invalidMessage":[1,"invalid-message"],"requiredMessage":[1,"required-message"],"icon":[8],"label":[1],"border":[4],"validator":[1],"validate":[64]}]]],["bs-form-checkbox",[[1,"bs-form-checkbox",{"name":[1],"requiredMessage":[1,"required-message"],"required":[4],"label":[1],"options":[1],"invalid":[32],"focused":[32],"value":[32]}]]],["bs-form-input",[[1,"bs-form-input",{"name":[1],"type":[1],"label":[1],"value":[1],"required":[4],"min":[1],"max":[1],"requiredMessage":[1,"required-message"],"invalidMessage":[1,"invalid-message"],"icon":[8],"rows":[2],"resizeable":[4],"filled":[32],"focused":[32],"invalid":[32]}]]],["bs-form-radio-button",[[1,"bs-form-radio-button",{"name":[1],"requiredMessage":[1,"required-message"],"required":[4],"label":[1],"options":[1],"invalid":[32],"focused":[32],"value":[32]}]]],["bs-form-select",[[1,"bs-form-select",{"name":[1],"label":[1],"options":[1],"required":[4],"requiredMessage":[1,"required-message"],"icon":[8],"value":[32],"filled":[32],"focused":[32],"invalid":[32],"activeOption":[32]}]]],["bs-story-quote",[[1,"bs-story-quote",{"text":[1],"authorName":[1,"author-name"],"authorPosition":[1,"author-position"],"source":[1],"authorImage":[1,"author-image"]}]]],["bs-tooltip",[[1,"bs-tooltip",{"titleText":[1,"title-text"],"contentText":[1,"content-text"],"bottomPosition":[32],"isContentVisible":[32],"isTransitioning":[32]},[[9,"resize","setTooltipPosition"]]]]],["bs-callout-box",[[1,"bs-callout-box",{"text":[1],"variation":[1]}]]],["bs-quote",[[1,"bs-quote",{"text":[1],"authorName":[1,"author-name"],"authorPosition":[1,"author-position"],"source":[1],"authorImage":[1,"author-image"]}]]],["base-ping",[[1,"base-ping",{"pong":[1]}]]],["bs-date",[[1,"bs-date",{"date":[1],"languageIsoCode":[1,"language-iso-code"],"isWhite":[4,"is-white"],"isDateValid":[32],"isLanguageCodeValid":[32]}]]],["bs-dot-navigation",[[1,"bs-dot-navigation",{"items":[2],"index":[2],"slow":[4],"progress":[32]}]]],["bs-form-container",[[4,"bs-form-container",{"action":[1],"invalidFormMessage":[1,"invalid-form-message"],"submitErrorMessage":[1,"submit-error-message"],"successRedirect":[1,"success-redirect"],"formHasErrors":[32],"isFormSending":[32],"submitHasFailed":[32]},[[0,"bsButtonClick","onBsButtonClickHandler"]]]]],["bs-text",[[1,"bs-text",{"text":[1],"size":[1],"textColor":[1,"text-color"]}]]],["bs-image",[[1,"bs-image",{"src":[1],"srcset":[1],"width":[8],"height":[8],"imageSizes":[1,"image-sizes"],"altText":[1,"alt-text"],"itemprop":[1],"caption":[1],"captionCover":[4,"caption-cover"],"cover":[4],"source":[1],"lazy":[4]}]]],["ion-icon",[[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]}]]],["bs-dark-overlay_2",[[1,"bs-youtube-control",{"videoId":[1,"video-id"],"playerState":[2,"player-state"],"mute":[4],"currentTime":[2,"current-time"],"videoActive":[32]},[[8,"bsYoutubeControllerUpdate","bsYoutubeControllerUpdateHandler"]]],[4,"bs-dark-overlay",{"mainTitle":[1,"main-title"],"screens":[4],"logo":[1],"isMobile":[32],"closeOverlay":[64],"previousSlide":[64],"nextSlide":[64],"focusTrap":[64]},[[9,"resize","handleScreenResized"]]]]],["bs-youtube-video",[[1,"bs-youtube-video",{"inline":[4],"videoId":[1,"video-id"],"mute":[4],"playerState":[32],"currentTime":[32]},[[8,"bsYoutubeControllerClick","bsYoutubeControllerClickHandler"],[8,"bsYoutubeAPIReady","bsYoutubeAPIReadyHandler"]]]]],["bs-video-card",[[1,"bs-video-card",{"videoId":[1,"video-id"],"mute":[4],"inline":[4],"autoplay":[4],"image":[1],"active":[32]},[[8,"bsYoutubeControllerClick","bsYoutubeControllerClickHandler"],[8,"bsYoutubeControllerUpdate","bsYoutubeControllerUpdateHandler"]]]]],["bs-article-card",[[1,"bs-article-card",{"articleImage":[1,"article-image"],"articleTitle":[1,"article-title"],"articleCta":[1,"article-cta"],"articleHref":[1,"article-href"]}]]],["bs-experience-zone-card",[[1,"bs-experience-zone-card",{"singular":[516],"cardTitle":[1,"card-title"],"cardImage":[1,"card-image"],"video":[4]}]]],["bs-test-badge-card",[[1,"bs-test-badge-card",{"cardTitle":[1,"card-title"],"cardText":[1,"card-text"],"cardImage":[1,"card-image"]}]]],["bs-logo-bar",[[1,"bs-logo-bar",{"logo":[1]}]]],["bs-button",[[33,"bs-button",{"mode":[1],"text":[1],"href":[1],"target":[1],"value":[8],"type":[1],"action":[1],"tagClass":[1,"tag-class"],"variant":[1],"ghost":[4],"iconLeft":[1,"icon-left"],"iconRight":[1,"icon-right"],"isFullWidth":[4,"is-full-width"],"isDisabled":[4,"is-disabled"]}]]],["bs-title",[[1,"bs-title",{"text":[1],"tag":[1],"color":[1],"variant":[1],"size":[1]}]]],["bs-base-modal_2",[[1,"bs-base-modal",{"modalId":[1,"modal-id"],"transitionType":[1,"transition-type"],"modalCanBeClosed":[4,"modal-can-be-closed"],"close":[64],"nextSlide":[64],"previousSlide":[64],"handleFocus":[64]}],[4,"bs-container",{"mobileFullWidth":[4,"mobile-full-width"],"contained":[4]}]]],["bs-light-overlay_2",[[1,"bs-test-badge-detail",{"badgeTitle":[1,"badge-title"],"badgeText":[1,"badge-text"],"badgeCta":[1,"badge-cta"],"badgeImages":[1,"badge-images"]}],[4,"bs-light-overlay",{"screens":[4],"closeOverlay":[64],"previousSlide":[64],"nextSlide":[64],"focusTrap":[64]}]]],["bs-slider",[[1,"bs-slider",{"navigationOverlay":[4,"navigation-overlay"],"slides":[32],"activeIndex":[32]},[[9,"resize","handleScreenResized"]]]]],["bs-experience-zone-screen_2",[[1,"bs-experience-zone-story",{"active":[4],"hideNavigation":[4,"hide-navigation"],"storyData":[1,"story-data"],"activeIndex":[32]},[[8,"bsSwipeAction","handleBsSwipeAction"]]],[1,"bs-experience-zone-screen",{"active":[4],"layout":[1],"disclaimer":[1],"components":[1]}]]],["bs-accordion_3",[[1,"bs-accordion-item",{"identifier":[1],"accordionItemTitle":[1,"accordion-item-title"],"active":[4],"expandable":[516],"itemTag":[1,"item-tag"],"itemSize":[1,"item-size"]}],[1,"bs-product-card",{"cardTitle":[1,"card-title"],"cardText":[1,"card-text"],"cardImage":[1,"card-image"]}],[1,"bs-accordion",{"mainTitle":[1,"main-title"]},[[0,"bsAccordionStateAction","bsAccordionStateHandler"]]]]],["bs-experience-zone-modal_4",[[0,"bs-overlay-menu",{"headerNavigation":[1,"header-navigation"],"isClosing":[32]},[[0,"bsModalIsClosing","bsModalIsClosingHandler"]]],[1,"bs-experience-zone-modal",{"activeIndex":[2,"active-index"],"experienceZoneData":[1,"experience-zone-data"]},[[0,"bsNextSlideAction","bsNextSlideActionHandler"],[0,"bsPreviousSlideAction","bsPreviousSlideActionHandler"]]],[1,"bs-test-badge-modal",{"index":[2],"testBadgeCollection":[1,"test-badge-collection"]},[[0,"bsNextSlideAction","bsNextSlideActionHandler"],[0,"bsPreviousSlideAction","bsPreviousSlideActionHandler"]]],[1,"bs-image-carousel",{"imageCollection":[1,"image-collection"],"index":[2],"autoplay":[4],"slow":[4],"carouselTitle":[1,"carousel-title"],"logo":[1],"desktop":[32]},[[8,"bsSwipeAction","handleBsSwipeAction"],[9,"resize","handleScreenResized"],[0,"bsNextSlideAction","handleNextMedia"],[0,"bsPreviousSlideAction","handlePreviousMedia"]]]]]], options);
});

//# sourceMappingURL=bridgestone-web-components.js.map