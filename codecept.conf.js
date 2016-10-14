exports.config = {
  tests: "test/*.js",
  timeout: 10000,
  output: "./output",
  helpers: {
    Nightmare: {
      show: false
    }
  },
  include: {
  },
  bootstrap: false,
  mocha: {},
  name: "codecept-js"
}