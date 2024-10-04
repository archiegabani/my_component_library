# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
