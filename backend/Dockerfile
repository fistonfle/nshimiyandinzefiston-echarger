FROM node:alpine

RUN npm install --global nodemon

WORKDIR /user/app

ENV PORT 8000

COPY ./package.json .

RUN npm install

COPY . .

CMD ["npm" ,"start"]

EXPOSE 8000