const imgUrlInput = document.querySelector('#img-url-input');
const textTopInput = document.querySelector('#text-top-input');
const textBottomInput = document.querySelector('#text-bottom-input');
const submit = document.querySelector('#submit');
/* for potential use later:
const textTopSize = document.querySelector('#text-top-size');
const textBottomSize = document.querySelector('#text-bottom-size');
*/
const divForMemes = document.querySelector('#insert-memes-here');


let count = 1;
function appendMemeToDom() {
  const newMemeDiv = document.createElement('div');
  newMemeDiv.className = 'display-new-meme';

  const imgForMeme = document.createElement('img');
  imgForMeme.src = imgUrlInput.value;

  const newExButton = document.createElement('button');
  newExButton.className = 'delete-button';
  newExButton.setAttribute('onclick', 'deleteImg();')
  newExButton.innerText = 'x';

  /*debugger*/
  const textToAddToBottom = document.createElement('h3');
  textToAddToBottom.innerText = textBottomInput.value;

  const textToAddToTop = document.createElement('h3');
  textToAddToTop.innerText = textTopInput.value;

  /* THIS ID GENERATOR SHOULD WORK, TEST HER OUT*/
  debugger
  newMemeDiv.id = ('div-' + count);
  count++;


  newMemeDiv.appendChild(imgForMeme);
  newMemeDiv.appendChild(newExButton);
  newMemeDiv.appendChild(textToAddToBottom);
  newMemeDiv.appendChild(textToAddToTop);


  document.getElementById('insert-memes-here').appendChild(newMemeDiv);

  //Does this need to say return false?
  return false;
}

/*
function deleteImg() {
  this.parentElement.remove();
}
*/

/* THIS WORKS TO DELETE THE FIRST MEME, BUT NOT THE ONE YOU CLICK*/
function deleteImg() {
  const deleteButton = document.querySelector('.delete-button');
  deleteButton.parentElement.remove();
}


/*
(".delete-button").click(function() {
  $(this).parent().remove();
});
*/

/*POTENTIAL ALTERNATE METHOD THAT LOOKS PROMISING
var delt = document.getElementsByClassName("delt");

   function delt(event) {
       if (button.onclick === "Delete") {
       event.target.parentNode.remove();
     }
  }

   ul.addEventListener("click", delt);
   */
