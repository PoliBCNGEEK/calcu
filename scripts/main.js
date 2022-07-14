let primerNum = 0;
let segundoNum = 0;
let estado = "false";
let operador = "";

function numButton(x){
    if(estado === "false"){
        
        document.getElementById('display').value += x;
        primerNum = document.getElementById('display').value;
    }else{
        document.getElementById('display').value += x;
        segundoNum = document.getElementById('display').value;
    }
}

function comaButton(){
    if(estado === "false" ){
        document.getElementById('display').value += ",";
        primerNum = document.getElementById('display').value;
    }else{
        document.getElementById('display').value += ",";
        segundoNum = document.getElementById('display').value;
    }
} 
 function sumarButton(){
    if(estado === "false" ){
       operador = "+";
       estado = "true";
       document.getElementById("display").value = 0;
    }else{
        operador = "+";
    }
 }