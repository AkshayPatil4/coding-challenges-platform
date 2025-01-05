# Stage 1: Build the Angular application
FROM node:16 as build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json /app/
RUN npm install

# Copy the source code and build the Angular app
COPY . /app
RUN npm run build --prod

# Stage 2: Serve the Angular app
FROM nginx:alpine

# Copy the Angular build output to the Nginx HTML folder
COPY --from=build /app/dist/coding-challenges-platform /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
