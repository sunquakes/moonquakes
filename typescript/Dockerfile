FROM node:21.6.0
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.typescript"

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN npm install typescript -g \
    && npm install \
    && tsc

ENTRYPOINT ["node", "/opt/www/dist/index.js"]
