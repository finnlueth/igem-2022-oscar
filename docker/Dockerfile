FROM node:current-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle App
COPY . .no
ENV PORT = 8080
EXPOSE 8080

# Start App
CMD ["npm", "start"]