import hello from './hello.png';

export const render = () => {
  const element = document.createElement('div');
  element.classList.add('title');
  // Add the image to our existing div
  const myImage = new Image(256, 256);
  myImage.src = hello;
  element.append(myImage);
  const welcome = 'Welcome to awesome project! 🚀';
  element.append(welcome);
  return element;
};
