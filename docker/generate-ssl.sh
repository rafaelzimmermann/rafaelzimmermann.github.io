#!/bin/sh

# Generate self-signed SSL certificate for local development
# This script runs inside the Docker container

mkdir -p /etc/nginx/ssl

if [ ! -f /etc/nginx/ssl/cert.pem ]; then
    echo "Generating self-signed SSL certificate..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/nginx/ssl/key.pem \
        -out /etc/nginx/ssl/cert.pem \
        -subj "/C=ES/ST=Valencia/L=Valencia/O=Rafael Zimmermann/CN=localhost"
    echo "SSL certificate generated successfully!"
else
    echo "SSL certificate already exists."
fi
