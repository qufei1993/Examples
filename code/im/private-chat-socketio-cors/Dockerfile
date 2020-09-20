FROM node:10.0-alpine

RUN apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata

RUN echo "Asia/Shanghai" > /etc/timezone

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

# add npm package
COPY package.json /usr/src/app/package.json
RUN cd /usr/src/app/
RUN npm i

# copy code
COPY . /usr/src/app/

EXPOSE 30010

CMD [ "node", "server/app.js" ]
