const hello = document.getElementById("hello");

hello.onclick = function(){
  Greeting();
}

function Greeting(){

  const msg = "Madder chod \n Caralho \n Curva!!"

  console.log(msg);
  alert(msg);

}
