# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /cao_jiale_ui_garden

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Install 'serve' globally
RUN npm install -g serve

# Set the working directory
WORKDIR /cao_jiale_ui_garden

# Copy the build files from the previous stage
COPY --from=build /cao_jiale_ui_garden/dist ./dist

# Expose port 8083
EXPOSE 8083

# Use 'serve' to serve the application
CMD ["serve", "-s", "dist", "-l", "8083"]
