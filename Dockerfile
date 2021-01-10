FROM node:14-stretch

WORKDIR /root

COPY . .

RUN npm install

RUN npm run build

CMD ["bash", "-c", "NODE_TLS_REJECT_UNAUTHORIZED=0 npm run generate"]