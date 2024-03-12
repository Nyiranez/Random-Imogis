let imogis=["😊","😂","🤣","😍","😒","😁","😃","😜","😁","😎"];

const btn= document.getElementById("gen-btn");
const imog= document.getElementById("face");

btn.addEventListener("click", function(){
  let round=Math.floor(Math.random()*imogis.length) ;
  let result= imogis[round]
  imog.innerHTML=result;
});