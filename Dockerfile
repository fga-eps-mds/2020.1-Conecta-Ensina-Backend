FROM node:12.18.1

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "start"]
