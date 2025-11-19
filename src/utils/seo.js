
 // SEO Utility for updating page meta tags dynamically

const SITE_URL = 'https://www.mediamatrixx.in';
const SITE_NAME = 'Media Matrix';
const DEFAULT_IMAGE = '/images/logo.jpg';

export const updatePageMeta = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  // 1. Update Page Title
  if (title) {
    document.title = title === 'Home' 
      ? `${SITE_NAME} | Convert Inventory into Strategic Media Placements`
      : `${title} | ${SITE_NAME}`;
  }

  // 2. Update or Create Meta Description
  updateMetaTag('name', 'description', description);

  // 3. Update or Create Meta Keywords
  if (keywords) {
    updateMetaTag('name', 'keywords', keywords);
  }

  // 4. Update Canonical URL
  if (canonical) {
    updateLinkTag('canonical', `${SITE_URL}${canonical}`);
  }

  // 5. Update Open Graph Tags
  const fullTitle = title === 'Home'
    ? `${SITE_NAME} | Convert Inventory into Strategic Media Placements`
    : `${title} | ${SITE_NAME}`;

  const ogTags = {
    'og:type': ogType,
    'og:site_name': SITE_NAME,
    'og:title': fullTitle,
    'og:description': description,
    'og:url': `${SITE_URL}${canonical || '/'}`,
    'og:image': ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
    'og:locale': 'en_IN'
  };

  Object.entries(ogTags).forEach(([property, content]) => {
    if (content) {
      updateMetaTag('property', property, content);
    }
  });

  // 6. Update Twitter Card Tags
  const twitterTags = {
    'twitter:card': twitterCard,
    'twitter:title': fullTitle,
    'twitter:description': description,
    'twitter:url': `${SITE_URL}${canonical || '/'}`,
    'twitter:image': ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`
  };

  Object.entries(twitterTags).forEach(([name, content]) => {
    if (content) {
      updateMetaTag('name', name, content);
    }
  });

  // 7. Scroll to top on route change (bonus UX)
  window.scrollTo(0, 0);
};

/**
 * Helper function to update or create meta tags
 */
function updateMetaTag(attribute, attributeValue, content) {
  if (!content) return;

  let metaTag = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, attributeValue);
    document.head.appendChild(metaTag);
  }
  
  metaTag.content = content;
}

/**
 * Helper function to update or create link tags
 */
function updateLinkTag(rel, href) {
  if (!href) return;

  let linkTag = document.querySelector(`link[rel="${rel}"]`);
  
  if (!linkTag) {
    linkTag = document.createElement('link');
    linkTag.rel = rel;
    document.head.appendChild(linkTag);
  }
  
  linkTag.href = href;
}

/**
 * Predefined SEO configurations for each page
 */
export const pageSEO = {
  home: {
    title: 'Home',
    description: "India's leading media barter experts. Convert excess inventory into premium media placements across Print, TV, Radio, Digital, OOH & Cinema. 14+ years experience, Pan-India coverage.",
    keywords: 'media barter India, barter advertising, inventory exchange, media buying India, ATL BTL advertising, newspaper advertising, TV advertising, radio advertising, digital advertising',
    canonical: '/'
  },
  
  about: {
    title: 'About Us',
    description: 'Media Matrix - 14+ years of expertise in media barter solutions. Helping brands convert inventory into strategic media placements across India. Trusted by 500+ clients.',
    keywords: 'about media matrix, media barter experts, advertising agency India, media solutions provider',
    canonical: '/about'
  },
  
  services: {
    title: 'Our Services',
    description: 'Comprehensive media barter solutions: Media Buying (Cash & Barter), Sampling & Gifting, ATL/BTL advertising across Newspaper, TV, Radio, Digital, OOH & Cinema. Pan-India coverage.',
    keywords: 'media barter services, media buying, ATL advertising, BTL advertising, newspaper ads, TV ads, radio spots, OOH advertising, cinema advertising',
    canonical: '/services'
  },
  
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Media Matrix for media barter solutions. Call +91-9070106050 or email info@mediamatrix.in. Free consultation available. Delhi NCR office.',
    keywords: 'media barter contact, advertising agency contact Delhi, media buying enquiry, barter advertising contact',
    canonical: '/contact'
  }
};

/**
 * Quick usage function - just pass page name
 */
export const setPageSEO = (pageName) => {
  const config = pageSEO[pageName];
  if (config) {
    updatePageMeta(config);
  } else {
    console.warn(`SEO config not found for page: ${pageName}`);
  }
};