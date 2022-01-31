# Base on offical Node.js Alpine image
FROM node:alpine
RUN apk update && apk add bash

# Set working directory
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn

COPY ./node_modules ./
COPY . .

EXPOSE 5000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
#USER node

# Run npm start script when container starts
CMD [ "npm", "start" ]


RUN bash
