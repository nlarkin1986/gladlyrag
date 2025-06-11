# Gladly AI Agent Quiz - Comprehensive Style Guide

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Library](#component-library)
6. [Interactive States](#interactive-states)
7. [Animations & Transitions](#animations--transitions)
8. [Icons & Assets](#icons--assets)
9. [Responsive Design](#responsive-design)
10. [Implementation Guide](#implementation-guide)

---

## Brand Identity

### Core Principles
- **Modern & Professional**: Clean, minimal design with purposeful use of space
- **Conversational**: Friendly, approachable UI that mirrors Gladly's customer-centric approach
- **Performance-focused**: Fast, smooth interactions with optimized animations
- **Accessible**: High contrast, readable typography, and proper touch targets

### Design Philosophy
- Rounded corners throughout (pills for buttons, subtle rounds for cards)
- Subtle shadows for depth without heaviness
- Green as the primary accent color representing Gladly's brand
- Light gray background (#f3f3f3) instead of pure white for reduced eye strain

---

## Color System

### Primary Colors
```css
/* Gladly Brand Colors */
--gladly-green: #009B00;        /* Primary brand color */
--gladly-green-hover: #007700;  /* Hover state for green */
--gladly-green-light: #e8f5e9;  /* Light green backgrounds */

/* Background Colors */
--background: #f3f3f3;          /* Main background (hsl: 0 0% 95%) */
--background-white: #ffffff;    /* Card backgrounds */
--background-overlay: rgba(0, 155, 0, 0.05); /* Subtle green overlay */
```

### Neutral Colors
```css
/* Text Colors */
--text-primary: #020617;        /* Main text (slate-950) */
--text-secondary: #64748b;      /* Secondary text (slate-500) */
--text-muted: #94a3b8;         /* Muted text (slate-400) */

/* Gray Scale */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;
```

### Semantic Colors
```css
/* Status Colors */
--success: #10b981;             /* Success states */
--warning: #f59e0b;             /* Warning states */
--error: #ef4444;               /* Error states */
--info: #3b82f6;                /* Info states */

/* Result Colors */
--win-gradient: from-green-50 to-emerald-50;
--tie-gradient: from-blue-50 to-sky-50;
--loss-gradient: from-purple-50 to-violet-50;
```

---

## Typography

### Font Stack
```css
/* Primary Font - Body Text */
font-family: 'Chalet London Nineteen Sky', 'Helvetica Neue', system-ui, -apple-system, sans-serif;

/* Bold Font - Headings & Emphasis */
font-family: 'Chalet New York Nineteen Sixty', 'Helvetica Neue', system-ui, -apple-system, sans-serif;
```

### Type Scale
```css
/* Base font size: 18px for booth readability */

/* Headings */
.text-7xl { font-size: 4.5rem; line-height: 1; }      /* Hero titles */
.text-6xl { font-size: 3.75rem; line-height: 1; }     /* Page titles */
.text-5xl { font-size: 3rem; line-height: 1; }        /* Section titles */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }

/* Body Text */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* Large body */
.text-base { font-size: 1rem; line-height: 1.5rem; }    /* Default body */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* Small text */
.text-xs { font-size: 0.75rem; line-height: 1rem; }     /* Tiny text */
```

### Font Weights
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Buttons, labels
- **Semibold (600)**: Subheadings, emphasis
- **Bold (700)**: Headings, important text

---

## Spacing & Layout

### Spacing Scale
```css
/* Consistent spacing system based on 0.25rem (4px) */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
--spacing-3xl: 6rem;    /* 96px */
```

### Container Widths
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.max-w-7xl { max-width: 80rem; }   /* 1280px */
.max-w-4xl { max-width: 56rem; }   /* 896px */
.max-w-2xl { max-width: 42rem; }   /* 672px */
.max-w-xl { max-width: 36rem; }    /* 576px */
```

### Grid System
- 12-column grid for complex layouts
- Asymmetric layouts: 8-4 split for chat/decision panels
- Consistent gap spacing: gap-4, gap-6, gap-8

---

## Component Library

### Buttons

#### Primary Button
```css
.gladly-button {
  background-color: #009B00;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px; /* fully rounded */
  font-weight: 500;
  transition: all 0.2s;
  min-height: 44px; /* Touch target */
}

.gladly-button:hover {
  background-color: #007700;
  transform: scale(1.05);
}

.gladly-button:active {
  transform: scale(0.98);
}
```

#### Button Variants
- **Default**: Green background, white text
- **Outline**: White background, green border
- **Ghost**: Transparent background, green text on hover
- **Destructive**: Red variant for dangerous actions

#### Button Sizes
- **Small**: h-10 px-4 text-sm
- **Default**: h-12 px-5 py-3 text-base
- **Large**: h-14 px-8 py-4 text-lg

### Cards

```css
.card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid hsl(214.3 31.8% 91.4%);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
```

#### Card Shadows
- **Small**: 0 1px 3px 0 rgb(0 0 0 / 0.1)
- **Medium**: 0 4px 6px -1px rgb(0 0 0 / 0.1)
- **Large**: 0 20px 25px -5px rgb(0 0 0 / 0.1)
- **Extra Large**: 0 25px 50px -12px rgb(0 0 0 / 0.25)

### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s;
}

/* Variants */
.badge-default { background: hsl(210 40% 96.1%); }
.badge-secondary { background: hsl(210 40% 96.1%); }
.badge-success { background: #e8f5e9; color: #009B00; }
```

### Form Elements

#### Input Fields
```css
.input {
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid hsl(214.3 31.8% 91.4%);
  padding: 0 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.input:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #009B00;
  box-shadow: 0 0 0 3px rgba(0, 155, 0, 0.1);
}
```

### Chat Interface

#### Message Bubbles
```css
.message-bubble {
  border-radius: 20px;
  padding: 0.75rem;
  max-width: 80%;
  margin-bottom: 0.5rem;
}

.message-bubble.agent {
  background-color: white;
  margin-left: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.message-bubble.customer {
  background-color: #f3f4f6;
  margin-left: auto;
}
```

---

## Interactive States

### Hover States
- **Buttons**: Scale 1.05, darken background color
- **Cards**: Translate Y -5px, increase shadow
- **Links**: Underline, color change to green
- **Interactive elements**: Cursor pointer, subtle animation

### Focus States
- **Outline**: 2px solid ring with 3px offset
- **Ring color**: #009B00 (Gladly green)
- **Ring opacity**: 0.5 for subtlety

### Active States
- **Buttons**: Scale 0.98
- **Cards**: Slight shadow reduction
- **Form elements**: Border color change

### Disabled States
- **Opacity**: 0.5
- **Cursor**: not-allowed
- **No hover effects**: Transform and transitions disabled

---

## Animations & Transitions

### Timing Functions
```css
/* Standard easing curves */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Animation Durations
- **Instant**: 150ms (hover states)
- **Fast**: 200ms (button clicks)
- **Normal**: 300ms (most transitions)
- **Slow**: 500ms (page transitions)
- **Very slow**: 1000ms (complex animations)

### Predefined Animations

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### Slide In
```css
@keyframes slideInRight {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
```

#### Float
```css
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
```

#### Pulse
```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

#### Shine
```css
@keyframes shine {
  from { background-position: -100px; }
  to { background-position: 200px; }
}
```

#### Confetti
```css
@keyframes confetti-slow {
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  100% { transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg); }
}
```

### Stagger Animations
```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
```

---

## Icons & Assets

### Icon Library
- **Primary**: Lucide React icons
- **Size conventions**: 
  - Small: w-4 h-4 (16px)
  - Default: w-5 h-5 (20px)
  - Large: w-6 h-6 (24px)
  - Extra Large: w-8 h-8 (32px)

### Common Icons
- **Trophy**: Winner/success states
- **Sparkles**: AI/Gladly Sidekick indicator
- **Brain**: Intelligence/quiz
- **RefreshCw**: Retry/play again
- **ArrowRight**: Navigation/continue
- **Check**: Correct answers
- **X**: Incorrect answers

### Logo & Brand Assets
- Gladly logo variations
- Sidekick icon (pending from design team)
- Custom font files (Chalet family)

---

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Mobile Optimizations
- **Touch targets**: Minimum 44px height/width
- **Font sizes**: Base 18px for readability
- **Spacing**: Increased padding on mobile
- **Layout**: Stack elements vertically on small screens

### Responsive Patterns
```css
/* Text sizing */
.text-5xl md:text-7xl  /* Larger on desktop */

/* Spacing */
.p-4 md:p-8  /* More padding on desktop */

/* Grid layouts */
.grid-cols-1 lg:grid-cols-12  /* Single column mobile, 12 on desktop */

/* Visibility */
.hidden md:block  /* Hide on mobile, show on desktop */
```

---

## Implementation Guide

### Getting Started

1. **Install Dependencies**
   ```bash
   npm install tailwindcss @radix-ui/react-slot class-variance-authority clsx tailwind-merge
   ```

2. **Configure Tailwind**
   - Copy the provided `tailwind.config.ts`
   - Include custom colors and fonts
   - Add animation plugins

3. **Set Up Fonts**
   - Add font files to `/public/fonts/`
   - Include @font-face declarations in CSS
   - Configure font families in Tailwind

4. **Import Base Styles**
   - Copy `index.css` with all custom animations
   - Include utility classes
   - Set up CSS variables

### Component Structure

```tsx
// Example component using the style guide
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MyComponent = ({ className, ...props }) => {
  return (
    <Card className={cn(
      "p-6 hover:shadow-xl transition-all duration-300",
      className
    )}>
      <h2 className="text-2xl font-bold mb-4">Title</h2>
      <p className="text-gray-600 mb-6">Description text</p>
      <Button className="gladly-button">
        Call to Action
      </Button>
    </Card>
  );
};
```

### CSS Architecture

1. **Utility-First**: Use Tailwind classes primarily
2. **Component Classes**: Create semantic classes for repeated patterns
3. **Custom Properties**: Use CSS variables for dynamic values
4. **Scoped Animations**: Keep animations in dedicated keyframe blocks

### Performance Considerations

1. **Optimize Animations**
   - Use `transform` and `opacity` for animations
   - Avoid animating layout properties
   - Use `will-change` sparingly

2. **Reduce Bundle Size**
   - Purge unused CSS with Tailwind
   - Lazy load heavy components
   - Optimize font loading with `font-display: swap`

3. **Accessibility**
   - Respect `prefers-reduced-motion`
   - Ensure color contrast ratios
   - Provide focus indicators

### Testing Checklist

- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (iOS, Android)
- [ ] Touch interactions on tablets
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Performance metrics (LCP, FID, CLS)
- [ ] Dark mode support (if applicable)

---

## Code Examples

### Complete Button Component
```tsx
const GladlyButton = ({ 
  children, 
  variant = "default", 
  size = "default",
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-full font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[#009B00] focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "button-scale", // Custom hover animation
        {
          // Variants
          "bg-[#009B00] text-white hover:bg-[#007700]": variant === "default",
          "bg-white text-[#009B00] border-2 border-[#009B00] hover:bg-gray-50": variant === "outline",
          "bg-transparent text-gray-700 hover:bg-gray-100": variant === "ghost",
          
          // Sizes
          "h-10 px-4 text-sm": size === "sm",
          "h-12 px-6 text-base": size === "default",
          "h-14 px-8 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Animated Card Component
```tsx
const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.34, 1.56, 0.64, 1] // Spring easing
      }}
      whileHover={{ y: -5 }}
      className="card card-3d-effect"
    >
      {children}
    </motion.div>
  );
};
```

### Responsive Layout Pattern
```tsx
const ResponsiveLayout = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Mobile: Stack, Desktop: Side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main content - 8 columns on desktop */}
        <div className="lg:col-span-8">
          <Card className="h-full">
            {/* Content */}
          </Card>
        </div>
        
        {/* Sidebar - 4 columns on desktop */}
        <div className="lg:col-span-4">
          <Card className="sticky top-4">
            {/* Sidebar content */}
          </Card>
        </div>
      </div>
    </div>
  );
};
```

---

## Maintenance & Updates

### Version Control
- Document all style changes in CHANGELOG
- Use semantic versioning for style guide updates
- Keep backwards compatibility when possible

### Style Guide Evolution
- Regular reviews with design team
- A/B testing for major changes
- User feedback incorporation
- Performance monitoring

### Documentation
- Keep code examples up to date
- Add new patterns as they emerge
- Document breaking changes
- Maintain accessibility guidelines

---

This style guide is a living document and should be updated as the design system evolves. For questions or suggestions, please contact the design team.