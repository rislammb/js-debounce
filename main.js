const btn = document.getElementById('btn');
const log = document.getElementById('log');

const deBounce = (cb, delay) => {
  let timeoutId = null;
  return function(e) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function() {
      cb(e);
    }, delay);
  }
}

btn.addEventListener('click', deBounce((e) => {
  log.innerHTML = 'Finally clicked after delay time!'
  console.log('clicked', e);
  setTimeout(() => {
    log.innerHTML = '';
  }, 4500)
}, 500))