const common = (opts) => {
  console.log('response inter: ', opts);
  return opts;
};

export default [common].map((fn) => {
  return {
    type: 'response',
    fn,
  };
});
