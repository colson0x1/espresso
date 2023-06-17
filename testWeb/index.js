document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const { value } = document.querySelector('input');

  const header = document.querySelector('h1');
  if (value.includes('@')) {
    header.classList.remove('netflix-red');
    header.classList.add('google-blue');
    header.innerHTML = 'AWESOME 🔥';
  } else {
    header.classList.remove('google-blue');
    header.classList.add('netflix-red');
    header.innerHTML = 'Invalid email 😂';
  }
});

// window.stuffLoaded = true;

