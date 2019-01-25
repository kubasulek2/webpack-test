import HelloButton from "./components/buttonComponent/helloButton";
import Header from "./components/heading/heading";
import _ from 'lodash';
console.log("aaa");
const button = new HelloButton();
const head = new Header();
head.render(_.upperFirst("application"));
button.render();

const body = document.querySelector('body');
const link = document.createElement('a');
link.href = 'image.html';
link.innerText = 'Check our page';
body.appendChild(link);

const obj = {
  a: 1,
  b: 2
};

console.log(_.includes(obj, 1));