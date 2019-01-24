import './button.scss'
class helloButton {
  btnClass = 'btn';
  render() {
    const button = document.createElement('button');
    button.classList.add(this.btnClass);
    button.innerText = "Hello!";
    const body = document.querySelector('body');
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerText = "Hello!!";
      body.appendChild(p)

    };
    body.appendChild(button);
  }
}
export default helloButton;
