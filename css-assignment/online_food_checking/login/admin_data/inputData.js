const bttnRe = (getId) => {
  console.log("remove clicked" + getId);
  var obj = localStorage.getItem("items");
  var obj = JSON.parse(obj);
  console.log(obj); // //deleting the requiered list

  let result = obj[getId];
  console.log(result.fname);

  let arry = obj.filter((beta) => {
    return beta.fname !== result.fname;
  });
  console.log(arry);

  arry = JSON.stringify(arry);
  localStorage.setItem("items", arry);

  location.href = "inputData.html";
};

const operation = () => {
  console.log("working");

  bttnSubmit = document.getElementById("bttnSubmit");
  bttnShow = document.getElementById("bttnShow");

  //accesing local storage file
  let obj = localStorage.getItem("items");
  let getItems = JSON.parse(obj);

  //showing the items
  let show = () => {
    let dummy = "";

    let counter = 0;
    getItems.map((datas) => {
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
  //end of showing items

  bttnSubmit.addEventListener("click", () => {
    let fName, fPrice;

    fName = document.getElementById("fname").value;
    fPrice = document.getElementById("fprice").value;
    let img;

    if (fName == "pizza") {
      img = "pizza.jpeg";
    } else if (fName == "burger") {
      img = "burger.jpeg";
    } else if (fName == "sushi") {
      img = "sushi.jpeg";
    } else if (fName == "omlete") {
      img = "omlete.jpeg";
    } else if (fName == "crab") {
      img = "crab.jpeg";
    } else if (fName == "cake") {
      img = "cake.jpeg";
    } else if (fName == "chicken") {
      img = "chicken.jpeg";
    }

    if (!getItems) {
      getItems = [
        {
          fname: fName,
          fprice: fPrice,
          fimage: img,
        },
      ];
    } else {
      getItems = [
        ...getItems,
        {
          fname: fName,
          fprice: fPrice,
          fimage: img,
        },
      ];
    }
    console.log(getItems);

    // converting to json to string and adding to localstorage
    let json_faray = JSON.stringify(getItems);
    localStorage.setItem("items", json_faray);

    if (getItems) {
      alert("added item");
    } else {
      console.log("unable to add item");
    }

    show();
  });
};

operation();
