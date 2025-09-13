# Personal Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio sites like Linear, Notion, and contemporary design portfolios. Focus on clean minimalism with purposeful use of space and subtle interactive elements.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Dark mode: 15 15% 10% (rich dark background)
- Light mode: 0 0% 98% (clean white background)
- Text primary: 220 13% 91% (dark mode) / 220 9% 15% (light mode)
- Accent: 220 91% 65% (professional blue for CTAs and links)

**Supporting Colors:**
- Card backgrounds: 220 13% 14% (dark mode) / 0 0% 100% (light mode)
- Borders: 220 13% 20% (dark mode) / 220 13% 91% (light mode)
- Muted text: 220 9% 60%

### Typography
- **Primary**: Inter (Google Fonts) - clean, professional, excellent readability
- **Display**: For hero section name/title - Inter with increased font-weight
- **Hierarchy**: h1 (3xl-4xl), h2 (2xl-3xl), h3 (xl), body (base), small (sm)

### Layout System
**Spacing Units**: Consistently use Tailwind spacing: 2, 4, 6, 8, 12, 16, 24
- Component margins: 8, 12, 16
- Section padding: 16, 24
- Card padding: 6, 8

### Component Library

**Navigation:**
- Fixed header with backdrop blur effect
- Clean typography-based logo
- Smooth scroll navigation with active state indicators

**Hero Section:**
- Full viewport height with centered content
- Professional headshot (circular, 200px diameter)
- Large typography hierarchy for name and tagline
- Primary CTA button with hover states

**Cards & Containers:**
- Subtle borders and shadows
- Rounded corners (lg: 12px)
- Hover lift effects (translate-y-1 with shadow changes)

**Projects Grid:**
- 3-column desktop, 2-column tablet, 1-column mobile
- Project cards with image thumbnails
- Tech stack tags with subtle backgrounds
- GitHub/live link buttons

**Skills Section:**
- Icon-based skill display using Heroicons
- Clean grid layout with skill names and visual indicators
- No progress bars - use simple present/proficient categorization

**Forms:**
- Clean input styling with focus states
- Proper form validation styling
- Submit button matching primary accent color

### Animations
**Subtle and Professional:**
- Fade-in on scroll (0.3s ease-out)
- Slide-up animations for cards (0.4s ease-out, 20px transform)
- Hover effects: scale(1.02) for cards, translateY(-2px) for buttons
- Smooth scrolling navigation
- Loading states for form submission

## Images
- **Hero Image**: Professional headshot - circular crop, high quality, well-lit portrait
- **Project Thumbnails**: Clean mockups or screenshots of work, consistent aspect ratio (16:9 or 4:3)
- **No large hero background image** - focus on typography and clean layout

## Mobile Responsiveness
- Mobile-first approach
- Collapsible hamburger menu for navigation
- Single-column layouts on mobile
- Touch-friendly button sizes (minimum 44px)
- Optimized typography scaling

## Key Interactions
- Smooth scroll navigation between sections
- Project card hover effects revealing additional information
- Form validation with inline feedback
- Social link hover animations
- Subtle parallax scrolling (very minimal)

This design emphasizes professionalism, readability, and clean aesthetics while maintaining strong visual hierarchy and user experience principles.