const imgUrlInput = document.querySelector('#img-url-input');
const textTopInput = document.querySelector('#text-top-input');
const textBottomInput = document.querySelector('#text-bottom-input');
const submit = document.querySelector('#submit');
/* for potential use later:
const textTopSize = document.querySelector('#text-top-size');
const textBottomSize = document.querySelector('#text-bottom-size');
*/
const divForMemes = document.querySelector('#insert-memes-here');

function appendMemeToDom() {
  const newMemeDiv = document.createElement('div');
  newMemeDiv.className = 'display-new-meme';

  const imgForMeme = document.createElement('img');
  imgForMeme.src = imgUrlInput.value;

  const newExButton = document.createElement('button');
  newExButton.className = 'delete-button';
  newExButton.setAttribute('onclick', 'deleteImg();')
  newExButton.innerText = 'x';

  const textToAddToBottom = document.createElement('p');
  /*DO I WANT MY TEXT ELEMENTS TO BE IN Ps*/
  textToAddToBottom.innerText = textBottomInput.value;


  newMemeDiv.appendChild(imgForMeme);
  newMemeDiv.appendChild(newExButton);
  newMemeDiv.appendChild(textToAddToBottom);

  document.getElementById('insert-memes-here').appendChild(newMemeDiv);

  //Does this need to say return false?
  return false;
}

/* NEED TO ACCESS THE CORRECT IMAGE
function deleteImg() {

  const exThatWasClicked =
  const specificImgToDelete =

  return false;
}
*/