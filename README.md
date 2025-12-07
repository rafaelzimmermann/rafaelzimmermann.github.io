# Rafael Zimmermann - Professional Resume Website

A modern, responsive single-page resume website built for GitHub Pages. Clean design with smooth animations and professional presentation.

## Features

- Modern, professional design with blue/gray color scheme
- Fully responsive (mobile-first approach)
- Smooth scrolling navigation with active section highlighting
- Animated elements on scroll
- Print-friendly styles
- SEO optimized with meta tags
- Open Graph tags for social media sharing
- Font Awesome icons
- Zero build process - works directly on GitHub Pages

## Structure

```
rafaelzimmermann.github.io/
├── index.html          # Main HTML file with all content
├── style.css           # Modern CSS with flexbox/grid layouts
├── script.js           # Smooth scrolling and animations
└── README.md           # This file
```

## Deployment to GitHub Pages

### Option 1: Via GitHub Web Interface

1. Create a new repository named `rafaelzimmermann.github.io` (or `yourusername.github.io`)
2. Upload the following files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to repository Settings → Pages
4. Under "Source", select the `main` branch
5. Click Save
6. Your site will be live at `https://rafaelzimmermann.github.io`

### Option 2: Via Git Command Line

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add index.html style.css script.js README.md

# Commit files
git commit -m "Initial commit: Professional resume website"

# Add remote repository
git remote add origin https://github.com/rafaelzimmermann/rafaelzimmermann.github.io.git

# Push to GitHub
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select the `main` branch
5. Click "Save"
6. Wait a few minutes for deployment
7. Your site will be available at `https://rafaelzimmermann.github.io`

## Customization

### Adding Company Logos

Company logos are represented by empty div elements with the class `company-logo`. To add actual logos:

1. Locate the `<div class="company-logo" data-company="companyname"></div>` elements in [index.html](index.html)
2. Replace with an image tag or add a background image via CSS:

**Option A: Using an img tag**
```html
<div class="company-logo" data-company="shopify">
    <img src="images/shopify-logo.png" alt="Shopify">
</div>
```

**Option B: Using CSS background**
```css
.company-logo[data-company="shopify"] {
    background-image: url('images/shopify-logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
```

### Updating Content

- Edit [index.html](index.html) to update:
  - Personal information
  - Work experience
  - Skills
  - Education
  - Contact details

### Customizing Colors

Colors are defined as CSS variables in [style.css](style.css). Edit the `:root` section:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --primary-dark: #1e40af;       /* Darker blue */
    --primary-light: #3b82f6;      /* Lighter blue */
    /* ... other colors ... */
}
```

### Customizing Fonts

The site uses Inter font from Google Fonts. To change:

1. Update the Google Fonts link in [index.html](index.html) `<head>` section
2. Update the `--font-primary` variable in [style.css](style.css)

## Sections

The website includes the following sections:

- **Header**: Name, title, location, and contact links
- **About**: Professional summary and core specialties
- **Experience**: Complete work history with timeline
- **Skills**: Technologies and languages organized by category
- **Education**: Academic background and certifications
- **Contact**: Contact methods and location

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies except Font Awesome and Google Fonts
- Lightweight and fast loading
- Optimized animations with CSS transitions
- Intersection Observer API for efficient scroll animations

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images (when added)
- Keyboard navigation support
- High contrast color scheme

## Print Support

The website includes print-specific styles that:
- Remove navigation
- Optimize layout for paper
- Ensure proper page breaks
- Display links with underlines

To print: Use `Ctrl+P` (or `Cmd+P` on Mac) and select "Save as PDF" or print directly.

## Local Development

### Option 1: Docker (Recommended)

The easiest way to test locally with Docker:

```bash
# Using docker compose (recommended)
docker compose up

# Or build and run manually
docker build -f docker/Dockerfile -t rafael-resume .
docker run -p 3000:80 -p 3443:443 rafael-resume
```

Then visit:
- **HTTP**: `http://localhost:3000`
- **HTTPS**: `https://localhost:3443` (self-signed certificate)

**Benefits:**
- Mimics production environment (nginx with SSL)
- Auto-generates self-signed SSL certificate for local development
- Hot reload with volume mounting (docker-compose)
- HTTP automatically redirects to HTTPS
- No local dependencies required

**Note**: Your browser will show a security warning for the self-signed certificate. This is expected for local development. Click "Advanced" and "Proceed to localhost" to continue.

### Option 2: Simple HTTP Server

If you don't have Docker:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000`

### Option 3: Direct File Access

Simply open [index.html](index.html) directly in your browser (some features may not work correctly)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0
- Google Fonts (Inter)

## License

This project is open source and available for personal use.

## Contact

Rafael Zimmermann
- Email: [linkedin@chess.mozmail.com](mailto:linkedin@chess.mozmail.com)
- LinkedIn: [linkedin.com/in/engzimmermann](https://www.linkedin.com/in/engzimmermann)
- Location: Valencia, Spain

---

Built with care for GitHub Pages 🚀
