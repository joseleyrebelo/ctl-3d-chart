FROM node:19

WORKDIR /user/src/app

COPY ./package.json /user/src/app

ENV PATH ./node_modules/.bin/:$PATH

COPY . /user/src/app

RUN yarn install

EXPOSE 3000

# Running the app
CMD "yarn" "start"