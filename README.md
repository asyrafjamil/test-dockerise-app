
# Dockerise NodeJS Application

The purpose of this repository is to conduct an experiment on dockerising a NodeJS Application


## Steps

1. Before we dockerise/containerize the application, initially we have to create an image by running this command:

```bash
  docker build -t [image-name] .
```

2. After we have created an image, run the container by running this command:

```bash
  docker container run -p 3000:80 [image-name] .
```



  
## Tech Stack

**Server:** Node, Express

  
## Reference

[Docker Cheat Sheet](https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf)

  
