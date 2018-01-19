ARG IMAGE_REPO
FROM ${IMAGE_REPO:-lagoon}/node:8-builder as builder
COPY package.json yarn.lock /app/
RUN yarn install

FROM ${IMAGE_REPO:-lagoon}/node:8
COPY --from=builder /app/node_modules /app/node_modules
COPY . /app/

EXPOSE 3000

CMD ["yarn", "run", "start"]
