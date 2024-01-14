FROM maven:3.8-jdk-8 AS mvnbuilder

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN mvn clean package -U

FROM openjdk:8-jre
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.java-tcp"

RUN apt-get update && apt-get install -y netcat

WORKDIR /opt/www
COPY --from=mvnbuilder /opt/www/target/java-tcp-1.0.0-SNAPSHOT.jar /opt/www/java-tcp.jar

# Copy the wait script
COPY wait-for-server.sh /usr/local/bin/wait-for-server
RUN chmod +x /usr/local/bin/wait-for-server

ENTRYPOINT /usr/local/bin/wait-for-server nacos-server 8848 && java -jar /opt/www/java-tcp.jar
