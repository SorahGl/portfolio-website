
let image1 = document.getElementById('gitbash');
let image2 = document.getElementById('wordle');
let image3 = document.getElementById('wine-festival');
let button1 = document.getElementById('button1');
//let button2 = document.getElementById('button2');



function seeMore() {
    button1.innerHTML === 'See Less'? button1.innerHTML = 'See More Projects' : button1.innerHTML = 'See Less' ;
    //button1.setAttribute('id', 'button2');
    (image1.hidden === false)? image1.hidden = true : image1.hidden = false;
    image2.hidden === false? image2.hidden = true : image2.hidden = false;
    image3.hidden === false? image3.hidden = true : image3.hidden = false;
    
    console.log('hi');
}


function buttonEvents(button1) {
  button1.addEventListener('click', seeMore);
}    


buttonEvents(button1);