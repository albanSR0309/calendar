FROM node:12

WORKDIR /usr/src/app

#RUN apt-get update && apt-get install -y nginx
#COPY nginx.conf /etc/nginx/sites-enabled/default

COPY package.json ./
RUN npm install

COPY . .

# RUN npm run build

EXPOSE 2000

CMD npm start
# CMD ["nginx", "-g", "daemon off;"]