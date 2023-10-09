import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();
// Cache data2 in Redis
//Very unsophisticated, with many problems
//For one, deposited would be be stored else where since obviously we have multiple clients
//with different deposits,
//but fix that later appearances first
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

client.set("myData", JSON.stringify(data2));
//like were not currently getting the data from somewhere were literally just putting it in a cache
//and then retrieving it its like putting your socks in the drawer
//and then immediately taking it out
const value = await client.get("myData");

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