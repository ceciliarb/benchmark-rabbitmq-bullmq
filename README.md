

## BullMQ
### redis
```
docker run --rm -it --network=host redis
```

### worker
```
docker build -t ceciliarb/benchmark-bullmq-worker . -f bullmq/bullmq-worker.dockerfile
docker run --rm -ti --network=host ceciliarb/benchmark-bullmq-worker
```

## RabbitMQ
### rabbitmq
```
docker run --rm -it --network=host rabbitmq:latest
```

### worker
```
docker build -t ceciliarb/benchmark-rabbitmq-worker . -f rabbitmq/rabbitmq-worker.dockerfile
docker run --rm -it --network=host ceciliarb/benchmark-rabbitmq-worker
```

## Api
```
docker build -t ceciliarb/benchmark-api . -f api.dockerfile 
docker run --rm -ti --network=host ceciliarb/benchmark-api
```