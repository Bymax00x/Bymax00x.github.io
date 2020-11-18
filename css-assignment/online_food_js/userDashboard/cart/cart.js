let obj = localStorage.getItem("carts");
console.log(obj);
let getcart = JSON.parse(obj);

const bttnRe = (getId) => {
  console.log("remove clicked" + getId);
  var obj = localStorage.getItem("carts");
  var obj = JSON.parse(obj);
  console.log(obj); // //deleting the requiered list

  let result = obj[getId];
  console.log(result.fname);

  let arry = obj.filter((beta) => {
    return beta.fname !== result.fname;
  });
  console.log(arry);

  arry = JSON.stringify(arry);
  localStorage.setItem("carts", arry);

  location.href = "cart.html";
};

let show = () => {
  let dummy = "";
  let removeOp = "";
  let counter = 0;
  getcart.map((datas) => {
    console.log(datas.fname);
    dummy += `<tr><td> ${datas.fname}</td><td> ${datas.fprice}</td><td> <button  id='${counter}'  onclick=bttnRe(this.id)> Remove </button></td></tr> `;
    counter++;
  });

  document.getElementById("demo").innerHTML = `
      <table id='table_data'>
      <tr>
      <th>Food Item</th>
      <th> Price</th>
      <th> Remove </th>
      </tr>
       ${dummy}`;
};

show();
