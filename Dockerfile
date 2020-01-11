# build stage
FROM node:12-slim as build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# deploy stage
FROM nginx:1.17-alpine
COPY --from=build-stage /usr/src/app/.vuepress/dist /usr/share/nginx/html/
EXPOSE 80
