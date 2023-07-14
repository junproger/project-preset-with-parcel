import { render } from './render';

const root: HTMLElement = document.body;
root.className = 'root';

const h1: HTMLHeadingElement = document.createElement('h1');
h1.textContent = 'The Project Started!';

root.append(h1);
root.append(render());
