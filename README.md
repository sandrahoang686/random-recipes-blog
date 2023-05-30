## About
This app was built as a small exploratory effort to learn and upskill on NextJs. This project plays around with dynamic routing, global vs in-scope styling and pre-rendering during build time. There was also a maintained focus to build this app modularly in a re-useable way and for ease of scalability, even though there is no plans to scale this app in the future... so for this specific case, some parts may be overkill!

## Tech Stack
* NextJs
* React
* Docker
* [GreyMatter](https://github.com/greymatter-io)

## Running project

### Locally
In your terminal, in the root of the project, run...
> npm run dev

### As a Docker Image
At the root of the project...
1. Build docker image with `docker build -t {name}:{tag} .`. For example, you could run...
> docker build -t docker_nextjs:developement .
2. Run docker image with `docker run --publish 3000:3000 {name}:{tag}`. For example, you could run...
> docker run --publish 3000:3000 docker_nextjs:developement

## TODOS
* Unit test `posts.js` with Jest
* Make certain areas more accessible like clickable divs can be buttons instead
* Convert to use TypeScript to apply strict types