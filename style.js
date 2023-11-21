console.log("I'm working");


let image1 = document.getElementById('gitbash');
let image2 = document.getElementById('wordle');
let image3 = document.getElementById('wine-festival');
let button = document.getElementById('button1');
let button2 = document.getElementById('button2');



function seeMore() {
    button.innerHTML = 'See Less';
    button.setAttribute('id', 'button2')
    image1.hidden = false;
    image2.hidden = false;
    image3.hidden = false;
    console.log('hi');
}

function seeLess() {
    button2.innerHTML = 'See More Projects';
    button2.setAttribute('id', 'button1')
    image1.hidden = true;
    image2.hidden = true;
    image3.hidden = true;
    console.log('hello');
}

function buttonEvents(button) {
  button.addEventListener('click', seeMore);
}    

function otherButtonEvents(button2) {
  button.addEventListener('click', seeLess);
}

buttonEvents(button);
otherButtonEvents(button2);

  
