FROM golang:1.18.6
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.go"

RUN apt-get update && apt-get install -y netcat

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN go env -w CGO_ENABLED=0 \
    && go build .

# Copy the wait script
COPY wait-for-server.sh /usr/local/bin/wait-for-server
RUN chmod +x /usr/local/bin/wait-for-server

ENTRYPOINT /usr/local/bin/wait-for-server nacos-server 8848 && /opt/www/go
