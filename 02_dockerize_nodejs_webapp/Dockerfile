FROM node:10

# Create app dir
WORKDIR /usr/src/app

# Install all dependencies
COPY package*.json ./

RUN npm install

# If building for production use
# RUN npm ci --only=production

# Command to build apps source code
COPY . .

# App binds to port 8080, have it mapped by docker daemon
EXPOSE 8080

# Command to run app
CMD ["node", "server.js"]
