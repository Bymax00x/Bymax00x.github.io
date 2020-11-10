const captureScreen_png = () => {
  html2canvas(document.querySelector("#capture")).then((canvas) => {
    // document.body.appendChild(canvas);
    var image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(image);
    window.location.href = image;
  });
};

const captureScreen_jpeg = () => {
  html2canvas(document.querySelector("#capture")).then((canvas) => {
    var image = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    console.log(image);
    window.location.href = image;
  });
};

function getData(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

let name, email, ph_no, domain;

name = getData("name");

email = getData("email");
email = email.replace("%40", "@");
ph_no = getData("ph_no");
domain = getData("domain");
console.log(name);
console.log(email);
console.log(ph_no);
console.log(domain);

document.getElementById("getName01").innerHTML = name;
document.getElementById("getName02").innerHTML = name;
document.getElementById("getName03").innerHTML = name;
document.getElementById("getEmail").innerHTML = email;
document.getElementById("getph_no").innerHTML = ph_no;
document.getElementById("getDomain").innerHTML = domain;
document.getElementById("getDomain01").innerHTML = domain;
