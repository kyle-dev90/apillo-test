# Image source
FROM node:16

# Install yarn globally
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json /app/

# Then install the NPM module
RUN yarn install

# Copy current directory to APP folder
COPY . /app/

EXPOSE 3000
CMD ["yarn", "run", "start:dev"]