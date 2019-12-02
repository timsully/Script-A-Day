Link to Docker Hub:
https://hub.docker.com/repository/docker/timsully/node-web-app

Build image:
docker build -t timsully/node-web-app .

Run image:
docker run -p 49160:8080 -d timsully/node-web-app
