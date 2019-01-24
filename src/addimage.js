import fridge from './fridge.jpg'

export function addImage() {
  const img = document.createElement('img');
  img.alt = 'Me';
  img.src = fridge;
  img.width = '300';

  const body = document.querySelector('body');
  body.appendChild(img);

}