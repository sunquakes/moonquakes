FROM golang:1.18.6
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.go"

RUN apt-get update && apt-get install -y netcat

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN go env -w CGO_ENABLED=0 \
    && go build .

ENTRYPOINT ["/opt/www/go"]
