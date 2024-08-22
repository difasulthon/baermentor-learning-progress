FROM oven/bun

WORKDIR /app

# first . for all file in directory
# second . for workdir
COPY . .

RUN bun install

EXPOSE 80

CMD [ "bun", "dev" ]