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
    const audio = new Audio("loveFeliz.mp3"); 
    
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
/*
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
*/

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  document.body.appendChild(balloon);

  const hue = Math.random() * 360;
  const size = Math.random() * 20 + 30;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size * 1.3}px`;
  balloon.style.background = `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.8), transparent),
                             radial-gradient(circle at 70% 80%, rgba(255,255,255,0.4), transparent),
                             hsl(${hue}, 100%, 50%)`;
  balloon.style.left = `${Math.random() * 100}vw`;
  balloon.style.top = `-50px`;
  balloon.style.animationDuration = `${Math.random() * 3 + 4}s`;
  
  const knot = document.createElement("div");
  knot.classList.add("knot");
  knot.style.background = `hsl(${hue}, 100%, 40%)`;
  balloon.appendChild(knot);
  
  const string = document.createElement("div");
  string.classList.add("string");
  balloon.appendChild(string);
  
  setTimeout(() => {
      balloon.remove();
  }, 5000);
}

setInterval(createBalloon, 550);