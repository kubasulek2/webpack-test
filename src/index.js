import helloButton  from "./components/buttonComponent/helloButton";
import header  from "./components/heading/heading";
import { addImage } from "./addimage";

const buton = new helloButton();
const head = new header();
head.render();
addImage();
buton.render();
console.log('aaa');

