class Calculator {
    constructor(currentOperandTextElement , previousOperandTextElement ){
        this.currentOperandTextElement  = currentOperandTextElement 
        this.previousOperandTextElement  = previousOperandTextElement 
        this.clear()

    }
    clear(){
      this.currentOperand = ''
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
    appendNumber(number){
      if(number === ',' && this.currentOperand.includes(',')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    chooseOperation(operation){
      if(this.currentOperand === '' ) return
      if(this.previousOperand !== ''){
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
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
        case '*':
          computation = prev * current
          break
        case '÷':
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
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand

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
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
acButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})
function