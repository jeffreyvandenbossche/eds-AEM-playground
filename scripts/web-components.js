let defineCustomElements;

try {
  // eslint-disable-next-line no-console
  console.log('Attempting to load web components');

  // Use dynamic import
  await import(`${window.hlx.codeBasePath}/dist/libs/bridgestone-web-components/index.js`);
  // eslint-disable-next-line no-console
  console.log('Web components loaded successfully');
  // eslint-disable-next-line no-console
  console.log('bs-story-quote registered:', customElements.get('bs-story-quote'));

  try {
    // eslint-disable-next-line no-console
    console.log('Web-components ESM loader loaded successfully');
    const loaderModule = await import(`${window.hlx.codeBasePath}/dist/libs/bridgestone-web-components/esm/loader.js`);
    defineCustomElements = loaderModule.defineCustomElements;
    if (typeof defineCustomElements === 'function') {
      await defineCustomElements(window, {});
      // eslint-disable-next-line no-console
      console.log('Bridgestone custom elements defined.');
    } else {
      // eslint-disable-next-line no-console
      console.error('defineCustomElements is not a function:', defineCustomElements);
    }
  } catch (loaderError) {
    // eslint-disable-next-line no-console
    console.error('Failed to load defineCustomElements:', loaderError);
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Error loading web components:', e);
}
