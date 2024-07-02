# Stage 1: Building the application
FROM node:20-alpine3.20 AS build

# App location
WORKDIR /usr/src/app

# Installing dependencies and building the project
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Final Image
FROM node:20-alpine3.20
WORKDIR /usr/src/app

# Copying built files into final container
COPY --from=build /usr/src/app/.output ./.output
COPY --from=build /usr/src/app/node_modules ./node_modules

# As nuxt running on port 3000
EXPOSE 3000

# Running the application
CMD [ "node", ".output/server/index.mjs" ]