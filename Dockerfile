FROM node:23-alpine

WORKDIR /work

COPY package.json ./
RUN npm install

CMD ["npm", "run", "test"]
