class Bsheaderbanner {
  constructor() {
    this.html = this.generateHtml();
  }

  generateHtml() {
    // Using this.someProperty to satisfy the ESLint rule
    this.componentName = 'bs-header-banner';

    return `<bs-header-banner logo="{&quot;src&quot;:&quot;https://s7g10.scene7.com/is/content/bridgestoneeu/BS_23_Turanza_All_Season_6-Logo_Q_RGB_crop&quot;,&quot;srcset&quot;:null,&quot;imageSizes&quot;:null,&quot;altText&quot;:null,&quot;caption&quot;:null,&quot;cover&quot;:false,&quot;width&quot;:0,&quot;height&quot;:0,&quot;lazy&quot;:false,&quot;empty&quot;:false}" image="{&quot;src&quot;:&quot;https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7&quot;,&quot;srcset&quot;:&quot;https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-TABLET 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-DESKTOP-LARGE 1920w&quot;,&quot;imageSizes&quot;:&quot;1920px, 1440px, 1200px, 400px&quot;,&quot;altText&quot;:null,&quot;caption&quot;:null,&quot;cover&quot;:false,&quot;width&quot;:768,&quot;height&quot;:432,&quot;lazy&quot;:false,&quot;empty&quot;:false}" header-title="{&quot;variant&quot;:&quot;undefined&quot;,&quot;color&quot;:&quot;black&quot;,&quot;tag&quot;:&quot;h2&quot;,&quot;text&quot;:&quot;Prepared to perform whatever the season.&quot;,&quot;size&quot;:&quot;head-2&quot;}" button="{&quot;href&quot;:&quot;/find-a-dealer.html&quot;,&quot;text&quot;:&quot;GET TURANZA ALL SEASON 6 ENLITEN&quot;,&quot;variant&quot;:&quot;undefined&quot;,&quot;ghost&quot;:&quot;false&quot;,&quot;iconRight&quot;:&quot;arrow-forward&quot;,&quot;iconLeft&quot;:&quot;&quot;,&quot;target&quot;:&quot;_self&quot;}" variant="video" video="{&quot;videoId&quot;:&quot;ZBztp8xvV_U&quot;,&quot;mute&quot;:true,&quot;inline&quot;:true,&quot;autoplay&quot;:true,&quot;image&quot;:{&quot;src&quot;:&quot;https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7&quot;,&quot;srcset&quot;:&quot;https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-MOBILE 400w, https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-TABLET 1200w, https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-DESKTOP 1440w, https://s7g10.scene7.com/is/image/bridgestoneeu/product-pictures-top-right-7:RATIO-16-9-DESKTOP-LARGE 1920w&quot;,&quot;imageSizes&quot;:&quot;1920px, 1440px, 1200px, 400px&quot;,&quot;altText&quot;:null,&quot;caption&quot;:null,&quot;cover&quot;:false,&quot;width&quot;:0,&quot;height&quot;:0,&quot;lazy&quot;:false,&quot;empty&quot;:false},&quot;decorative&quot;:false,&quot;widths&quot;:[],&quot;lazyEnabled&quot;:false,&quot;lazyThreshold&quot;:0,&quot;dmImage&quot;:false,&quot;:type&quot;:&quot;&quot;}" class="hydrated">
    </bs-header-banner>`;
  }
}

export default async function decorate(block) {
  const carousel = new Bsheaderbanner({});
  block.innerHTML = carousel.html;
}
