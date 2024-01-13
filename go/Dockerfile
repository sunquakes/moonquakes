FROM golang:1.18.6
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.go"

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN go env -w CGO_ENABLED=0 \
    && go build .

ENTRYPOINT ["/opt/www/go"]
