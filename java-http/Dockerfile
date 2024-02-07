FROM maven:3.8-jdk-8 AS mvnbuilder

WORKDIR /opt/www
COPY . /opt/www

# Build
RUN mvn clean package -U

FROM openjdk:8-jre
LABEL maintainer="sunquakes<sunquakes@outlook.com>" version="1.0" license="MIT" app.name="moonquakes.java-http"

WORKDIR /opt/www
COPY --from=mvnbuilder /opt/www/target/java-http-1.0.0.jar /opt/www/java-http.jar

ENTRYPOINT ["java", "-jar", "/opt/www/java-http.jar"]