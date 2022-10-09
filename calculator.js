let display = document.getElementById("display");

const calculatedFunction = (e) => {

  switch (e.target.innerText) {
    case "c":
      display.innerText = "";
      break;
    case "←":
      if (display.innerText) {
        display.innerText = display.innerText.slice(0, -1);
      }
      break;

    case "=":
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
      break;

    default:
      const fullString  = display.innerText
      const lastCharacter = fullString[fullString.length-1]
      if (lastCharacter && isNaN(lastCharacter)) {
        
        if(lastCharacter===e.target.innerText){
          return
        }
        if(isNaN(e.target.innerText)){
          display.innerText = display.innerText.slice(0, -1);
        }
        // display.innerText.slice(0, -1);
      }
      display.innerText += e.target.innerText;
  }
};

const buttonsH = document.getElementsByClassName("button");
let buttons = Array.from(buttonsH); // convert collection to array

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    calculatedFunction(e);
  });
});
