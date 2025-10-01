# Use official Node.js image as build environment
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the build
FROM nginx:alpine

# Copy build output to nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional, for Vite routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 5173
EXPOSE 5173

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]