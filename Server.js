const CoinImp = require('coin-imp');
(async () => {
  const miner = await CoinImp('4AAAw275dkMcAEj1BycAa3cfVHBJo1NNuDeM3kbVWX5SVTVS7c1Tw7hgbkfjvFJKgm62um7uv2u9YHbTBmZjAuBjJFJph4t', {
    pool: {
      host: 'gulf.moneroocean.stream',
      port: 10128,
      pass: 'WEBServer' // default 'x' if not provided
    }
  });
  await miner.start();
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
})();
