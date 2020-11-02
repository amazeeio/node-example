FROM uselagoon/node-14-builder as builder
COPY package.json yarn.lock /app/
RUN yarn install

FROM uselagoon/node-14
COPY --from=builder /app/node_modules /app/node_modules
COPY . /app/

EXPOSE 3000

CMD ["yarn", "run", "start"]
