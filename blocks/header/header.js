import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Load nav fragment (keep this for potential future use)
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  await loadFragment(navPath);

  // Get the header element
  const headerElement = block.closest('header');

  // Remove the header element
  if (headerElement) {
    headerElement.remove();
  }

  // Check if bs-default-layout already exists
  let bsLayout = document.querySelector('bs-default-layout');

  // If no existing bs-default-layout, create one
  if (!bsLayout) {
    bsLayout = document.createElement('bs-default-layout');

    // Get all content from the main element
    const mainElement = document.querySelector('main');
    if (mainElement) {
      // Get all children of main and move them directly to bs-default-layout
      while (mainElement.firstChild) {
        bsLayout.appendChild(mainElement.firstChild);
      }

      // Remove the original main element
      mainElement.remove();
    }

    // Add the bs-default-layout to the body
    const bodyElement = document.body;

    // Insert the bs-default-layout as the first child of the body
    if (bodyElement.firstChild) {
      bodyElement.insertBefore(bsLayout, bodyElement.firstChild);
    } else {
      bodyElement.appendChild(bsLayout);
    }
  }

  // Create custom bs-header-navigation element
  const bsHeader = document.createElement('bs-header-navigation');
  bsHeader.setAttribute('header-navigation', '{"mainLogo":{"src":"https://s7g10.scene7.com/is/content/bridgestoneeu/bridgestone-solutions-for-your-journey","srcset":null,"imageSizes":null,"altText":null,"caption":null,"cover":false,"width":0,"height":0,"lazy":false,"empty":false},"mobileMainLogo":{"src":"https://s7g10.scene7.com/is/content/bridgestoneeu/B-mark-logo","srcset":null,"imageSizes":null,"altText":null,"caption":null,"cover":false,"width":0,"height":0,"lazy":false,"empty":false},"stickyLogo":{"src":"https://s7g10.scene7.com/is/content/bridgestoneeu/bridgestone-solutions-for-your-journey","srcset":null,"imageSizes":null,"altText":null,"caption":null,"cover":false,"width":0,"height":0,"lazy":false,"empty":false},"stickyButton":null,"navigation":{"primary":[{"href":null,"title":"Our Company","target":null,"description":null,"thumbnail":null,"children":[{"href":"/our-company/about.html","title":"About","target":null,"description":null,"thumbnail":null,"children":null},{"href":"/our-company/sustainability.html","title":"Sustainability","target":null,"description":null,"thumbnail":null,"children":null}]}]}}');

  // Add the bs-header-navigation to the beginning of bs-default-layout
  if (bsLayout.firstChild) {
    bsLayout.insertBefore(bsHeader, bsLayout.firstChild);
  } else {
    bsLayout.appendChild(bsHeader);
  }
}
