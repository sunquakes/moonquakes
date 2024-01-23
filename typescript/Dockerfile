FROM node:21.6.0
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.typescript"

RUN apt-get update && apt-get install -y netcat-traditional

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN npm install typescript -g \
    && npm install \
    && tsc

# Copy the wait script
COPY wait-for-server.sh /usr/local/bin/wait-for-server
RUN chmod +x /usr/local/bin/wait-for-server

ENTRYPOINT /usr/local/bin/wait-for-server nacos-server 8848 && node /opt/www/dist/index.js
