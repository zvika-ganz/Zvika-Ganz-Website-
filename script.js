document.getElementById('copyEmail').addEventListener('click', function() {
  navigator.clipboard.writeText('zvika.ganz@gmail.com');
  this.textContent = 'Copied!';
  setTimeout(()=>{ this.textContent = 'Copy Email'; },1500);
});