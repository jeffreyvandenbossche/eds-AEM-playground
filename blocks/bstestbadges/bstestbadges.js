class Bstestbadges {
  constructor() {
    this.html = this.generateHtml();
  }

  generateHtml() {
    // Using this.someProperty to satisfy the ESLint rule
    this.componentName = 'bs-header-banner';

    const badgeCollection = [
      {
        cardTitle: 'Balanced tyre with very high mileage',
        cardText: 'Summer Tyre Test 2024 - AUTO BILD - Issue 10/2024',
        badgeTitle: 'Rank 3 of 55',
        badgeText: '<p><i>Summer Tyre Test 2024 - AUTO BILD</i></p><p>New summer tread pattern with balanced driving characteristics, safe wet/dry handling, short braking distances, very good mileage</p><ul><li>AUTO BILD - Issue 10/2024</li><li>Summer Tyre Test 2024</li><li>Test vehicle: VW Golf VIII</li><li>Tested size: 205/55 R 16</li><li>Rank 3 of 55</li></ul>',
        badgeCta: {
          href: null,
          text: null,
          variant: 'text',
          ghost: null,
          iconRight: 'caret-forward',
          iconLeft: null,
          target: '_blank',
        },
        badgeImages: [
          {
            src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/BridgestoneTuranza6_VORBL_AB102024_EN',
            srcset: null,
            imageSizes: null,
            altText: null,
            caption: null,
            cover: false,
            width: 0,
            height: 0,
            lazy: false,
            empty: false,
          },
        ],
      },
      {
        cardTitle: 'The top choice of family car drivers',
        cardText: 'Customer Choice Awards 2024 - Best Tyres For Family Cars',
        badgeTitle: 'The top choice of drivers for their family cars',
        badgeText: "<p><i>Customer Choice Awards 2024 - Best Tyres For Family Cars</i></p><p>Bridgestone Turanza 6 ENLITEN wins the Customer Choice Award from DriverReviews for the best tyres for family cars! This recognition from Europe's largest verified tyre reviews platform, highlights our commitment to providing what really matters for drivers and their families.</p>",
        badgeCta: {
          href: null,
          text: null,
          variant: 'text',
          ghost: null,
          iconRight: 'caret-forward',
          iconLeft: null,
          target: '_blank',
        },
        badgeImages: [
          {
            src: 'https://s7g10.scene7.com/is/image/bridgestoneeu/dr-badge-2024-family-cars-gold-5',
            srcset: null,
            imageSizes: null,
            altText: null,
            caption: null,
            cover: false,
            width: 0,
            height: 0,
            lazy: false,
            empty: false,
          },
        ],
      },
    ];

    // Convert JSON to string and replace quotes with HTML entities
    const jsonString = JSON.stringify(badgeCollection)
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

    return `<bs-test-badge-slider test-badge-collection="${jsonString}"></bs-test-badge-slider>`;
  }
}

export default async function decorate(block) {
  const carousel = new Bstestbadges({});
  block.innerHTML = carousel.html;
}
