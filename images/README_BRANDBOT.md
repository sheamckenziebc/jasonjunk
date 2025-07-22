# BRANDBOT: Asset Requirements for Jason's Junk Hauling

This document lists all required image assets for the Jason's Junk Hauling website transformation.

## 🎨 Logo Assets

### Primary Logo Files
| Asset | Current Path | Dimensions | Usage | Format |
|-------|-------------|------------|-------|---------|
| Main Logo | `/images/jasonlogo.png` | 1.4MB | Header, footer, general branding | PNG |
| Logo Mark | `/images/jasonlogo.png` | 1.4MB | Small spaces, favicons | PNG |
| Header Logo | `/images/jasonlogo.png` | 1.4MB | Website header navigation | PNG |
| Favicon | `/images/jasonlogo.png` | 1.4MB | Browser tab icon | PNG |
| Large Favicon | `/images/jasonlogo.png` | 1.4MB | Mobile app icons | PNG |

### Logo Specifications
- **Color Scheme**: Safety orange (#F97316) primary, recycling green (#16A34A) accent
- **Style**: Professional, modern, suitable for junk removal/hauling industry
- **Formats**: SVG for scalability, PNG for compatibility
- **Background**: Transparent for overlay flexibility

## 📸 Hero & Background Images

| Asset | Current Path | Dimensions | Usage | Notes |
|-------|-------------|------------|-------|-------|
| Main Hero | `/images/jjh-hero-bg.jpg` | 1920x1080px | Homepage hero background | High-quality junk removal truck/equipment |
| About Hero | `/images/jjh-about-hero.jpg` | 1920x600px | About page background | Professional team or equipment |
| Services Hero | `/images/jjh-services-hero.jpg` | 1920x600px | Services page background | Equipment in action |

## 🚛 Service Images

### Core Service Icons/Images
| Service | Asset Path | Dimensions | Description |
|---------|-----------|------------|-------------|
| Residential Junk | `/images/jjh-residential-junk.jpg` | 400x300px | Residential junk removal work |
| Contractor Debris | `/images/jjh-contractor-debris.jpg` | 400x300px | Construction debris removal |
| Light Demolition | `/images/jjh-light-demolition.jpg` | 400x300px | Shed/deck demolition work |
| Yard Waste | `/images/jjh-yard-waste.jpg` | 400x300px | Yard waste removal |
| Appliances | `/images/jjh-appliances.jpg` | 400x300px | Appliance removal |

### Equipment Images
| Equipment | Asset Path | Dimensions | Description |
|-----------|-----------|------------|-------------|
| Junk Removal Truck | `/images/jjh-truck.jpg` | 600x400px | Primary hauling equipment |
| Dump Trailer | `/images/jjh-trailer.jpg` | 600x400px | Secondary hauling equipment |
| Service Vehicle | `/images/jjh-service-vehicle.jpg` | 600x400px | Branded company vehicle |

## 🖼️ Gallery Images

### Project Gallery
Create a `/images/gallery/` directory with:
- **Before & After Shots**: 8-10 images (800x600px each)
- **Residential Projects**: 8-10 images (800x600px each)
- **Commercial Projects**: 8-10 images (800x600px each)
- **Equipment Shots**: 4-6 images (800x600px each)
- **Team Photos**: 2-4 images (800x600px each)

**Naming Convention**: `project-[type]-[number].jpg`
- Example: `project-before-after-01.jpg`, `project-residential-03.jpg`

## 👥 Team & About Images

| Asset | Path | Dimensions | Usage |
|-------|------|------------|-------|
| Team Photo | `/images/jjh-team-photo.jpg` | 800x600px | About page team section |
| Jason Photo | `/images/jjh-jason-portrait.jpg` | 400x400px | About page leadership |
| Company Photo | `/images/jjh-company-overview.jpg` | 1200x800px | About page company story |

## 🎯 Technical Specifications

### Image Quality Standards
- **Resolution**: Minimum 72 DPI for web, 150 DPI for print materials
- **Compression**: Optimize for web (under 200KB for most images)
- **Format Preferences**:
  - **Photos**: JPEG (quality 85-90%)
  - **Graphics/Icons**: PNG (with transparency)
  - **Logos**: SVG (preferred) or PNG

### SEO Considerations
- All images must have descriptive alt text
- File names should be descriptive (no spaces, use hyphens)
- Include relevant keywords naturally in file names

## 🔄 Migration Plan

### Phase 1: Critical Assets (Required for launch)
1. ✅ Main logo (header/footer) - **COMPLETED**
2. ✅ Favicon - **COMPLETED**
3. ⏳ Hero background image
4. ⏳ Core service images (5)

### Phase 2: Enhanced Content
1. Equipment gallery images
2. Project portfolio images
3. Team photography
4. Additional service illustrations

### Phase 3: Marketing Assets
1. Social media graphics (if needed later)
2. Print materials adaptation
3. Vehicle branding alignment

## 📝 Asset Replacement Checklist

When replacing assets, ensure:
- [ ] File paths match the configuration in `brand/brand-config.js`
- [ ] Image dimensions meet specifications
- [ ] Alt text is updated to reflect Jason's Junk content
- [ ] File sizes are optimized for web performance
- [ ] Images reflect the professional, reliable brand identity
- [ ] Equipment and work shown matches Jason's Junk services

## 🔗 Related Files

Assets are referenced in:
- `brand/brand-config.js` - Logo path configuration
- All HTML files - Image sources and alt text
- CSS files - Background image references
- `sitemap.xml` - Thumbnail references

## 📞 Questions?

If you need clarification on any asset requirements or specifications, check the brand configuration in `brand/brand-config.js` for the most current requirements.

---

**Last Updated**: Initial creation during Island Drains → Jason's Junk Hauling transformation
**Maintained By**: BRANDBOT system for easy future re-skinning 