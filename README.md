# Rafael Zimmermann - Professional Resume Website

A modern, responsive single-page resume website hosted on GitHub Pages.

## Live Site

Visit: [rafaelzimmermann.com](https://rafaelzimmermann.com)

## Deployment

This repository uses GitHub Pages to automatically deploy the website. Any commits to the `main` branch will be deployed automatically.

## Local Development

### Using Docker

```bash
docker compose up
```

Visit `https://localhost:3443` (accepts self-signed certificate warning)

## Technologies

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- Font Awesome
- System fonts (no external font download)

## License

This project is open source and available for personal use.

## Design and preview

The redesign plan is in [DESIGN.md](DESIGN.md), with a pre-implementation [homepage mockup](design/home-mockup.svg). The homepage, blog and article share `css/style.css` and `js/script.js`.

For a lightweight local preview, run `python3 -m http.server 8765` and visit `http://localhost:8765`. No build step is required.
