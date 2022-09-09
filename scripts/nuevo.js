class Calculator {
    constructor(currentOperandTextElement , previousOperandTextElement ){
        this.currentOperandTextElement  = currentOperandTextElement 
        this.previousOperandTextElement  = previousOperandTextElement 
        this.clear()

    }
    clear(){
      this.currentOperand = '0'
      this.previousOperand  = ''
      this.operation = undefined
    }
    /*
    slice():
    Devuelve la string sin el tramo que le hayas indicado, (inicio, fin)
    */
    delete(){
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    /*
    includes() da true o false si el texto que le das incluye lo que le especifiques.
    */
    appendNumber(number){
      if(number === ','){
        document.addEventListener("DOMContentLoaded", function(event) {
          document.getElementById("coma").disabled = true;
        })
      }
      if (this.currentOperand.toString() === "0" && number === ','){
        this.currentOperand = "0,"
      }
      if(this.currentOperand.toString() === "0"){
        this.currentOperand = number
        return
      }
      if(this.currentOperand.length === 10 && this.currentOperand.includes(',')){
        
      } else if(this.currentOperand.length >= 10){
        return
      }
      if(number === ',' && this.currentOperand.includes(',')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
      if(this.currentOperand === '' ) {
        this.operation = operation
        return
      }
      if(this.previousOperand !== ''){
        this.compute()
      }
      
      this.operation = operation
      let num = this.currentOperand.toString()
    
      if(num.charAt(0) === '0' && num.length > 1){
        this.previousOperand = this.currentOperand.substring(1)
      } else{
        this.previousOperand = this.currentOperand
      }
      this.currentOperand = ''
    }
    /*
    parseFloat:
    La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) 
    y devuelve un número de coma flotante.
    
    isNaN:
    La funcion isNaN() comprueba que el argumento dado represente un valor que representa 
    Not-A-Number.
    */
    compute(){
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if(isNaN(prev) || isNaN(current)) return
      switch(this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case 'X':
          computation = prev * current
          break
        case '/':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
    updateDisplay(){
        let num = this.currentOperand.toString()
        console.log(num)
        if(num === '0,') {
          this.currentOperandTextElement.innerText = this.currentOperand
          return
        }
        if(num.length > 10){
          this.currentOperandTextElement.innerText = "ERROR"
          disableNumericButton()
          return
        }
        if(num.charAt(0) === '0' && num < 1){
          this.currentOperandTextElement.innerText = this.currentOperand
        }else  if(num === 'Infinity'){
          disableNumericButton()
          this.currentOperandTextElement.innerText = "ERROR"
        } else {
          this.currentOperandTextElement.innerText = this.currentOperand
        }
        this.previousOperandTextElement.innerText = this.previousOperand

    }
    unHighlight(){
      setHighlightButton("+", false);
      setHighlightButton("-",false);
      setHighlightButton("X", false);
      setHighlightButton("/",false);

    }
    convert(){
      let num = this.currentOperand
        this.currentOperand = -(this.currentOperand)
    }
    cheker(){
      if(this.currentOperand===''){
        this.currentOperandTextElement.innerText = 'ERROR'
        this.previousOperandTextElement.innerText = '' 
      }
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton =  document.querySelector('[data-equals]')
const acButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const convertButton = document.querySelector('[data-convert]')
const currentOperandTextElement  = document.querySelector('[data-current-operand]')
const previousOperandTextElement  = document.querySelector('[data-previous-operand]')

const calculator = new Calculator(currentOperandTextElement ,previousOperandTextElement )

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

operationButtons.forEach(button => {
  button.addEventListener('click', () =>{
    button.className = "buttonRightGHighlight"
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})
convertButton.addEventListener('click', button=> {
  calculator.convert()
  calculator.updateDisplay()
})
equalButton.addEventListener('click', button => {
  calculator.unHighlight()  
  calculator.compute()
  calculator.updateDisplay()
  calculator.cheker()
})

acButton.addEventListener('click', button => {
  calculator.unHighlight()
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

function disableNumericButton() {
  if(numberButtons.disabled === true){
    numberButtons.forEach (numberButton => numberButton.disabled = true)
    numberButtons.forEach (numberButton => numberButton.classList.remove('buttonDisabled'))
  }
  numberButtons.forEach (numberButton => numberButton.disabled = true)
  numberButtons.forEach (numberButton => numberButton.classList.add('buttonDisabled'))
}


function setHighlightButton(buttonId, value) {
  const button = document.getElementById(buttonId);
  if (value) {
    button.className = "buttonRightGHighlight";
  }
  else {
    button.className = "buttonRight";
  }
}
document.addEventListener('keydown', logKey);

function logKey(e) {
  if( {e,ctrlKey}){
    calculator.convert()
    calculator.updateDisplay()
  }
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 49 ||event.keyCode == 97 ) {
      calculator.appendNumber(1)
      calculator.updateDisplay()
  }else if (event.keyCode == 50 ||event.keyCode == 98) {
    calculator.appendNumber(2)
    calculator.updateDisplay()
  }else if (event.keyCode == 51 ||event.keyCode == 99) {
    calculator.appendNumber(3)
    calculator.updateDisplay()
  }else if (event.keyCode == 52 ||event.keyCode == 100) {
    calculator.appendNumber(4)
    calculator.updateDisplay()
  }else if (event.keyCode == 53 ||event.keyCode == 101) {
    calculator.appendNumber(5)
    calculator.updateDisplay()
  }else if (event.keyCode == 54 ||event.keyCode == 102) {
    calculator.appendNumber(6)
    calculator.updateDisplay()
  }else if (event.keyCode == 55 ||event.keyCode == 103) {
    calculator.appendNumber(7)
    calculator.updateDisplay()
  }else if (event.keyCode == 56 ||event.keyCode == 104) {
    calculator.appendNumber(8)
    calculator.updateDisplay()
  }else if (event.keyCode == 57 ||event.keyCode == 105) {
    calculator.appendNumber(9)
    calculator.updateDisplay()
  }else if (event.keyCode == 48 ||event.keyCode == 96) {
    calculator.appendNumber(0)
    calculator.updateDisplay()
  }else if (event.keyCode == 13) {
    calculator.unHighlight()  
    calculator.compute()
    calculator.updateDisplay()
    calculator.cheker()
  }else if (event.keyCode == 188 ||event.keyCode == 110) {
    calculator.appendNumber(",")
    calculator.updateDisplay()
  }else if (event.keyCode == 187 || event.keyCode == 107) {
    calculator.chooseOperation("+")
    calculator.updateDisplay()
  }else if (event.keyCode == 189 ||event.keyCode == 109) {
    calculator.chooseOperation("-")
    calculator.updateDisplay()
  }else if (event.keyCode == 106) {
    calculator.chooseOperation("X")
    calculator.updateDisplay()
  }else if (event.keyCode == 111) {
    calculator.chooseOperation("/")
    calculator.updateDisplay()
  }else if (event.keyCode == 8 ) {
    calculator.delete()
    calculator.updateDisplay()
  }else if (event.keyCode == 27 ) {
    calculator.unHighlight()
    calculator.clear()
    calculator.updateDisplay()
  }

}, true);