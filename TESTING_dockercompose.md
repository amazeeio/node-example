Docker Compose Node 14 simple
=============================

This is a docker-compose version of the Lando example tests:

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should remove any previous runs and poweroff
sed -i -e "/###/d" docker-compose.yml
docker network inspect amazeeio-network >/dev/null || docker network create amazeeio-network
docker-compose down

# Should start up our NodeJS site successfully
docker-compose build && docker-compose up -d
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should have all the services we expect
docker ps --filter label=com.docker.compose.project=node-example-simple | grep Up | grep node-example-simple_node_1

# Should ssh against the node container by default
docker-compose exec -T node sh -c "env" | grep LAGOON= | grep node

# Should have the correct environment set
docker-compose exec -T node sh -c "env" | grep LAGOON_ROUTE | grep node-example-simple.docker.amazee.io
# docker-compose exec -T node sh -c "env" | grep LAGOON_ENVIRONMENT_TYPE | grep development

# Should be running NodeJS 18
docker-compose exec -T node sh -c "node -v" | grep "v18"

# Should have npm
docker-compose exec -T node sh -c "npm --version"

# Should have node
docker-compose exec -T node sh -c "node --version"

# Should have yarn
docker-compose exec -T node sh -c "yarn --version"

# Should have a running NodeJS site
curl -kL http://node-example-simple.docker.amazee.io | grep "COMPOSE_PROJECT_NAME=node-example-simple"
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be able to destroy our NodeJS site with success
docker-compose down --volumes --remove-orphans
```
