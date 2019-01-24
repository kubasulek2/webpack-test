import helloButton  from "./components/buttonComponent/helloButton";
import header  from "./components/heading/heading";
import _ from 'lodash'

const buton = new helloButton();
const head = new header();
head.render(_.upperFirst("application"));
buton.render();

const body = document.querySelector('body');
const link = document.createElement('a');
link.href = 'image.html';
link.innerText = 'Check our page';
body.appendChild(link);

const obj = {
  a: 1,
  b: 2,
};

console.log(_.includes(obj, 1));