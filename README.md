# Frontend Wizards — Stage 1B: Profile Card

A semantic, accessible, and responsive profile card component built with plain HTML, CSS, and vanilla JavaScript.

## Overview

This project implements a testable profile card that displays user information including name, bio, avatar, social links, hobbies, and dislikes. Every visible element includes `data-testid` attributes for reliable automated testing.

**Live demo:** https://profile-card-amber-theta.vercel.app/  
**Repo:** https://github.com/Drk-codey/Profile-card

## Run locally

```bash
# Clone the repository
git clone <https://github.com/Drk-codey/Profile-card>
cd Profile-card

# Open index.html in your browser.
open index.html        # macOS
start index.html       # Windows
```

## Project Structure

```
Profile-card/
├── index.html       # HTML markup with semantic elements
├── styles.css       # Responsive styling (mobile-first)
├── script.js        # Dynamic time display updates
├── img/             # Avatar image directory
└── README.md        # This file
```

## Key Features

✅ **Semantic HTML** — Uses `<article>`, `<figure>`, `<nav>`, `<section>`, and heading tags  
✅ **Fully Accessible** — WCAG AA compliant colors, alt text, aria-live for updates  
✅ **Responsive Design** — Mobile-first layout with desktop flex arrangement  
✅ **Keyboard Navigation** — All interactive elements are tab-focusable with visible focus styles  
✅ **Testable** — All elements include required `data-testid` attributes  
✅ **Dynamic Time** — Shows current epoch time in milliseconds with live updates

## Accessibility Checklist

- [x] Meaningful alt text for avatar
- [x] Color contrast meets WCAG AA (9.62:1 for links, 12.95:1 for main text)
- [x] All interactive elements have accessible names
- [x] Dynamic time updates use `aria-live="polite"`
- [x] Full keyboard navigation support with visible focus indicators

## Required Elements

| Element | data-testid | Notes |
|---------|----------------|-------|
| Card container | `test-profile-card` | `<article>` |
| User name | `test-user-name` | `<h2>` |
| Biography | `test-user-bio` | `<p>` |
| Avatar | `test-user-avatar` | `<img>` with alt text |
| Current time | `test-user-time` | Updates via `Date.now()` |
| Social links | `test-user-social-links` | `<ul>` in `<nav>` |
| Hobbies | `test-user-hobbies` | `<ul>` in `<section>` |
| Dislikes | `test-user-dislikes` | `<ul>` in `<section>` |

## Responsive Breakpoints

- **Mobile** (< 600px): Vertical stack, centered avatar
- **Desktop** (≥ 600px): Flex row layout, avatar on left, content on right

### Testing & Notes
- All `data-testid` attributes are present for automated testing
- Time updates every 100ms for testing accuracy
- Color contrast verified to meet WCAG AA standards
- Keyboard navigation tested and working
- Responsive design tested across breakpoints

---
Built for Frontend Wizards Stage 1b.

