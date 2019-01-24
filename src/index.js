import helloButton  from "./components/buttonComponent/helloButton";
import header  from "./components/heading/heading";
import { addImage } from "./addimage";

const buton = new helloButton();
const header = new header();
header.render();
addImage();
buton.render();
console.log('aaa');

