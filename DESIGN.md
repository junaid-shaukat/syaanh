---
name: Service Excellence System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3f484b'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#6f797b'
  outline-variant: '#bec8cb'
  surface-tint: '#136875'
  primary: '#004751'
  on-primary: '#ffffff'
  primary-container: '#00606d'
  on-primary-container: '#91d8e7'
  inverse-primary: '#8ad2e0'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fed665'
  on-secondary-container: '#755c00'
  tertiary: '#004a10'
  on-tertiary: '#ffffff'
  tertiary-container: '#006519'
  on-tertiary-container: '#88e084'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a6eefd'
  primary-fixed-dim: '#8ad2e0'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e59'
  secondary-fixed: '#ffe08e'
  secondary-fixed-dim: '#e9c254'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#9ef799'
  tertiary-fixed-dim: '#83da7f'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005313'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style

The design system is engineered for a home maintenance and repair ecosystem where trust, reliability, and speed are paramount. The brand personality is that of a "dependable expert"—professional and systematic, yet accessible to homeowners in high-stress situations.

The visual direction follows a **Corporate / Modern** aesthetic with a strong emphasis on **Minimalism**. By utilizing a sophisticated light interface, the UI prioritizes clarity, transparency, and ease of use, ensuring information is easily digestible. The design maintains a "utility-first" mindset, ensuring that every element serves a functional purpose while feeling secure and authoritative. The interface should feel like a high-end tool: precise, responsive, and uncluttered.

## Colors

The palette is optimized for a **light environment**, anchored by a Deep Teal primary color that evokes professionalism and technical proficiency.

- **Primary (Deep Teal):** Used for navigation, primary branding, and indicating "active" states. It provides a calm, trustworthy anchor against light surfaces.
- **Secondary (High-contrast Yellow):** Reserved strictly for primary calls to action (CTAs) and conversion triggers. It provides exceptional visibility and "pop" against light backgrounds.
- **Tertiary (Green):** Specifically for "Completed" statuses and "Verified" professional badges.
- **Neutral:** A range of soft grays and off-whites that provide depth and hierarchy, ensuring high legibility for text.

Functional colors for error states use a classic crimson to ensure immediate recognition of issues or required field validations in any lighting setting.

## Typography

This design system uses **Manrope** exclusively to maintain a modern, geometric, and highly legible appearance across all platforms. 

**Headlines** utilize heavy weights with slight negative letter-spacing to project authority and structural strength. **Body text** is optimized at 16px for universal readability. In light mode, font weights are standard to ensure crisp rendering and high contrast against white or light gray surfaces.

For mobile devices, headlines scale down to ensure they don't break awkwardly on narrow viewports while maintaining their visual weight. In RTL (Arabic) contexts, line-height should be increased by approximately 10% to accommodate the specific vertical requirements of the script.

## Layout & Spacing

The system follows a strict **8px grid**, ensuring that all padding, margins, and component heights are multiples of 8. This creates a rhythmic, predictable layout that feels engineered and trustworthy.

- **Desktop:** 12-column fluid grid, maximum container width of 1200px with 40px outer margins.
- **Mobile:** 4-column fluid grid with 16px outer margins. 

Layouts must be fully reversible for RTL support. Use logical properties for padding and margins (inline-start/inline-end) to facilitate this. Mobile layouts prioritize a 48px minimum touch target height for all interactive elements to ensure ease of use during high-stress maintenance emergencies.

## Elevation & Depth

Hierarchy is communicated through **Tonal Layers** and subtle luminosity. In this light theme, elevation is represented by surfaces appearing to lift off the background through subtle shadows or borders.

- **Level 0 (Background):** The base background layer (`#ffffff` or equivalent light neutral).
- **Level 1 (Cards/Containers):** Defined by a slightly darker surface container color or a very subtle 1px border to separate content blocks.
- **Level 2 (Active/Hover):** Interactive elements use a subtle soft shadow and a slight tonal shift to provide tactile feedback.
- **Level 3 (Modals/Drawers):** Overlays use more pronounced diffused shadows to appear physically lifted, often accompanied by a backdrop blur on the layers below to maintain context.

## Shapes

The shape language is **Rounded (Level 2)**, striking a balance between industrial precision and modern approachability.

- **Standard Components:** Buttons and Input fields use a 0.5rem (8px) radius.
- **Large Containers:** Cards and Modals use a 1rem (16px) radius.
- **Utility Elements:** Smaller chips or notification badges may use a "Soft" 0.25rem (4px) radius if space is at a premium.

This consistency in corner treatment reinforces the systematic nature of the home repair ecosystem.

## Components

### Buttons
- **Primary CTA:** High-contrast Yellow (`#fad262`) with dark text. Used exclusively for "Book Now" or "Submit Request."
- **Secondary:** Deep Teal (`#00606d`) with white text. Used for general navigation and exploration.
- **Outline:** Teal border with transparent background for less critical actions like "View History."

### Input Fields
Inputs feature a light surface background with a crisp border. On focus, the border transitions to Primary Teal with a subtle 2px glow to ensure clear interactive state visibility.

### Cards
Service cards must be clean, utilizing `headline-md` for titles. They should feature Level 1 elevation (subtle borders or light backgrounds), transitioning to Level 2 on hover to signify interactivity.

### Status Chips
Status indicators use a tinted background system:
- **Pending:** Soft yellow background with dark text.
- **Active:** Teal background with white text.
- **Completed:** Green background with white text.

### Navigation & RTL
All icons (such as chevrons or progress arrows) must be mirrored in RTL mode. Bottom navigation on mobile is preferred for repair tracking, featuring large icons and `label-sm` text.