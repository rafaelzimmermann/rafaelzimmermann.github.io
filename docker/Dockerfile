# Use nginx alpine for a lightweight image
FROM nginx:alpine

# Install openssl for SSL certificate generation
RUN apk add --no-cache openssl

# Copy website files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Fix permissions for nginx to read files
RUN chmod -R 644 /usr/share/nginx/html/* && \
    find /usr/share/nginx/html -type d -exec chmod 755 {} \;

# Copy SSL generation script
COPY docker/generate-ssl.sh /docker-entrypoint.d/10-generate-ssl.sh
RUN chmod +x /docker-entrypoint.d/10-generate-ssl.sh

# Copy custom nginx configuration
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80 443

# Start nginx (SSL cert will be auto-generated via entrypoint script)
CMD ["nginx", "-g", "daemon off;"]
