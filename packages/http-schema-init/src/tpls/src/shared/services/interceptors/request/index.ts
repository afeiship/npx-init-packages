const common = (opts) => {
  console.log('request inter: ', opts);
  // nx.set(opts, 'headers.x-power-by', 'aric-http-schema');
  return opts;
};

export default [common].map((fn) => {
  return {
    type: 'request',
    fn,
  };
});
