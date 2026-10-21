import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { retreatData } from "../../data/retreatData";

export interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
  schemaType?: "LodgingBusiness" | "Hotel" | "AboutPage" | "ContactPage" | "CollectionPage";
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage = "/images/hero.jpg",
  canonicalUrl,
  schemaType = "LodgingBusiness"
}) => {
  const location = useLocation();

  const defaultTitle = `${retreatData.property.name} | Boutique Mountain Retreat | Morni Hills, Haryana`;
  const pageTitle = title ? `${title} | ${retreatData.property.name}` : defaultTitle;
  const pageDescription =
    description ||
    `Stay, Explore, Repeat! An intimate 2BHK boutique mountain sanctuary at 1,220m elevation in Bhoj Darara, Morni Hills, Haryana. Managed by Pratham Hospitality Services.`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = pageTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", pageDescription);

    // 3. Update OpenGraph Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateOrCreateMeta("og:title", pageTitle);
    updateOrCreateMeta("og:description", pageDescription);
    updateOrCreateMeta("og:image", ogImage);
    updateOrCreateMeta("og:url", canonicalUrl || window.location.href);
    updateOrCreateMeta("og:type", "website");

    // 4. Update Twitter Card Tags
    const updateOrCreateTwitter = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateOrCreateTwitter("twitter:card", "summary_large_image");
    updateOrCreateTwitter("twitter:title", pageTitle);
    updateOrCreateTwitter("twitter:description", pageDescription);
    updateOrCreateTwitter("twitter:image", ogImage);

    // 5. Update Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl || window.location.href);

    // 6. Inject or Update JSON-LD Structured Data
    let scriptTag = document.getElementById("structured-data-jsonld") as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "structured-data-jsonld";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": schemaType,
          "@id": "https://mornisinghs.com/#lodging",
          "name": "Morni Singh's",
          "alternateName": "Morni Singh's 2BHK Villa",
          "slogan": retreatData.property.tagline,
          "description": pageDescription,
          "url": "https://mornisinghs.com",
          "telephone": retreatData.property.contact.phone.replace(/\s+/g, ""),
          "email": retreatData.property.contact.email,
          "checkinTime": retreatData.property.timings.checkIn,
          "checkoutTime": retreatData.property.timings.checkOut,
          "petsAllowed": "True",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bhoj Darara",
            "addressLocality": "Morni Hills",
            "addressRegion": "Haryana",
            "postalCode": "134205",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.69",
            "longitude": "77.08",
            "elevation": retreatData.property.elevation
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": retreatData.property.rating.score,
            "reviewCount": "15"
          },
          "parentOrganization": {
            "@type": "Organization",
            "name": retreatData.property.management.companyName,
            "url": retreatData.property.management.website
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mornisinghs.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": title || "Morni Singh's",
              "item": canonicalUrl || window.location.href
            }
          ]
        }
      ]
    };

    scriptTag.text = JSON.stringify(structuredData);
  }, [title, pageTitle, pageDescription, ogImage, canonicalUrl, schemaType, location.pathname]);

  return null;
};
