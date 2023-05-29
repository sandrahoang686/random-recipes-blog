FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . ./
EXPOSE 3000
RUN ["chmod", "+x", "/usr/local/bin/docker-entrypoint.sh"]
CMD npm run dev