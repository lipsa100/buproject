
var buttonwatermelon = document.querySelector(".watermelon");
var buttoncoolkiwi = document.querySelector(".coolkiwi");
var buttonaam = document.querySelector(".aam");
var buttonananas = document.querySelector(".ananas");
var buttonlychee = document.querySelector(".lychee");
var buttonberry = document.querySelector(".berry");
var buttonpunch = document.querySelector(".punch");
var buttongrape = document.querySelector(".grape");
var buttonplum = document.querySelector(".plum");
var buttonorange = document.querySelector(".orange");
var buttonpomegranate = document.querySelector(".pomegranate");
var buttonmilkshake = document.querySelector(".milkshake");

var number=document.querySelectorAll(".drum").length;

var bodytoedit=document.querySelector("body");
var texttoedit=document.querySelector("p");
var imgtoedit=document.querySelector('.rightside0');
var htoedit=document.querySelector("h1");





for(i=0 ; i<number ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// detecting button press

 var buttonInnerHTML = this.innerHTML;

makesound(buttonInnerHTML);

});

}


// detecting keyboard press



function makesound(buttonclicks){
  switch (buttonclicks){
    case "B":

    buttonwatermelon.onclick = function() {
     // texttoedit.classList.add("rightdown2");
   htoedit.innerHTML="Watermelon <i>🍹</i> juice";
   texttoedit.innerHTML="watermelon juice";
   imgtoedit.classList.add("rightside1");
   imgtoedit.classList.remove("rightside2","rightside3","rightside4","rightside5","rightside6","rightside7" ,"rightside8","rightside9","rightside10","rightside11","rightside12");


   bodytoedit.classList.add("bg1");
   bodytoedit.classList.remove("bg2","bg3","bg4","bg5","bg6","bg7","bg8","bg9","bg10","bg11","bg12");

    };
    break;

    case "C":
    buttoncoolkiwi.onclick = function() {
      htoedit.innerHTML="Cool kiwi <i>🍹</i> juice";
      texttoedit.innerHTML="cool kiwi juice";

      imgtoedit.classList.add("rightside2");
      imgtoedit.classList.remove("rightside1","rightside3","rightside4","rightside5","rightside6","rightside7","rightside8","rightside9","rightside10","rightside11","rightside12");

      bodytoedit.classList.add("bg2");
      bodytoedit.classList.remove("bg1","bg3","bg4","bg5","bg6","bg7","bg8","bg9","bg10","bg11","bg12");

    };
    break;


    case "E"://3
      buttonaam.onclick = function() {
        htoedit.innerHTML="Aam Ras<i>🍹</i> juice";
        texttoedit.innerHTML="aam ras juice";

      imgtoedit.classList.add("rightside3");
      imgtoedit.classList.remove("rightside1","rightside2","rightside4","rightside5","rightside6","rightside7" ,"rightside8","rightside9","rightside10","rightside11","rightside12");

          bodytoedit.classList.add("bg3");
          bodytoedit.classList.remove("bg1","bg2","bg4","bg5","bg6","bg7","bg8","bg9","bg10","bg11","bg12");



      };
      break;

    case "H"://4
    buttonananas.onclick = function() {
      htoedit.innerHTML="Ananas Da Panna <i>🍹</i> juice";
      texttoedit.innerHTML="Ananas Da Panna juice";

            imgtoedit.classList.add("rightside4");
            imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside5","rightside6","rightside7" ,"rightside8","rightside9","rightside10","rightside11","rightside12");

            bodytoedit.classList.add("bg4");
            bodytoedit.classList.remove("bg1","bg2","bg3","bg5","bg6","bg7","bg8","bg9","bg10","bg11","bg12");

        };
        break;

    case "J"://5
    buttonlychee.onclick = function() {
      htoedit.innerHTML="Lychee and Dill <i>🍹</i> juice";
      texttoedit.innerHTML="Lychee and Dill juice";

      imgtoedit.classList.add("rightside5");
      imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside6","rightside7" ,"rightside8","rightside9","rightside10","rightside11","rightside12");

      bodytoedit.classList.add("bg5");
      bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg6","bg7","bg8","bg9","bg10","bg11","bg12");

    };
    break;


    case "K"://6
    buttonberry.onclick = function() {
      htoedit.innerHTML="Very Berry Khatta <i>🍹</i> juice";
      texttoedit.innerHTML="Very Berry Khatta juice";


            imgtoedit.classList.add("rightside6");
            imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside5","rightside7","rightside8","rightside9","rightside10","rightside11","rightside12");

            bodytoedit.classList.add("bg6");
            bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg5","bg7","bg8","bg9","bg10","bg11","bg12");

      };
    break;


    case "L"://7
    buttonpunch.onclick = function() {
      htoedit.innerHTML="Virgin punch  <i>🍹</i> juice";
      texttoedit.innerHTML="virgin punch juice";

      imgtoedit.classList.add("rightside7");
      imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside5","rightside6","rightside8","rightside9","rightside10","rightside11","rightside12");

      bodytoedit.classList.add("bg7");
      bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg5","bg6","bg8","bg9","bg10","bg11","bg12");

};
    break;


    case "T" ://8
    buttongrape.onclick = function() {
      htoedit.innerHTML="Grape nectar <i>🍹</i> juice";
      texttoedit.innerHTML="Grape nectar juice";

            imgtoedit.classList.add("rightside8");
            imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside5","rightside6","rightside7","rightside9","rightside10","rightside11","rightside12");

            bodytoedit.classList.add("bg8");
            bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg5","bg6","bg7","bg9","bg10","bg11","bg12");

      };
    break;

    case "P"://9
    buttonplum.onclick = function() {
      htoedit.innerHTML="Plum-Ness <i>🍹</i> juice";
      texttoedit.innerHTML="plum-ness juice";


            imgtoedit.classList.add("rightside9");
            imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside5","rightside6","rightside7","rightside8","rightside10","rightside11","rightside12");

            bodytoedit.classList.add("bg9");
            bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg5","bg6","bg7","bg8","bg10","bg11","bg12");

      };

    break;
    case "N"://10
    buttonorange.onclick = function() {
      htoedit.innerHTML="Orange And Basil <i>🍹</i> juice";
      texttoedit.innerHTML="orange and basil juice";


            imgtoedit.classList.add("rightside10");
            imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside5","rightside6","rightside7","rightside8","rightside9","rightside11","rightside12");

            bodytoedit.classList.add("bg10");
            bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg5","bg6","bg7","bg8","bg9","bg11","bg12");

      };

    break;
    case "R"://11
    buttonpomegranate.onclick = function() {
       htoedit.innerHTML="Pomegranate <i>🍹</i> juice";
        texttoedit.innerHTML="pomegranate juice";

              imgtoedit.classList.add("rightside11");
              imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside5","rightside6","rightside7","rightside8","rightside9","rightside10","rightside12");

              bodytoedit.classList.add("bg11");
              bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg5","bg6","bg7","bg8","bg9","bg10","bg12");

      };

    break;
    case "S"://12
    buttonmilkshake.onclick = function() {
      htoedit.innerHTML="Milkshake <i>🍹</i> ";
      texttoedit.innerHTML="milkshake";

            imgtoedit.classList.add("rightside12");
            imgtoedit.classList.remove("rightside1","rightside2","rightside3","rightside4","rightside5","rightside6","rightside7","rightside8","rightside9","rightside10","rightside11");

            bodytoedit.classList.add("bg12");
            bodytoedit.classList.remove("bg1","bg2","bg3","bg4","bg5","bg6","bg7","bg8","bg9","bg10","bg11");

      };

    break;
    default : alert("wrong entry");
  }

}

function recentbutton(activekey){
   var activebutton=  document.querySelector("."+activekey);
   activebutton.classList.add("pressed");
   setTimeout(function() {
     activebutton.classList.remove("pressed");
   },100);
 }
