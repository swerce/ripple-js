function createRipple(element) {
  if (element.getElementsByClassName('ripple').length > 0) {
    element.removeChild(element.childNodes[1]);
  }

  var circle = document.createElement('div');
  element.appendChild(circle);

  var d = Math.max(element.clientWidth, element.clientHeight);
  circle.style.width = circle.style.height = d + 'px';

  circle.style.left = '0';
  circle.style.top = '0';

  circle.classList.add('ripple');
}

document.addEventListener('click', function (event) {
  var target = event.target;

  if (
    target.tagName === 'BUTTON' ||
    (target.tagName === 'A' && target.classList.contains('ripple-effect'))
  ) {
    createRipple(target);
  }
});
