import fridge from '../../fridge.jpg';


 class addImage {
  render() {
    const img = document.createElement('img');
    img.alt = 'Me';
    img.src = fridge;
    img.width = '300';

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}
export default addImage