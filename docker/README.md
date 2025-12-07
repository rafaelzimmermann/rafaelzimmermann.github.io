# Docker Setup

This directory contains Docker configuration files for running the resume website locally with nginx and SSL support.

## Files

- **Dockerfile** - Multi-stage build for nginx with SSL support
- **nginx.conf** - Custom nginx configuration with SSL and security headers
- **generate-ssl.sh** - Auto-generates self-signed SSL certificate on container startup

## Quick Start

From the project root directory:

```bash
# Start the container
docker compose up -d

# View logs
docker compose logs -f

# Stop the container
docker compose down
```

## Access the Website

- **HTTP**: http://localhost:3000 (redirects to HTTPS)
- **HTTPS**: https://localhost:3443

## SSL Certificate

A self-signed SSL certificate is automatically generated on first startup. The certificate is valid for 365 days and includes:

- Country: ES (Spain)
- State: Valencia
- Locality: Valencia
- Organization: Rafael Zimmermann
- Common Name: localhost

Your browser will show a security warning. This is expected for self-signed certificates. Click "Advanced" → "Proceed to localhost".

## Hot Reload

The docker-compose.yml mounts the following files as volumes for instant updates:

- index.html
- style.css
- script.js
- assets/

Simply save your changes and refresh the browser. No rebuild required!

## Manual Build

```bash
# Build the image
docker build -f docker/Dockerfile -t rafael-resume .

# Run with SSL
docker run -p 3000:80 -p 3443:443 rafael-resume

# Run in background
docker run -d -p 3000:80 -p 3443:443 --name rafael-resume rafael-resume
```

## Nginx Configuration

The nginx configuration includes:

- ✅ HTTP to HTTPS redirect
- ✅ SSL/TLS 1.2 and 1.3
- ✅ Gzip compression
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ Static asset caching
- ✅ Hidden file protection

## Troubleshooting

### Port Already in Use

If you see "port is already allocated":

```bash
# Check what's using the port
ss -tuln | grep 3000

# Or use different ports in docker-compose.yml
ports:
  - "8000:80"
  - "8443:443"
```

### SSL Certificate Issues

To regenerate the certificate:

```bash
# Remove the container
docker compose down

# Remove the volume (if using named volumes)
docker volume prune

# Rebuild and restart
docker compose up -d --build
```

### View Nginx Logs

```bash
docker compose logs nginx

# Or enter the container
docker compose exec resume-website sh
cat /var/log/nginx/access.log
cat /var/log/nginx/error.log
```
