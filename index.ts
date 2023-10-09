// Create the initial data object
const data = {
name: "Curve",
apy: 49.23,
available: 32,
deposited: 12.4,
tvl: 5296202
};

const data2 = [
  {
    id: 0,
    name: "Curve",
    apy: 49.23,
    available: 32,
    deposited: 12.4,
    tvl: 5296202,
    abi: "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"
  },
  {
    id: 1,
    name: "Ethereum",
    apy: 21.23,
    available: 12,
    deposited: 4,
    tvl: 5292,
    abi: "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"
  },
  {
    id: 2,
    name: "Bitcoin",
    apy: 12.42,
    available: 10,
    deposited: 14.2,
    tvl: 152,
    abi: "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"
  }
];



const server = Bun.serve({
  port: 3080,
  fetch(req) {
    console.log("New connection!");
    const jsonResponse = JSON.stringify(data2);
    return new Response(jsonResponse, {
      headers: { "Content-Type": "application/json" },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);