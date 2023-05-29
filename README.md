This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Running project

## Locally
In your terminal, in the root of the project, run `npm run dev`

## As a Docker Image
At the root of the project...
1. Build docker image with `docker build -t {name}:{tag} .`. For example, you could run `docker build -t docker_nextjs:developement .`
2. Run docker image with `docker run --publish 3000:3000 {name}:{tag}`. For example, you could run `docker run --publish 3000:3000 docker_nextjs:developement`