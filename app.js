let display = document.getElementById('display');
let currentInput = '';
let result = null;
function appendCharacter(char) {
    currentInput+=char;  
  display.value= currentInput
}

function calculate(){
  let result= eval(display.value);
  currentInput='';
  currentInput=result;
  if(result!==Infinity){
    display.value=result;
  }else{
    alert("cant divide by zero");
    result='';
  display.value='';
  currentInput='';
  }
}

function clearDisplay() {
  result='';
  currentInput='';
  display.value='';
}

document.addEventListener("keydown",(e)=>{
  if(e.key==1){
    appendCharacter('1');
  } else if(e.key==2){
    appendCharacter('2');
  }else if(e.key==3){
    appendCharacter('3');
  } else if(e.key==4){
    appendCharacter('4');
  }else if(e.key==5){
    appendCharacter('5');
  } else if(e.key==6){
    appendCharacter('6');
  }else if(e.key==7){
    appendCharacter('7');
  } else if(e.key==8){
    appendCharacter('8');
  }else if(e.key=='9'){
    appendCharacter('9');
  } else if(e.key==0){
    appendCharacter('0');
  }else if(e.key==='Delete'){
    clearDisplay();
  } else if(e.key==='+'){
    appendCharacter('+');
  }else if(e.key==='-'){
    appendCharacter('-');
  } else if(e.key==='*'){
    appendCharacter('*');
  }else if(e.key==='/'){
    appendCharacter('/');
  }else{
    calculate();
  }
})
