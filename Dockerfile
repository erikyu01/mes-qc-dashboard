# Use Nginx to serve static files
FROM nginx:stable-alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx files
RUN rm -rf ./*

# Copy built files from local dist/ to Nginx
COPY dist/ .

# Expose port 5173 (or change to 80 if needed)
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
