# CSL Technologies Website

A multi-page, responsive website for **CSL Technologies (Pty) Ltd**, a South African company that designs, installs and maintains integrated fire and security systems.

Built as part of the WEDE5020 POE project.

**Student:** Mdhluli (ST10521534)


## About the Project

The website presents CSL Technologies as a professional, security-focused company. It explains the company's services, shows examples of its work in a searchable gallery, and gives visitors a clear route to request a quote or contact the team. The aim is to help CSL reach customers and stakeholders more efficiently online.

## Development Stages

The website was built in three stages, each one adding a layer on top of the last.

### Part 1: HTML Structure and Logo

The first stage laid the foundation. Basic HTML pages were created for the home, about, services, contact and quote request content, with headings, paragraphs, lists, links and forms. The CSL logo was added to the header so that every page shares the same branding and navigation.

### Part 2: CSS Styling, Company Colours and Product Imagery

The second stage gave the website its professional identity. A stylesheet (`css/style.css`) was added that follows the CSL Technologies colour scheme: dark charcoal, CSL red and white. A hero background image was applied across all pages, with a transparent black overlay to keep the text readable. Images of the company's products (fire alarm equipment, CCTV cameras and access control) were added to the services pages, and additional information about each service, the company's vision, mission and core values was written into the pages.

### Part 3: JavaScript Interactivity

The third stage made the website interactive. JavaScript was added to:

- validate the contact and quote request forms in the browser and show error messages beside each field
- display a burn animation after a valid form submission
- open and close the mobile navigation menu
- show an interactive map of the head office
- power the gallery, with search, category filters and a lightbox viewer

## Features

- Responsive layout with a mobile navigation menu
- Nine pages covering the company, its services, a gallery, contact details and quote requests
- Interactive map of the head office, built with Leaflet and OpenStreetMap
- Gallery with a lightbox (mouse, keyboard and touch), search, and category filters driven by a JavaScript array
- Frequently asked questions on the Services page, built with native `<details>` elements
- Client-side validation on the Contact and Request a Quote forms, with inline error messages
- SEO basics: unique page titles, meta descriptions and keywords, and descriptive alt text

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home: company introduction and enterprise value proposition |
| `about.html` | Vision, mission, core values and accreditations |
| `services.html` | Overview of services, with an FAQ |
| `fireAlarmSystems.html` | Fire protection and detection service page |
| `cctvSystems.html` | CCTV surveillance service page |
| `accessControl.html` | Access control service page |
| `gallery.html` | Searchable, filterable gallery with a lightbox |
| `contact.html` | Contact details, office map and contact form |
| `requestaQuote.html` | Quote request form |

## Technologies

- HTML5
- CSS3 (Flexbox, Grid and media queries)
- JavaScript (vanilla ES6)
- [Leaflet 1.9.4](https://leafletjs.com/) for the office map
- [OpenStreetMap](https://www.openstreetmap.org/) for map data
- Visual Studio Code

## Colour Scheme

| Colour | Hex | Used for |
|--------|-----|----------|
| Dark charcoal | `#16181D` | Backgrounds, cards and navigation |
| CSL red | `#D62839` | Headings, buttons, borders and accents |
| White | `#FFFFFF` | Body text and contrast |

Transparent black overlays sit over the hero image to improve readability.

## Project Structure

```
Mdhluli_ST10521534_WEDE5020_POE/
├── index.html
├── about.html
├── services.html
├── fireAlarmSystems.html
├── cctvSystems.html
├── accessControl.html
├── gallery.html
├── contact.html
├── requestaQuote.html
├── README.md
├── CHANGELOG.md
├── css/
│   └── style.css
├── js/
│   ├── gallery.js
│   ├── map.js
│   ├── nav.js
│   └── validation.js
└── images/
    ├── accessControl.webp
    ├── accessControl2.webp
    ├── animated-fire-rising-up-t2qdsyysz7z699nq.gif
    ├── cctv.jpg
    ├── CCTV2.webp
    ├── csl-logo.png
    ├── fireAlarmSystem.webp
    ├── hero-image.jpg
    ├── psira.webp
    └── saqcc-fire.png
```

## Running the Project Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/<your-username>/Mdhluli_ST10521534_WEDE5020_POE.git](https://github.com/vum13/Mdhluli_ST10521534_WEDE5020_POE/blob/main/README.md)
   ```
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or right-click it and choose **Open with Live Server**.

The map needs an internet connection to load Leaflet and map tiles. The rest of the site works offline.

## Forms

The Contact and Request a Quote forms check each field in the browser before submission: name, email address, South African phone number, service of interest and message. Error messages appear beside the field that needs attention.

**Known limitation:** the forms do not send emails yet. They need to be connected to a form service such as Formspree, Web3Forms or Netlify Forms.

## Accessibility and SEO

- Every image has descriptive alt text.
- The lightbox closes with the Esc key and moves between images with the arrow keys.
- Each page has a unique title and meta description.

## Accreditation Note

The PSiRA and SAQCC Fire logos are third-party marks. They appear in this project for academic and design purposes only. Before using them on a live commercial site, CSL Technologies must confirm that it holds the relevant registration and permission to display them.

## Known Limitations and To Do

- [ ] Connect the Contact and Request a Quote forms to a submission service
- [ ] Replace the gallery's reference images with photos of completed CSL projects, with client permission
- [ ] Confirm the head office coordinates in `js/map.js`
- [ ] Confirm the year the company was established, and make the About page match the proposal
- [ ] Confirm that the FAQ answers match CSL's actual services

## Changelog

The development history is recorded in [CHANGELOG.md](CHANGELOG.md).

## Image Credits

The hero image and the CSL black logo were created with ChatGPT for this project. The CSL logo image was supplied as part of the project materials.

## References

Private Security Industry Regulatory Authority (PSiRA). Official Website. Available at: https://www.psira.co.za/

SAQCC Fire. Official Website. Available at: https://saqccfire.co.za/

GIFDB. Animated Fire Rising Up GIF. Available at: https://gifdb.com/gif/animated-fire-rising-up-t2qdsyysz7z699nq.html

Rai Technologies. Fire Alarm System. Available at: https://raitech.co.tz/fire-alarm-system

Sandia National Laboratories. Requesting Access (Cleared or Uncleared) for a Visitor -- Security. Available at: https://www.sandia.gov/security/requesting-access-cleared-or-uncleared-for-a-visitor/

iStock. CCTV with night city bokeh background, surveillance camera system for security. Available at: https://www.istockphoto.com/photo/cctv-with-night-city-bokeh-background-surveillance-camera-system-for-security-gm667379864-121762211

S2PHosT. Security Camera - Camera CCTV. Available at: https://s2phost.web.id/security-camera-cctv/

Leaflet. Version 1.9.4. Available at: https://leafletjs.com/

OpenStreetMap contributors. Copyright and Licence. Available at: https://www.openstreetmap.org/copyright

