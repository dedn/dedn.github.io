(function () {

  var elementsImg = document.querySelectorAll('img');
  var startBtn = document.getElementById('start');
  var resetBtn = document.getElementById('reset');
  var grid = document.querySelector('grid');
  var width = 175;
  var myX = '';
  var myY = '';
  var whichArt = '';

  var init = function () {
    for (var n = 0; n < elementsImg.length; n++) {
      if (n <= 3) {
        elementsImg[n].style.left = (n) * width + 'px';
        elementsImg[n].style.top = 0;
      }
      if (n >= 4 && n <= 7) {
        elementsImg[n].style.left = (n - 4) * width + 'px';
        elementsImg[n].style.top = 131 + 'px';
      }
      if (n > 7 && n <= 12) {
        elementsImg[n].style.left = (n - 8) * width + 'px';
        elementsImg[n].style.top = 262 + 'px';
      }
      if (n > 11 && n <= 16) {
        elementsImg[n].style.left = (n - 12) * width + 'px';
        elementsImg[n].style.top = 393 + 'px';
      }
    }
  };

  startBtn.onclick = function () {
    for (var n = 0; n < elementsImg.length; n++) {
      if (n <= 3) {
        elementsImg[n].style.left = (n) * width + randomInteger(750, 1000) + 'px';
        elementsImg[n].style.top = randomInteger(0, 400) + 'px';
      }
      if (n >= 4 && n <= 7) {
        elementsImg[n].style.left = (n - 4) * width + randomInteger(750, 1000) + 'px';
        elementsImg[n].style.top = randomInteger(0, 400) + 'px';
      }
      if (n > 7 && n <= 12) {
        elementsImg[n].style.left = (n - 8) * width + randomInteger(750, 1000) + 'px';
        elementsImg[n].style.top = randomInteger(0, 400) + 'px';
      }
      if (n > 11 && n <= 16) {
        elementsImg[n].style.left = (n - 12) * width + randomInteger(750, 1000) + 'px';
        elementsImg[n].style.top = randomInteger(0, 400) + 'px';
      }
    }
  };

  function resetZ() {
    var elements = document.querySelectorAll('img');
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    }
  }

  function moveStart(e) {
    whichArt = e.target;
    myX = e.offsetX;
    myY = e.offsetY;
    resetZ();
    whichArt.style.zIndex = 10;
  }

  function moveDragOver(e) {
    e.preventDefault();
  }

  function moveDrop(e) {
    e.preventDefault();
    whichArt.style.left = e.pageX - myX + 'px';
    whichArt.style.top = e.pageY - myY + 'px';
  }

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  resetBtn.onclick = init;
  window.onload = init;
  document.querySelector('body').addEventListener('dragstart', moveStart, false);
  document.querySelector('body').addEventListener('dragover', moveDragOver, false);
  document.querySelector('body').addEventListener('drop', moveDrop, false);

})();