console.log("let's get started!");
// fetch csv with d3

d3.csv("data/cities.csv").then((data) => {
  console.log(data);
});
