# Use Node.js for building the app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy the build files to Nginx's HTML directory
COPY --from=build /app/out /usr/share/nginx/html

# Expose the port
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
