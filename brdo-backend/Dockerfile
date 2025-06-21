FROM amazoncorretto:17 AS build

WORKDIR /app

COPY . .
RUN chmod +x gradlew && \
    ./gradlew build --no-daemon -x test

FROM amazoncorretto:17
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]