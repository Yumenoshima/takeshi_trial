import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'Takeshi'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    // add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
