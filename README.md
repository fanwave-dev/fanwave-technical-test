## Local Development

### Prerequisites

* Docker
* Docker-compose

### Setup

To run the project locally run the following commands fromm the route of the project:
```
make install
make start
```

Depending on your setup you may also need to add the following domains to your hosts file (/etc/hosts)

```
127.0.0.1       frontend.localhost
127.0.0.1       backend.localhost
```

The to access the front end nuxt application you can visit `http://frontend.localhost`

The nuxt end will communicate with the back end API using the following url `http://backend.localhost`.

to stop the env run `make stop`

**NOTE** It can take a few minutes for the front end to start, once started you will be able to make changes with hot reloading

### Using composer

The backend container includes composer so it is not required to be installed on the host machine. You can run composer using the following command:

```shell
docker compose run --rm php composer install
docker compose run --rm php composer require <PACKAGE>
```

### Using npm

The frontend container includes npm so it is not required to be installed on the host machine. You can run npm using the following command:

```shell
docker compose run --rm nuxt npm install
docker compose run --rm nuxt npm install <PACKAGE>
```
