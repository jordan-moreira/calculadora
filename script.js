const previousElement=document.querySelector("[previous-operand]")
const currentElement=document.querySelector("[current-operand]")
const clearbutton=document.querySelector("[clear]")
const deletebutton=document.querySelector(".button-delete")
const numberbuttons=document.querySelectorAll("[number]")
const operationbuttons=document.querySelectorAll("[operand]")
const equalsbutton=document.querySelector("[equals]")

class Calculator {
    constructor(previous,current){
        this.previoustext=previous;
        this.currenttext=current;
        this.clear()
    }
    appendNumber(number){
        if(this.currentoperand.includes(".")&&  number =="."){return}

        this.currentoperand=`${this.currentoperand}${number.toString()}`
    }
    calculate(){
        let result
        const previousoperand = parseFloat(this.previousoperand)
        const currentoperand = parseFloat(this.currentoperand)
        if(isNaN(previousoperand) || isNaN(currentoperand)){return}

        switch (this.operation) {
            case "+":
                result=previousoperand+currentoperand;
                break;
            case "-":
                result=previousoperand-currentoperand;
                break;
            case "x":
                result=previousoperand*currentoperand;
                break;
            case "÷":
                result=previousoperand/currentoperand;
                break;
                default:
                    return;
        }
        this.currentoperand=result
        this.previousoperand=""
        this.operation=undefined
    }
    choseOperation(operation){
        if(this.previousoperand!= ""){
            calculator.calculate()
        }
        this.operation=operation

        this.previousoperand=this.currentoperand

        this.currentoperand=""

    }
    clear(){
        this.currentoperand="";
        this.previousoperand="";
        this.operation=undefined;
    }
    delete(){
        this.currentoperand=this.currentoperand.toString().slice(0,-1)
    }
    updateDisplay(){
        this.previoustext.innerText=`${this.previousoperand} ${this.operation || ""}`;
        this.currenttext.innerText=this.currentoperand;
    }    
}

const calculator = new Calculator(
    previousElement,
    currentElement
    );
    for(let numberbutton of numberbuttons){
        numberbutton.addEventListener('click',()=>{
            calculator.appendNumber(numberbutton.innerText)
            calculator.updateDisplay()
        })
    }

    for(let operationbutton of operationbuttons){
        operationbutton.addEventListener("click",()=>{
            calculator.choseOperation(operationbutton.innerText)
            calculator.updateDisplay()
        })
    }

    equalsbutton.addEventListener("click",()=>{
        calculator.calculate()
        calculator.updateDisplay()
    })

    clearbutton.addEventListener("click",()=>{
        calculator.clear();
        calculator.updateDisplay();
    })

    deletebutton.addEventListener("click",()=>{
        calculator.delete()
        calculator.updateDisplay()

    })
