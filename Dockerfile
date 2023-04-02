FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npx yarn install

RUN npx yarn build

CMD ["npm", "start"]
