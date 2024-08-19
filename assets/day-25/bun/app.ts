const server = Bun.serve({
  port: 3001,
  fetch(request) {
    return new Response("Welcome to Bun Watch!");
  },
});

console.log(`Listening on ${server.url}`);