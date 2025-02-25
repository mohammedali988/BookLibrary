const config = {
  env: {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
    imageKit: {
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    },
    MONGODB_URL: process.env.MONGODB_URL,
    upstash: {
      upstashUrl: process.env.UPSTASH_REDIS_URL,
      upstashToken: process.env.UPSTASH_REDIS_TOKEN,
      qStashUrl: process.env.QSTASH_URL,
      qStashToken: process.env.QSTASH_TOKEN,
    },
  },
};

export default config;
