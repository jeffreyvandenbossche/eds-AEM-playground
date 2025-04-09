import { DEFAULT_IMAGE_4_3 } from '../../atoms/image/image.data';
import { TitleSize, TitleTag } from '../../atoms/title/title.types';
export const countryCardData = {
  flag: {
    src: DEFAULT_IMAGE_4_3.src,
    altText: 'Austrian flag',
    cover: false,
    lazy: false,
  },
  countryTitle: {
    tag: TitleTag.Span,
    text: 'Austria | Österreich',
    size: TitleSize.Head5,
  },
  brands: [
    { label: 'Bridgestone', href: 'https://bridgestone.co.uk' },
    { label: 'Firestone', href: 'https://firestone.eu' },
    { label: 'Bandag', href: 'https://bandag.eu' },
  ],
};
//# sourceMappingURL=country-card.data.js.map
