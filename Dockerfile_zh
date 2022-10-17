FROM golang:1.18.6 AS gobuilder
WORKDIR /home/go
COPY ./go /home/go

# build go
RUN go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct \
    && go env -w CGO_ENABLED=0 \
    && go build .

FROM maven:3.8-jdk-8 AS mvnbuilder

# package java-http
WORKDIR /home/java-http
COPY ./java-http /home/java-http
RUN sed -i "s|<mirrors>|& \
    <mirror>\n \
        <id>aliyunmaven</id>\n \
        <mirrorOf>*</mirrorOf>\n \
        <name>阿里云公共仓库</name>\n \
        <url>https://maven.aliyun.com/repository/public</url>\n \
    </mirror>|g" /usr/share/maven/conf/settings.xml \
    && mvn clean package -U

# package java-http
WORKDIR /home/java-tcp
COPY ./java-tcp /home/java-tcp
RUN mvn clean package -U

FROM gu:latest
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes"

##
# ---------- env settings ----------
##
# --build-arg timezone=Asia/Shanghai
ARG timezone

ENV TIMEZONE=${timezone:-"Asia/Shanghai"} \
    APP_ENV=prod \
    SCAN_CACHEABLE=(true)

# update
RUN set -ex \
    # show php version and extensions
    && php -v \
    && php -m \
    && php --ri swoole \
    #  ---------- some config ----------
    && cd /etc/php* \
    # - config PHP
    && { \
        echo "upload_max_filesize=128M"; \
        echo "post_max_size=128M"; \
        echo "memory_limit=1G"; \
        echo "date.timezone=${TIMEZONE}"; \
    } | tee conf.d/99_overrides.ini \
    # - config timezone
    && ln -sf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \
    && echo "${TIMEZONE}" > /etc/timezone \
    # ---------- clear works ----------
    && rm -rf /var/cache/apk/* /tmp/* /usr/share/man \
    && echo -e "\033[42;37m Build Completed :).\033[0m\n" \
    && echo $'\
    #!/bin/bash \n\
    java -jar /opt/java-http.jar & \n\
    java -jar /opt/java-tcp.jar & \n\
    /opt/go & \n\
    php /opt/php/bin/hyperf.php start \
    ' > /opt/start.sh

WORKDIR /opt/php
COPY ./php /opt/php
RUN composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/ \
    && composer install --no-dev -o  \
    && php bin/hyperf.php

COPY --from=gobuilder /home/go/go /opt/
COPY --from=mvnbuilder /home/java-http/target/java-http-1.0.0-SNAPSHOT.jar /opt/java-http.jar
COPY --from=mvnbuilder /home/java-tcp/target/java-tcp-1.0.0-SNAPSHOT.jar /opt/java-tcp.jar

WORKDIR /opt
ENTRYPOINT ["sh", "/opt/start.sh"]
