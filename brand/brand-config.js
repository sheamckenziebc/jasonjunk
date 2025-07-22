// BRANDBOT: SINGLE SOURCE OF BRAND TRUTH
// All brand data for Jason's Junk Hauling lives here. Do not hard-code brand strings/colors elsewhere.
// This file enables rapid re-skinning for future client transformations.

export const BRAND = {
  // Company Identity
  companyName: "Jason's Junk Hauling",
  shortName: "Jason's Junk",
  legalName: "Jason's Junk Hauling Ltd.",
  tagline: "Fast, Reliable Junk Removal & Hauling Services",
  
  // Domain Configuration
  primaryDomain: "jasonsjunkhauling.ca",
  altDomains: ["www.jasonsjunkhauling.ca"],
  
  // Contact Information
  primaryPhoneDisplay: "(250) 555-0200", // TODO: Update with actual phone
  primaryPhoneDial: "+12505550200",
  primaryEmail: "info@jasonsjunkhauling.ca", // TODO: Update with actual email
  
  // Service Area
  serviceArea: ["Greater Victoria", "South Vancouver Island", "Gulf Islands"],
  primaryLocation: "Victoria, BC",
  
  // Address (TODO: Get actual business address)
  addressLines: [
    "<<<Street>>>", // TODO: Replace with actual address
    "Victoria, BC",
    "<<<Postal>>>" // TODO: Replace with actual postal code
  ],
  
  // Color system: high-visibility junk/demo orange + dark charcoal + recycling green accent
  colours: {
    primary: "#F97316",      // Safety orange
    secondary: "#16A34A",    // Recycling green accent
    accent: "#EA580C",       // Darker orange for hover states
    neutralDark: "#1E1E1E",  // Dark charcoal
    neutralLight: "#F9FAFB", // Light gray
    success: "#059669",      // Green for success states
    warning: "#D97706",      // Orange for warnings
  },
  
  // Logo & Asset Paths
  logoPaths: {
    full: "/images/jjh-logo-full.svg",      // TODO: Replace when new logo ready
    mark: "/images/jjh-mark.svg",           // TODO: Replace when new logo ready
    favicon: "/images/jjh-favicon.png",     // TODO: Replace when new logo ready
    headerLogo: "/images/jjh-header-logo.png" // TODO: Replace when new logo ready
  },
  
  // Social Media (Currently disabled per user request)
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    // All social links removed per user request
  },
  
  // Services Configuration
  services: {
    primary: [
      "Residential Junk Removal",
      "Contractor & Renovation Debris", 
      "Light Demolition",
      "Yard Waste Removal",
      "Appliance & Furniture Removal",
      "Dump Runs"
    ],
    categories: {
      residential: "Residential Services",
      commercial: "Commercial Services", 
      emergency: "Same-Day Pickup"
    }
  },
  
  // Business Information
  businessInfo: {
    founded: null, // TODO: Add founding year if known
    yearsInBusiness: null, // TODO: Calculate from founding year
    serviceRadius: "Greater Victoria Area",
    emergencyService: true, // Same-day pickup available
    licensed: true, // Assumed for professional service
    insured: true   // Assumed for professional service
  },
  
  // SEO & Meta Configuration  
  seo: {
    defaultTitle: "Jason's Junk Hauling - Fast Junk Removal & Hauling Services Victoria BC",
    defaultDescription: "Professional junk removal and hauling services serving Victoria and South Vancouver Island. Same-day pickup, competitive pricing, licensed and insured.",
    keywords: ["junk removal", "hauling", "Victoria BC", "junk pickup", "residential junk", "commercial hauling", "same-day pickup"],
    locale: "en_CA",
    region: "BC",
    placename: "Victoria"
  },

  // Form endpoint for contact forms
  formEndpoint: "", // TODO: Add Formspree/Getform URL
};

// Validation function to ensure all required brand elements are configured
export function validateBrandConfig() {
  const errors = [];
  
  if (!BRAND.companyName) errors.push("Company name is required");
  if (!BRAND.primaryPhoneDisplay) errors.push("Primary phone is required");
  if (!BRAND.primaryEmail) errors.push("Primary email is required");
  if (!BRAND.primaryDomain) errors.push("Primary domain is required");
  
  if (errors.length > 0) {
    console.warn("Brand configuration incomplete:", errors);
    return false;
  }
  
  return true;
}

// Helper functions for common brand operations
export const brandHelpers = {
  // Format phone number for different contexts
  formatPhone: (context = "display") => {
    switch(context) {
      case "tel": return BRAND.primaryPhoneDial;
      case "display": return BRAND.primaryPhoneDisplay;
      case "plain": return BRAND.primaryPhoneDisplay.replace(/[^\d]/g, "");
      default: return BRAND.primaryPhoneDisplay;
    }
  },
  
  // Get full company name with legal suffix
  getFullLegalName: () => BRAND.legalName,
  
  // Get service area as formatted string
  getServiceAreaString: () => BRAND.serviceArea.join(" & "),
  
  // Get primary domain with protocol
  getFullDomain: (protocol = "https") => `${protocol}://${BRAND.primaryDomain}`,
  
  // Generate contact mailto link
  getMailtoLink: (subject = "") => {
    const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    return `mailto:${BRAND.primaryEmail}${subjectParam}`;
  }
};

// Development helper - log brand configuration
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  console.log("🎨 Brand Configuration Loaded:", BRAND);
  validateBrandConfig();
} 