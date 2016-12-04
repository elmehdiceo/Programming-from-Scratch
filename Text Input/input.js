var textinput;

function setup(){
  noCanvas();
  textinput = createInput();

  textinput.changed(newText);
  textinput.input(newTyping);
}

function newText() {
  createP(textinput.value());
  //console.log(textinput.value());

}

function newTyping() {
  createP(textinput.value());
  //console.log(textinput.value());

}
