bttnSub = document.getElementById("bttnSubmit");

let data;

const operation = () => {
  let report = 1;
  data = JSON.parse(data);
  console.log(data);
  console.log(user.value);
  console.log(pass.value);

  data.forEach((datas, index) => {
    if (
      datas.username == user.value &&
      datas.password == pass.value &&
      datas.access == 0
    ) {
      console.log("log in sucessful");

      location.href = "../userDashboard/test.html";
    } else if (
      datas.username == user.value &&
      datas.password == pass.value &&
      datas.access == 1
    ) {
      location.href = "../admin_data/inputData.html";
    } else {
      report = 0;
    }
    console.log(datas);
    // if (!report) {
    //   console.log("invalid username or password");
    // }
  });

  if (!report) {
    alert("Invalid username or password !!!");
  }
};

bttnSub.addEventListener("click", () => {
  let user, pass;

  data = localStorage.getItem("users");

  user = document.getElementById("user").value;
  pass = document.getElementById("pass").value;

  console.log("the user is " + user);

  operation();
});
