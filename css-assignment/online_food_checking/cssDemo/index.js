console.log("working");

let dummy = [
  {
    fname: "pizza",
    fprice: 500,
    img: "grilledChicken.jpeg",
  },
  {
    fname: "burger",
    fprice: 1000,
    img: "burger.jpeg",
  },
];

let obj = JSON.stringify(dummy);
localStorage.setItem("items", obj);
