document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelectorAll('.ripple');

  function makeRipple(e) {
    let circle = document.createElement('div');
    let circleColor = this.getAttribute('rColor');
    if( circleColor != null) {circle.style.backgroundColor = circleColor}
    let d = Math.max(this.clientWidth, this.clientHeight);
    circle.classList.add('rippleCircle');
    circle.style.width = circle.style.height = `${d}px`;
    circle.style.top = e.offsetY - d/2 + 'px';
    circle.style.left = e.offsetX - d/2 + 'px';
    this.appendChild(circle);
  }

  for(let i = 0; i < button.length; i++) {
    let mask = document.createElement('div');
    mask.classList.add('rippleMask');
    button[i].style.position = 'relative';
    button[i].style.overflow = 'hidden';
    button[i].style.outline = 'none';
    button[i].appendChild(mask);
    button[i].addEventListener('click', makeRipple);
    button[i].addEventListener('animationend', function() {
      let oldCircle = this.querySelector('.rippleCircle');
      this.removeChild(oldCircle);
    });
  }
}, false);