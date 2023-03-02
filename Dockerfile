FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV API_URL =http://localhost:3000
EXPOSE 3000
CMD npm start