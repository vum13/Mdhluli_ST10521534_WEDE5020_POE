const canvas = document.getElementById('burnCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

let particles = [];

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

 class Ember{
  constructor(x,y){
    this.x= x;
    this.y= y;
    this.size= Math.random()*6 + 2;
    this.speedX= (Math.random() - 0.5) * 4;
    this.speedY= -Math.random() * 6-2;
    this.life = 100;
    this.decay = Math.random() * 2 + 1;
    this.color = `hsl(${Math.random() * 40 + 10}, 100%, 50%)`;
  }

  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= this.decay;
  }

  draw(){
    if (!ctx) return;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#ff4500';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI *2);
    ctx.fill();
    ctx.shadowBlur= 0;
  }
 }

function initEmbers() {
  particles = [];
  for (let i = 0; i < 400; i++) {
    particles.push(new Ember(Math.random() * canvas.width, canvas.height + Math.random() * 50));
  }
}

function animateEmbers() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles = particles.filter((particle) => {
    particle.update();
    particle.draw();
    return particle.life > 0;
  });

  if (particles.length > 0) {
    requestAnimationFrame(animateEmbers);
  } else {
    canvas.style.display = 'none';
  }
}

document.getElementById('myForm').addEventListener("submit", function(event){
event.preventDefault();

const Name= document.getElementById('name').value.trim();
const email= document.getElementById('email').value.trim();
const phone= document.getElementById('phone').value.trim();
const service= document.getElementById('service').value.trim();
const message= document.getElementById('message').value.trim();



//clear old errors
document.getElementById('nameError').innerHTML = "";
document.getElementById('emailError').innerHTML = "";
document.getElementById('phoneError').innerHTML = "";
document.getElementById('serviceError').innerHTML="";
document.getElementById('messageError').innerHTML="";

 // Name validation
  if (Name === "") {
    document.getElementById('nameError').innerHTML = "Please enter your name";
    return;
  }
// Email validation
 const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').innerHTML = "Please enter a valid email address";
    return;
  }

// cellphone validation
const phonePattern = /^\d{10}$/; 
if (!phonePattern.test(phone)) {
    document.getElementById('phoneError').innerHTML = "Please enter a valid phone number";
    return;
}

///service of intrest validation
if (service === ""){
    document.getElementById('serviceError').innerHTML = "please select a service";
    return;
}

//message validation
if (message === ""){
    document.getElementById('messageError').innerHTML = "Tell us how you would like us to assist you/ what exactly you are looking for";
    return;
}

// trigger burn effect

document.body.classList.add('burning');

if (canvas){
  canvas.style.display = 'block';
  resizeCanvas();
  initEmbers();
  animateEmbers();
}

setTimeout(() => {
  alert("Qoute request successfully submitted!");
}, 2000);

});