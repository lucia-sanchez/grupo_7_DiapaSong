const caja = document.getElementById('caja');

document.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;

  caja.style.left = x + 'px';
  caja.style.top = y + 'px';
});

