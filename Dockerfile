FROM node:12.18.1
# FROM ubuntu
# RUN apt-get update && \
#   apt-get install -y curl git --no-install-recommends && \
#   curl -k -L https://deb.nodesource.com/setup_10.x | bash -  && \
#   apt-get install -y nodejs --no-install-recommends && \
#   apt-get install -y build-essential && \
#   mkdir -p /app && \
#   apt-get clean && \
#   rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir app

WORKDIR /app

ADD . /app

RUN yarn install

EXPOSE 3333

CMD ["npm", "start"]
