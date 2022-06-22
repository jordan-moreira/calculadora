const previousElement=document.querySelector("[previous-operand]"),currentElement=document.querySelector("[current-operand]"),clearbutton=document.querySelector("[clear]"),deletebutton=document.querySelector(".button-delete"),numberbuttons=document.querySelectorAll("[number]"),operationbuttons=document.querySelectorAll("[operand]"),equalsbutton=document.querySelector("[equals]");class Calculator{constructor(a,b){this.previoustext=a,this.currenttext=b,this.clear()}appendNumber(a){this.currentoperand.includes(".")&&"."==a||(this.currentoperand=`${this.currentoperand}${a.toString()}`)}calculate(){let a;const b=parseFloat(this.previousoperand),c=parseFloat(this.currentoperand);if(!(isNaN(b)||isNaN(c))){switch(this.operation){case"+":a=b+c;break;case"-":a=b-c;break;case"x":a=b*c;break;case"\xF7":a=b/c;break;default:return;}this.currentoperand=a,this.previousoperand="",this.operation=void 0}}choseOperation(a){""!=this.previousoperand&&calculator.calculate(),this.operation=a,this.previousoperand=this.currentoperand,this.currentoperand=""}clear(){this.currentoperand="",this.previousoperand="",this.operation=void 0}delete(){this.currentoperand=this.currentoperand.toString().slice(0,-1)}updateDisplay(){this.previoustext.innerText=`${this.previousoperand} ${this.operation||""}`,this.currenttext.innerText=this.currentoperand}}const calculator=new Calculator(previousElement,currentElement);for(let a of numberbuttons)a.addEventListener("click",()=>{calculator.appendNumber(a.innerText),calculator.updateDisplay()});for(let a of operationbuttons)a.addEventListener("click",()=>{calculator.choseOperation(a.innerText),calculator.updateDisplay()});equalsbutton.addEventListener("click",()=>{calculator.calculate(),calculator.updateDisplay()}),clearbutton.addEventListener("click",()=>{calculator.clear(),calculator.updateDisplay()}),deletebutton.addEventListener("click",()=>{calculator.delete(),calculator.updateDisplay()});