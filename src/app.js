import "bootstrap";
import "./style.css";


//import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
document.querySelector('.card').classList.add(generateRandomSymb());
document.querySelector('.card').innerHTML = (generateRandomNumb());
  };

  let generateRandomNumb = () =>{
   
    let numbers = ["2","3","4","5","6","7","8","9","10","A","Q","J","K"];


     let indexNumbers = Math.floor(Math.random() * numbers.length);
     return numbers[indexNumbers];

  };
 let generateRandomSymb = () =>{
  
    let symb = ["diams","spades","hearts","clubs"];
     let indexSymb = Math.floor(Math.random() * symb.length);
     return symb[indexSymb];
 };