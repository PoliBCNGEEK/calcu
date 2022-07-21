let primerNum = 0;
let segundoNum = 0;
let estado = "false";
let operador = "";


function numButton(x){
    if(estado === "false"){
        
        document.getElementById('display').value += x;
        primerNum = document.getElementById('display').value;
        console.log(primerNum);
        console.log("siii");
    }else{
        document.getElementById('display').value += x;
        segundoNum = document.getElementById('display').value;
        console.log(segundoNum);
        console.log("noooooooooo")
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
    document.getElementById("display").value = 0;
    if(estado === "false" ){
       operador = "+";
       estado = "true";
    }else{
        operador = "+";
    }
 }

 function cButton(){
    primerNum = 0;
    segundoNum = 0;
    estado = "false";
 }

 function equalButton(){
    let resultado = 0;

    resultado = Number(primerNum) + Number(segundoNum);
    console.log(resultado);

    if(operador === "+"){
    
        document.getElementById("display").value = resultado; 
    }
 }

 function highlightButton(){
    document.getElementsByClassName("buttonRight").className = "buttonRightHighlight";
 }