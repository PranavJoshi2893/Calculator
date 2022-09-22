const numberButton=document.getElementsByClassName('number');
const operationButton=document.getElementsByClassName('operation');
const equalsButton=document.getElementsByClassName('equals');
const deleteButton=document.getElementsByClassName('delete');
const allClearButton=document.getElementsByClassName('all-clear');
const previousOperandTextElement=document.getElementById('previousOperand');
const currentOperandTextElement=document.getElementById('currentOperand"');

[...numberButton].forEach(x => {
    x.addEventListener('click', function() {
      myFunction(this);
    })
  });

  function myFunction(el) {
    console.log(el.innerHTML);
  }  