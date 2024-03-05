FROM maven:3.8.5-openjdk-17 AS mvnbuilder

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN mvn clean package -U

FROM openjdk:22-ea-17-slim
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.java-tcp"

WORKDIR /opt/www
COPY --from=mvnbuilder /opt/www/target/java-tcp-1.0.0.jar /opt/www/java-tcp.jar

ENTRYPOINT ["java", "-jar", "/opt/www/java-tcp.jar"]