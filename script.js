document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("love.mp3"); 
    
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };
    
    playAudio();
    
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  document.body.appendChild(petal);
  

  const size = Math.random() * 15 + 20;
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 0.7}px`;
  petal.style.borderRadius = `${size}px ${size * 0.5}px`;
  petal.style.backgroundColor = `rgb(255, ${Math.random() * 100 + 100}, ${Math.random() * 100 + 150})`;
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.top = `-10px`;
  petal.style.animationDuration = `${Math.random() * 3 + 3.5}s`;
  
  setTimeout(() => {
      petal.remove();
  }, 5000);
}

setInterval(createPetal, 150);