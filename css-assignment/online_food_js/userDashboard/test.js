console.log("working");

var obj = localStorage.getItem("items");
obj = JSON.parse(obj);

console.log(obj);

let bttn_cart = (getId) => {
  console.log(getId);
  let result = obj[getId];
  console.log(result);

  result_fname = result.fname;
  result_fprice = result.fprice;

  let serverOperation = () => {
    let obj = localStorage.getItem("carts");
    console.log(obj);
    let getcart = JSON.parse(obj);

    if (!getcart) {
      getcart = [
        {
          fname: result_fname,
          fprice: result_fprice,
        },
      ];
      alert("Added to cart");
    } else {
      getcart = [
        ...getcart,
        {
          fname: result_fname,
          fprice: result_fprice,
        },
      ];
      alert("Added to cart");
    }

    // converting to json to string and adding to localstorage
    json_uaray = JSON.stringify(getcart);
    localStorage.setItem("carts", json_uaray);
  };
  serverOperation();
};

let result = "";
let counter = 0;
obj.map((data, index) => {
  console.log(data);
  result += `<div class='items__data__list' id='fcheck'>
  <img src='${data.fimage}'alt='not available' > 
  <h1> ${data.fname}</h1><br>
  <p> price: Rs ${data.fprice}</p> 
    <button id='${counter}' onclick='bttn_cart(this.id)' >Add to Cart</button>
</div>`;
  counter++;
});

document.getElementById("fcheck").innerHTML = result;

// ### Testing for deleting the req array ####

// let check = [
//   {
//     username: "rave",
//     password: "root",
//   },
//   {
//     username: "ramesh",
//     password: "ramesh",
//   },
//   {
//     username: "root",
//     password: "root",
//   },
// ];

// console.log(check);

// //deleting the requiered list
// let arry = check.filter((beta) => {
//   return beta.username !== "rave";
// });
// console.log(arry);
