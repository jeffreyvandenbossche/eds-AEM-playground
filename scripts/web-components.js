// Load Bridgestone web components
let defineCustomElements;

try {
  // eslint-disable-next-line no-console
  console.log('Attempting to load web components');

  // Load from the libs directory where Vite copied the files
  import(`${window.hlx.codeBasePath}/dist/libs/bridgestone-web-components/index.js`)
    .then(async () => {
      // eslint-disable-next-line no-console
      console.log('Web components loaded successfully');
      // eslint-disable-next-line no-console
      console.log('bs-story-quote registered:', customElements.get('bs-story-quote'));

      // Import the defineCustomElements function from the ESM folder
      try {
        const loaderModule = await import(`${window.hlx.codeBasePath}/dist/libs/bridgestone-web-components/esm/loader.js`);
        defineCustomElements = loaderModule.defineCustomElements;

        if (typeof defineCustomElements === 'function') {
          defineCustomElements(window, {})
            .then(() => {
              console.log('Bridgestone custom elements defined.');
            })
            .catch((err) => {
              console.error('Error defining custom elements:', err);
            });
        } else {
          console.error('defineCustomElements is not a function:', defineCustomElements);
        }
      } catch (loaderError) {
        console.error('Failed to load defineCustomElements:', loaderError);
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Failed to load web components:', error);
    });
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Error loading web components:', e);
}
