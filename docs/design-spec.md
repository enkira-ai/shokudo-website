# Shokudo Japanese Restaurant — Design Spec

**Restaurant:** Shokudo  
**Address:** 1855 Route 57, Hackettstown, NJ 07840  
**Stack:** Next.js (App Router), Tailwind CSS  
**Approach:** Mobile-first, warm Japanese aesthetic

---

## 1. Color Palette

| Role | Name | Hex |
|------|------|-----|
| Primary | Sumi Black | `#1C1C1E` |
| Secondary | Akane Red | `#C0392B` |
| Accent | Kome Cream | `#F5ECD7` |
| Warm Background | Washi White | `#FAF6EF` |
| Highlight | Bamboo Green | `#5C8A4A` |
| Muted Text | Ash Gray | `#6B6B6B` |
| Border / Divider | Warm Sand | `#E0D5C5` |

**Usage:**
- Background: `#FAF6EF` (Washi White) — evokes Japanese paper, warm and inviting
- Hero overlay gradient: `rgba(28,28,30,0.55)` over full-bleed photo
- CTAs: `#C0392B` (Akane Red) on white, or white on red
- Section accents: thin `#E0D5C5` borders, `#5C8A4A` for freshness/nature

---

## 2. Typography

All fonts from **Google Fonts**.

| Role | Font | Weight | Size (mobile → desktop) |
|------|------|--------|--------------------------|
| Display / Hero | Shippori Mincho | 700 | 2.5rem → 4rem |
| Section Headings | Shippori Mincho | 600 | 1.75rem → 2.5rem |
| Body | Noto Sans JP | 400 | 1rem / 1.6 line-height |
| UI Labels / Nav | Noto Sans JP | 500 | 0.875rem |
| Accent / Tagline | Cormorant Garamond | 400 italic | 1.125rem → 1.375rem |

**Rationale:** Shippori Mincho provides authentic Japanese serif character for headings. Noto Sans JP ensures full CJK-compatible readability. Cormorant Garamond adds elegance for the tagline.

---

## 3. Component Breakdown & Mobile-First Wireframes

### 3.1 Navigation Bar

**Behavior:** Sticky top nav; transparent over hero, solid `#1C1C1E` on scroll.

```
[Mobile]
┌─────────────────────────────────┐
│ 食堂 SHOKUDO        ☰ (menu)  │
└─────────────────────────────────┘

[Desktop]
┌──────────────────────────────────────────────────────┐
│  食堂 SHOKUDO    Menu  Gallery  Location  Order Now  │
└──────────────────────────────────────────────────────┘
```

**Elements:**
- Logo: Kanji "食堂" + "SHOKUDO" wordmark in Shippori Mincho
- Mobile: hamburger → full-screen overlay menu
- Desktop: horizontal nav links + prominent "Order Now" CTA button (red)

---

### 3.2 Hero Section

**Purpose:** Immediate visual impact; full-bleed restaurant/food photography.

```
[Mobile]
┌─────────────────────────────────┐
│                                 │
│  [Full-bleed ramen photo]       │
│                                 │
│       食堂 SHOKUDO              │
│  "Ramen & Japanese Cuisine"     │
│   Hackettstown, NJ              │
│                                 │
│  [ Order Online ]  [ View Menu ]│
└─────────────────────────────────┘

[Desktop]
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [Full-bleed hero — 100vh, parallax scroll]          │
│                                                      │
│           食堂 SHOKUDO                               │
│    "Authentic Ramen & Japanese Cuisine"              │
│         Hackettstown, New Jersey                     │
│                                                      │
│    [ Order Online ]        [ View Menu ]             │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- Height: `100svh` mobile, `100vh` desktop
- Image: hero ramen shot with dark overlay gradient `rgba(28,28,30,0.5)`
- CTAs: primary (red filled) = Order Online, secondary (white outlined) = View Menu
- Subtle scroll-down chevron at bottom center

---

### 3.3 Menu Highlights

**Purpose:** Showcase signature dishes; drive appetite and curiosity.

```
[Mobile — vertical scroll cards]
┌─────────────────────────────────┐
│     ── OUR FAVORITES ──         │
│                                 │
│  ┌───────────────────────────┐  │
│  │  [Dish Photo]             │  │
│  │  Tonkotsu Ramen      $16  │  │
│  │  Rich pork broth...       │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  [Dish Photo]             │  │
│  │  Steamed Buns        $10  │  │
│  └───────────────────────────┘  │
│  [ View Full Menu ]             │
└─────────────────────────────────┘

[Desktop — 3-column grid]
┌──────────────────────────────────────────────────────┐
│              ── OUR FAVORITES ──                     │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │[Photo]   │  │[Photo]   │  │[Photo]   │           │
│  │Tonkotsu  │  │Steam Bun │  │Gyoza     │           │
│  │Ramen $16 │  │     $10  │  │      $9  │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                [ View Full Menu ]                    │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- 4–6 featured dishes (cards with image, name, short description, price)
- Card: rounded-2xl, soft drop shadow, hover lift animation on desktop
- "View Full Menu" links to menu page or PDF

