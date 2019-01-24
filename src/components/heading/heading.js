import './heading.scss'
class Heading {
  render(){
    const body = document.querySelector('body');
    const header = document.createElement("header");
    const headerText = document.createElement("h1");

    header.classList.add("header");
    headerText.innerText = "this is heading";
    header.appendChild(headerText);
    body.appendChild(header);
    console.log('aaa');

  }
}

export default Heading;