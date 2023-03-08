const fetch = (...args) =>
  import("node-fetch")
  .then(({ default: fetch }) => fetch(...args));

console.time("vv");
fetch("https://vvauban.com")
.then(() => console.timeEnd("vv"));
