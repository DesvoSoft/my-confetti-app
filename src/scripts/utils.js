import confetti from 'canvas-confetti';
import robloxUh from '../assets/sounds/taylor.mp3';


export const runEmoji = () => {
    var scalar = 3;
    var bear = confetti.shapeFromText({ text: '18', scalar }); //🐻1️⃣8️⃣
    var wolf = confetti.shapeFromText({ text: '💚', scalar });
    var wan = confetti.shapeFromText({ text: '❤️', scalar });
    
    var defaults = {
      spread: 360, //360
      ticks: 6000, //original value 60
      gravity: 0, // 2
      decay: 0.96,
      startVelocity: 20,
      shapes: [bear,wan, wolf],
      scalar
    };

    const sound = new Audio(robloxUh);
    sound.play();
    
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 50
      });
    
      confetti({
        ...defaults,
        particleCount: 5,
        flat: true
      });
    
      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ['circle']
      });
    }
    
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 100);
};

//Realistic effect
export const runRealistic = () => {
    var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}