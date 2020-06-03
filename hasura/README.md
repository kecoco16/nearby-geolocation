Run the app locally

- First you need to have [Docker](https://docs.docker.com/get-docker/) and the [Hasura CLI](https://hasura.io/docs/1.0/graphql/manual/hasura-cli/index.html) installed.
- Build the postgres container.
  ```vim
  docker-compose up -d --build postgres
  ```
- Wait for the db is ready to accept conections you can check that running
  ```vim
  docker-compose exec -T postgres pg_isready
  ```
- Build the hasura container.
  ```vim
  docker-compose up -d --build hasura
  ```
- Wait for the hasura is ready you can check that running
  ```vim
  curl http://localhost:8080/v1/version
  ```
- Open the hasura console running
  ```vim
  hasura console --endpoint http://localhost:8080
  ```
