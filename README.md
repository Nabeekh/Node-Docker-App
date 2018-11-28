# Before you start

make sure you have following software installed

```
docker, docker-machine
```

# Local
```npm install```
```npm start``` or ```npm run start:docker```
  you may need sudo to run docker commands

# Deployment

For production app is deployed with docker-machine pointed to remote machine, so
first you need to create one

## create docker machine

Machine should not have the docker installed yet

```
> docker-machine create \
-d generic \
--generic-ssh-key ~/.ssh/id_rsa \
--generic-ip-address 122.88.88.88 \
APPNAME
```

where `122.88.88.88` is your remote machine's IP

## deploy to production

```
> bash scripts/deploy-prod
```

## Author

* **Nabeekh** - *Initial work* - nabeekh@gmail.com