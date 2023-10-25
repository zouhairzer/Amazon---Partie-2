const Accessoires = document.getElementById("Accessoires");

function showOrHide(){
    if(Accessoires.style.display == 'flex'){
        Accessoires.style.display = 'none';}

        else{
            Accessoires.style.display = 'flex';
        }
}

const sideBarMobile = document.querySelector(".rightArea");

function showOrHideMobile(){
  if(sideBarMobile.style.display == 'flex'){
    sideBarMobile.style.display = 'none';}

      else{
        sideBarMobile.style.display = 'flex';
      }
}


const Productss = document.getElementById("Productss");
function showOrHideProducts(){
  if(Productss.style.display == 'flex'){
    Productss.style.display = 'none';}

      else{
        Productss.style.display = 'flex';
      }
}



function myFunction() {
  const Panier = document.querySelector("#Rca");
  Panier.insertAdjacentHTML("afterend", ` 
  <div id="Rca">
      <img src="https://scontent.fcmn1-3.fna.fbcdn.net/v/t39.30808-6/310777221_5799802243410324_8927221706028746193_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Cj-SGhPywgUAX-_Vlts&_nc_ht=scontent.fcmn1-3.fna&oh=00_AfC-dSESx6PNrBDD4HoqQEbHiHmx-TEr8V4I7o5qtUC9_A&oe=653C1D1E" alt="Product" height="90vh" width="80%">
      <h3 >$1200 <strong style="text-decoration: line-through red;" padding="0px" margin="0px">$1450</strong><p>Hello world,Hello Aziz Hello me </p>
      <p>Hello world,Hello Aziz Hello me </p></h3>
  </div>`);
  var element = document.getElementById('myNumber');
  var value = element.innerHTML;

  value++;
  console.log(value);
  document.getElementById('myNumber').innerHTML=value;
}