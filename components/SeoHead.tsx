import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, CITY_MAIN, LICENSE_NUMBER, CITIES_SERVED, SERVICES } from '../constants';

interface SeoHeadProps {
  title: string;
  description: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'Article' | 'WebPage';
  image?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  schemaType = 'LocalBusiness',
  image = 'https://res.cloudinary.com/dwquql5lk/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/dji_fly_20250629_134718_249_1751230115561_photo_optimized_e3sher.jpg'
}) => {
  const location = useLocation();
  const baseUrl = 'https://loyageneralconstruction.com';
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = `${title} | ${COMPANY_NAME}`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Update Open Graph tags
    const ogTags = {
      'og:title': `${title} | ${COMPANY_NAME}`,
      'og:description': description,
      'og:url': currentUrl,
      'og:image': image.startsWith('http') ? image : `${baseUrl}${image}`
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Inject JSON-LD Schema
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    // Comprehensive LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "@id": `${baseUrl}/#organization`,
      "name": COMPANY_NAME,
      "alternateName": "Loya GC",
      "description": "Licensed General B Contractor serving San Diego County. Specializing in ADU construction, home remodeling, bathroom renovations, kitchen renovations, and new construction.",
      "url": baseUrl,
      "telephone": COMPANY_PHONE,
      "email": COMPANY_EMAIL,
      "image": image.startsWith('http') ? image : `${baseUrl}${image}`,
      "logo": `${baseUrl}/images/logo.png`,
      "priceRange": "$$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Check, Credit Card, Financing Available",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Serving San Diego County",
        "addressLocality": CITY_MAIN,
        "addressRegion": "CA",
        "postalCode": "92101",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.7157,
        "longitude": -117.1611
      },
      "areaServed": CITIES_SERVED.map(city => ({
        "@type": "City",
        "name": city,
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      })),
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00"
        }
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": LICENSE_NUMBER,
        "recognizedBy": {
          "@type": "Organization",
          "name": "Contractors State License Board",
          "url": "https://www.cslb.ca.gov"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction Services",
        "itemListElement": SERVICES.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "GeneralContractor",
              "name": COMPANY_NAME
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            }
          },
          "position": index + 1
        }))
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Local Homeowner"
          },
          "reviewBody": "Excellent work on our ADU project. Professional team, on-time completion, and great communication throughout."
        }
      ],
      "slogan": "Building Trust in San Diego",
      "foundingDate": "2015",
      "knowsAbout": [
        "ADU Construction",
        "Home Remodeling",
        "Bathroom Renovation",
        "Kitchen Renovation",
        "Room Additions",
        "New Construction",
        "Concrete Work",
        "Framing",
        "General Contracting"
      ]
    };

    // Additional WebPage schema for better SEO
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": currentUrl,
      "isPartOf": {
        "@type": "WebSite",
        "name": COMPANY_NAME,
        "url": baseUrl
      },
      "about": {
        "@type": "GeneralContractor",
        "name": COMPANY_NAME
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          ...(location.pathname !== '/' ? [{
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": currentUrl
          }] : [])
        ]
      }
    };

    // Combine schemas
    const combinedSchema = [localBusinessSchema, webPageSchema];
    script.textContent = JSON.stringify(combinedSchema);

  }, [title, description, schemaType, location, image, currentUrl]);

  return null; // This component doesn't render UI
};
