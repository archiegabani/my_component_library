FROM node:18-alpine AS build

WORKDIR /cao_jiale_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Run linting and tests
RUN npm run lint
RUN npm run prettier:check
RUN npm test

FROM node:18-alpine

RUN npm install -g serve

WORKDIR /cao_jiale_ui_garden

COPY --from=build /cao_jiale_ui_garden/dist ./dist

EXPOSE 8018

CMD ["serve", "-s", "dist", "-l", "8018"]