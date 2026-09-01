# IIST SEMICON 2026 Mobile Guide

A multilingual, mobile-first exhibition guide for the `semicon26` branch.
The interface behaves like a lightweight phone application: visitors land on a
grid menu, choose a focused topic, keep persistent bottom navigation, and can
open a prepared email to IIST from any screen.

## Screens

- `index.html` — app dashboard, language selection, and email shortcuts
- `pages/demo.html` — SoundLungs live-demo flow
- `pages/products.html` — USB key, secure IC/module, and IP paths
- `pages/technology.html` — Dynamic PUF and multiple roots of trust
- `pages/use-cases.html` — semiconductor, embedded, access, PQC, and C2PA uses
- `pages/audiences.html` — IC design, OEM/ODM/integrator, and investor paths
- `pages/sources.html` — official NIST, FIDO Alliance, W3C, and C2PA links

## Languages

English, Traditional Chinese, and Japanese are selected from the app header or
the dashboard. The choice is stored in the visitor's browser and reused across
all screens.

## Publishing

The site is plain static HTML, CSS, and JavaScript. Configure GitHub Pages to
publish the root of the `semicon26` branch; no build step is required.

## Claim controls

`PRESENTATION_AI_BRIEF.md` remains the source of truth for the SoundLungs demo,
standards language, implementation boundaries, and prohibited claims. Product
capabilities and certification scope depend on the named configuration.
## Asset provenance

### SoundLungs website assets

The SoundLungs demo page is based on `PRESENTATION_AI_BRIEF.md`.

Brochure-derived assets were extracted without alteration from `MKT_IIST_CompanyBrochure_EN-ZH_2025-07_v1.pptx`:

- `assets/brochure-dynamic-puf-platform.png` (PowerPoint media `image43.png`)
- `assets/brochure-sase-chip.jpeg` (PowerPoint media `image55.jpeg`)
- `assets/brochure-secure-module.jpeg` (PowerPoint media `image56.jpeg`)
- `assets/brochure-multiple-root-keys.png` (PowerPoint media `image72.png`)

The two `assets/soundlungs-*.png` files are scenario infographics created specifically for this demo page. They explain the verified end-to-end path and the unsafe path that would exist without the enrolled hardware root-of-trust policy.