---

### 3.4 Online Ordering CTA Banner

**Purpose:** Prominent conversion section; drive online orders.

```
[Mobile]
┌─────────────────────────────────┐
│  ┌─────────────────────────────┐│
│  │  🍜 ORDER ONLINE            ││
│  │  Skip the wait — order      ││
│  │  pickup or delivery online  ││
│  │                             ││
│  │  [ Order Now → ]            ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘

[Desktop — full-width band]
┌──────────────────────────────────────────────────────┐
│  🍜  Ready to order?   Skip the wait.                │
│     Order pickup or delivery online.  [ Order Now ]  │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `#C0392B` (Akane Red) or dark `#1C1C1E`
- Text: white
- CTA button: white background, red text
- Links to **MenuSifu ordering page** (restaurant's existing online ordering system)
- Implementation: `<a href={process.env.NEXT_PUBLIC_ORDER_URL} target="_blank" rel="noopener noreferrer">Order Now</a>`
- Env var: `NEXT_PUBLIC_ORDER_URL=https://www.menusifu.com/shokudo07840`

---

### 3.5 Location & Hours

**Purpose:** Practical info; help customers find and visit.

```
[Mobile — stacked]
┌─────────────────────────────────┐
│  📍 FIND US                     │
│                                 │
│  1855 Route 57                  │
│  Hackettstown, NJ 07840         │
│                                 │
│  ⏰ HOURS                       │
│  Mon–Thu  11am – 9pm            │
│  Fri–Sat  11am – 10pm           │
│  Sunday   12pm – 9pm            │
│                                 │
│  [ Get Directions ]             │
│                                 │
│  [Google Maps embed]            │
└─────────────────────────────────┘

[Desktop — 2-column]
┌──────────────────────────────────────────────────────┐
│  📍 Location & Hours                                 │
│  ┌─────────────────────┐  ┌────────────────────────┐ │
│  │ 1855 Route 57       │  │  [Google Maps embed]   │ │
│  │ Hackettstown NJ     │  │                        │ │
│  │                     │  │                        │ │
│  │ Mon–Thu 11am–9pm    │  │                        │ │
│  │ Fri–Sat 11am–10pm   │  │                        │ │
│  │ Sun     12pm–9pm    │  │                        │ │
│  │                     │  │                        │ │
│  │ [ Get Directions ]  │  │                        │ │
│  └─────────────────────┘  └────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

**Specs:**
- Embedded Google Maps iframe (responsive, rounded corners)
- "Get Directions": `https://maps.google.com/?q=1855+Route+57+Hackettstown+NJ+07840`
- Hours in JSON-LD structured data for SEO

---

### 3.6 Contact Section

```
[Mobile]
┌─────────────────────────────────┐
│  📞 CONTACT US                  │
│                                 │
│  Phone: (908) XXX-XXXX          │
│  Email: info@shokudo07840.com   │
│                                 │
│  ┌─────────────────────────────┐│
│  │ Name                        ││
│  │ Email                       ││
│  │ Message                     ││
│  │            [ Send Message ] ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
```

**Specs:**
- Contact form (Name, Email, Message) — Next.js Server Action
- Phone: `tel:` link; Email: `mailto:` link
- Social links: Instagram, Facebook icons

---

### 3.7 Footer

```
[Mobile]
┌─────────────────────────────────┐
│  食堂 SHOKUDO                   │
│  1855 Route 57                  │
│  Hackettstown, NJ 07840         │
│                                 │
│  [Instagram] [Facebook]         │
│                                 │
│  © 2025 Shokudo. All rights     │
│  reserved.                      │
└─────────────────────────────────┘
```

---

## 4. Online Ordering Strategy

**Recommendation:** Redirect to existing **MenuSifu** ordering page.

- MenuSifu is Shokudo's current online ordering platform
- New Next.js site should **not** rebuild ordering — link out to MenuSifu
- All "Order Now" / "Order Online" CTAs → `NEXT_PUBLIC_ORDER_URL` env variable
- Use `target="_blank"` + `rel="noopener noreferrer"`

---

## 5. Tailwind Design Tokens

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        sumi: '#1C1C1E',
        akane: '#C0392B',
        kome: '#F5ECD7',
        washi: '#FAF6EF',
        bamboo: '#5C8A4A',
        ash: '#6B6B6B',
        sand: '#E0D5C5',
      },
      fontFamily: {
        mincho: ['Shippori Mincho', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
}
```

---

## 6. Animation & Interaction

- Hero: subtle Ken Burns effect on background photo
- Menu cards: fade-up on scroll (Framer Motion or CSS `@keyframes`)
- Nav: smooth background color transition on scroll
- CTA buttons: `scale(1.03)` on hover
- Page transitions: opacity fade between routes

---

## 7. SEO & Performance

- `next/image` for all photos (WebP, lazy load, blur placeholder)
- JSON-LD: `Restaurant` schema with address, hours, menu URL
- Open Graph image: branded hero shot
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1
- Sitemap via `next-sitemap`
