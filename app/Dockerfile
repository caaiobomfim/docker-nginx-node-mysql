FROM node:15

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install express --save && \
    npm install mysql --save

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]