const startButton = document.getElementById('start-button');
const overlay = document.getElementById('overlay');
const counterElement = document.getElementById('counter');
const memoryText = document.getElementById('memory-text');
const memoryImage = document.getElementById('memory-image');
const bgMusic = document.getElementById('bg-music');

const startDate = new Date('2024-06-03T16:31:00');

const memories = [
  { text: 'Fomos assistir o pôr do sol em São Thomé', image: 'sao_thome.jpg'},
  { text: 'Fomos assistir a queima da fogueira', image: 'fogueira.jpg'},

  { text: 'Te levei para conhecer a cachoeira (meu amor tentou catar peixinhos)', image: 'cachoeira_primeira_vez_2.jpg'}, 
  { text: 'E os nenens também foram junto', image: 'cachoeira_primeira_vez.jpg'}, 
  { text: 'Fomos em mais cachoeira', image: 'cachoeira_segunda_vez.jpg'}, 
  { text: 'Essa é só para dizer que meu amor fazendo biqiuinho fica ainda mais linda', image: 'cachoeira_segunda_vez_2.jpg'}, 
  { text: 'E fomos em mais cachoeira (amo uma água)', image: 'cachoeira_terceira_vez.jpg'}, 
  { text: 'Acho que meu amor não entendeu como funcionava e resolveu lavar roupa', image: 'cachoeira_lavando_roupa.jpg'}, 

  { text: 'Pegamos o carro e fomos dar um rolê pelo Rio', image: 'dirigindo_pelo_rio.jpg'},
  { text: 'Meu amor conheceu a praia', image: 'praia_barraca.jpg'},
  { text: 'E descobriu o que que é tomar um caldo, ou dois...', image: 'praia_dentro_da_agua.jpg'},
  { text: 'Conhecemos o Pão de Açúcar', image: 'pao_de_acucar.jpg'},
  { text: 'Passamos o fim da tarde no Arpoador', image: 'arpoador_juntas.jpg'},
  { text: 'E vimos um pôr do sol maravilhoso', image: 'arpoador_por_do_sol.jpg'},
  { text: 'Te apresentei o milho de praia', image: 'milho_de_praia_luana.jpg'},
  { text: 'Viciamos em milho de praia', image: 'milho_de_praia_juntas.jpg'},
  { text: 'Até roubamos milho pra fazer  milho de praia', image: 'roubando_milho.jpg'},
  { text: 'Fomos ver o Museu do Amanhã (esse não foi muito legal)', image: 'museu_do_amanha.jpg'},
  { text: 'Vimos muitos peixes', image: 'peixes.jpg'},
  { text: 'Até tubarão a gente viu', image: 'tubarao.jpg'},

  { text: 'Fomos curtir o carnaval em Ouro Preto', image: 'carnaval_praca.jpg'}, 
  { text: 'Fomos curtir a festa da espuma', image: 'carnaval_espuma.jpg'}, 
  { text: 'Que meu amor conseguiu colocar a gente pra dentro de graça (feliz aniversário amor)', image: 'carnaval_espuma_2.jpg'}, 
  { text: 'Fomos curtir um bloquinho', image: 'carnaval_bloco.jpg'}, 
  { text: 'Corremos bebadas pelas ladeiras de Ouro Preto (bebe e fica fitness?!)', image: 'carnaval_bebadas.jpg'}, 
  { text: 'Vem, vem, vem pra Jesus também, ele te ama', image: 'carnaval_vem_pra_jesus.jpg'}, 

  { text: 'Montamos massinha (pelo menos eu tentei)', image: 'massinhas.jpg'}, 
  { text: 'Montamos mini lego em homenagem aos nenéns', image: 'lego.jpg'},  
  { text: 'E também montamos lego de adulto', image: 'montar_movel.jpg'},  
  { text: 'Assistimos muuuuuuuitos filmes', image: 'cinema.jpg'},  
  { text: 'Jogamos video-game', image: 'video_game.jpg'},  
  { text: 'Caminhamos com os nenéns', image: 'caminhada_nenens.jpg'},

  { text: 'Fizemos várias sessões Master Chef', image: 'linguica_assada.jpg'},  
  { text: 'Meu amor me ensinou a fazer pão de queijo (finalmente sou uma mineira completa)', image: 'pao_de_queijo.jpg'},  
  { text: 'Fizemos guacamole', image: 'guacamole.jpg'}, 
  { text: 'Montamos um chocotone', image: 'chocotone.jpg'},
  { text: 'E acho que ele estava muito gostoso, né?', image: 'chocotone_carinha_suja.jpg'},
  { text: 'Até ovos de páscoa nos aventuramos a fazer', image: 'ovo_de_pascoa.jpg'},  
  { text: 'E não ficamos só em casa não, também saímos para comer (meu amor ama comer)', image: 'taboca.jpg'},  
  { text: 'E para beber também', image: 'bebida_patinho.jpg'},  
  { text: 'Comemos barca de açaí', image: 'barca_acai_1.jpg'},
  { text: 'E comemos mais barca de açaí', image: 'barca_acai_2.jpg'},
  { text: 'Taça de açaí também', image: 'acai_2_tacas.jpg'},
  { text: 'Açaí é muuuuuito bom', image: 'acai_tijela.jpg'},

  { text: 'Comemoramos o meu aniversário', image: 'aniversario_kassia.jpg'},
  { text: 'E também comemoramos o seu aniversário', image: 'aniversario_luana.jpg'}, 
  { text: 'Nos surpreendemos uma a outra no dia das namoradas', image: 'stitch.jpg'},

  { text: 'Levei a sério tratar meu amor como princesa e fiz massagem nos pés', image: 'massagem_pe.jpg'},
  { text: 'Levei café da manhã na cama', image: 'cafe_da_manha_pao_de_queijo_cafe_rosa.jpg'},
  { text: 'Recebi café da manhã na cama (também sou princesa)', image: 'cafe_da_manha_pao_cafe_cartinha.jpg'},
  { text: 'Esquentei seus pezinhos no frio', image: 'esquentar_pes.jpg'},
  { text: 'Até levei para conhecer um castelo', image: 'castelo.jpg'},

  { text: 'É muito bom sentir que existe alguém que divide o mesmo neurônio comigo', image: 'pirulito.jpg'},
  { text: 'É muito bom sentir que temos uma conexão forte e  gostosa', image: 'carnaval_cafe_das_flores_rindo.jpg'},
  { text: 'É muito bom sentir que sou muito amada pela pessoa que sou completamente apaixonada', image: 'desenho.jpg'},
  { text: 'Sou muito grata por você fazer parte da minha vida', image: 'espelho.jpg'},
  { text: 'Te quero patoda vida', image: 'patinho.jpg'},
  { text: 'Te amo muuuuuuuuito minha mamaquinha', image: 'mamaquinhas_aniversario.jpg'},
];

function updateCounter() {
  const now = new Date();
  const secondsTogether = Math.floor((now - startDate) / 1000);
  counterElement.textContent = `Em ${secondsTogether.toLocaleString()} segundos ao seu lado, vivi toda a magia que o amor pode oferecer... ❤️`;
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
