const { Redis } = require("@upstash/redis");
const { default: config } = require("./config");

const redis = new Redis({
  url: config.env.upstash.upstashUrl,
  token: config.env.upstash.upstashToken,
});

export default redis;
