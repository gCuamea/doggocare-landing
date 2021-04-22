const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

window.onscroll = function () {
  let nav = document.getElementById('nav');
  if (pageYOffset <= vh) nav.classList.remove('darkbg');
  else nav.classList.add('darkbg');
};
