module.exports = {
  mode: "jit",
  reactStrictMode: true,
  images:{
    domains:["press.hulu.com", "image.tmdb.org"]
  },
  env: {
    API_KEY: process.env.API_KEY,
  }
}
