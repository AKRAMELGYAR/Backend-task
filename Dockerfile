# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy environment file from config
COPY config/.env ./config/.env

# Build the NestJS app
RUN npm run build

# Expose the port (matches .env)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
