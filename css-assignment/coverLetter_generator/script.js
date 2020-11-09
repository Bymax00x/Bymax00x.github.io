console.log("working");
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

const captureScreen_webp = () => {
  html2canvas(document.querySelector("#capture")).then((canvas) => {
    var image = canvas
      .toDataURL("image/webp")
      .replace("image/webp", "image/octet-stream");
    console.log(image);
    window.location.href = image;
  });
};

const coverLetter = () => {
  let name, email, ph_no, domain;

  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  ph_no = document.getElementById("ph_no").value;
  domain = document.getElementById("domain").value;
  console.log(name);
  console.log(email);
  console.log(ph_no);
  console.log(domain);

  if ((name != "") & (email != "") & (ph_no != "") & (domain != "")) {
    console.log("its not null");
    generateLetter(name, email, ph_no, domain);
  } else {
    console.log("some value  null");
  }
};

const generateLetter = (name, email, ph_no, domain) => {
  document.getElementById("root").innerHTML = `
    <div class='coverLetter'id='capture'>


     <div class='header_right'>
     ${name}<br>
     Email: ${email} <br>
     Phone: ${ph_no} <br>
     </div>

     <div class='header_left'>
        The HostMaster<br>
        NP ccTLD Registration Services<br>
        Mercantile Communications Pvt. Ltd.<br>
        Email: hostmaster@mercantile.com.np

     </div>

     <div class='header_right'>
     Mon Nov 09 2020
     </div>

     <div class='subj'>
     Subject: Application for domain.com.np domain registration
     </div>
     <div class='lbody'>
        Dear Sir/Madam,<br>
        I am writing to request the registration of domain under my name ${name} 
        with domain ${domain}.com.np.
     </div>
     <div class='lbody'>
            Applying for registration of the domain ${domain}.com.np follows all the term 
            and conditions of Domain registration residing at “https://register.com.np/terms-and-conditions”. 
            I submit the required for the domain registrations as per the rule.
     </div>
     <div class='lbody'>
            Thank you for “helping the industry and civil society to make them online”. Entry area for .com.np is 
            "commercial" and Notes is "open ccTLD, any person or entity is permitted to register" as mentioned on 
            “https://register.com.np/np-ccTLDs”.
     </div>
     <div class='lbody'>
            I would be very grateful indeed for your help. Needless to say, I will be glad to supply you with any further 
            information you may need. I look forward to hearing from you soon.
     </div>
     <div class='lbody'>
        Your Sincerely,<br>
         ${name}
     </div>
    </div>  

    <div class='foot'>
       <button onclick='captureScreen_png()'  class='bttn_two' > Save as png</button>
       <button onclick='captureScreen_jpeg()' class='bttn_two' > Save as jpeg</button>
       <button onclick='captureScreen_webp()' class='bttn_two' > Save as webp</button>
    </div>
  `;
};
