// Create the initial data object
const data = {
name: "Curve",
apy: 49.23,
available: 32,
deposited: 12.4,
tvl: 5296202
};

const server = Bun.serve({
  port: 3080,
  fetch(req) {
    console.log("New connection!");
    const jsonResponse = JSON.stringify(data);
    return new Response(jsonResponse, {
      headers: { "Content-Type": "application/json" },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);