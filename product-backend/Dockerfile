FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# CI pipeline pehle jar build karti hai, yahan sirf copy hota hai
COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
