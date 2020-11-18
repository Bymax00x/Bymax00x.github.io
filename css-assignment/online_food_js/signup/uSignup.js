const operation = () => {
  console.log("working");

  bttnSubmit = document.getElementById("bttnSubmit");

  bttnSubmit.addEventListener("click", () => {
    let user, pass, passre;
    let uaray;

    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    passre = document.getElementById("pass01").value;

    //converting to json to string and adding to localstorage
    // json_uaray= JSON.stringify(uaray);
    // localStorage.setItem('users',json_uaray);

    if (pass !== passre) {
      alert("password donot match");
    } else {
      //converting string to json and accesing from local storage
      let obj = localStorage.getItem("users");

      // console.log(obj);

      let getuser = JSON.parse(obj);

      if (!getuser) {
        getuser = [
          {
            username: user,
            password: pass,
            access: 1,
          },
        ];
      } else {
        getuser = [
          ...getuser,
          {
            username: user,
            password: pass,
            access: 0,
          },
        ];
      }

      // converting to json to string and adding to localstorage
      json_uaray = JSON.stringify(getuser);
      localStorage.setItem("users", json_uaray);

      if (getuser) {
        alert("added user");
        location.href = "../login/index.html";
      } else {
        console.log("unable to add user");
      }
      console.log(getuser);
    }

    // console.log(getuser[0]);
  });
};

operation();
