const startButton = document.getElementById('start-button');
const overlay = document.getElementById('overlay');
const counterElement = document.getElementById('counter');
const memoryText = document.getElementById('memory-text');
const memoryImage = document.getElementById('memory-image');
const bgMusic = document.getElementById('bg-music');

const startDate = new Date('2024-06-03T16:31:00');

const memories = [
  { text: 'Aquele dia incrível na cachoeira 💦', image: 'cachoeira.jpg' },
  { text: 'Nosso jantar romântico sob as estrelas ✨', image: 'jantar.jpg' },
  { text: 'O carnaval mais divertido da vida 💃', image: 'carnaval.jpg' },
  { text: 'Aquele dia ensolarado na praia 🏖️', image: 'praia.jpg' },
  { text: 'Nossa viagem cheia de descobertas 🌍', image: 'viagem.jpg' }
];

function updateCounter() {
  const now = new Date();
  const secondsTogether = Math.floor((now - startDate) / 1000);
  counterElement.textContent = `💖 Já se passaram ${secondsTogether.toLocaleString()} segundos desde que começamos nossa história. E nesse tempo, vivemos momentos inesquecíveis como...`;

  // Aplica a animação de pulso
  counterElement.classList.remove('pulse'); // Remove se já tiver
  void counterElement.offsetWidth;          // Força reflow para reiniciar a animação
  counterElement.classList.add('pulse');    // Reaplica a classe
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(text) {
  memoryText.textContent = '';
  for (let i = 0; i < text.length; i++) {
    memoryText.textContent += text[i];
    await sleep(50);
  }
}

async function showImage(src) {
  memoryImage.style.opacity = 0;
  await sleep(500);
  memoryImage.src = `assets/${src}`;
  await sleep(100);
  memoryImage.style.opacity = 1;
  await sleep(3000); // Tempo que a imagem fica
  memoryImage.style.opacity = 0;
  await sleep(1000); // Tempo até a próxima memória
}

async function startMemorySequence() {
  await sleep(3000); // Espera inicial para destacar o contador

  let index = 0;
  while (true) {
    const { text, image } = memories[index];
    await typeText(text);
    await showImage(image);
    memoryText.textContent = '';
    index = (index + 1) % memories.length;
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (10 + Math.random() * 5) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 400);

// Faz o volume subir suavemente até 1
function fadeInAudio(audio) {
  let volume = 0;
  audio.volume = volume;
  const interval = setInterval(() => {
    volume += 0.02;
    if (volume >= 1) {
      audio.volume = 1;
      clearInterval(interval);
    } else {
      audio.volume = volume;
    }
  }, 200);
}

startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  bgMusic.play();
  fadeInAudio(bgMusic);
  counterElement.classList.remove('hidden');
  setInterval(updateCounter, 1000);
  updateCounter();
  startMemorySequence();
});
