document.querySelector('.navbar-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });

const circle = document.querySelector('.circle');
let isDragging = false;
let lastX, lastY;

circle.addEventListener('mousedown', e => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

circle.addEventListener('mousemove', e => {
  if (isDragging) {
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    const newLeft = circle.offsetLeft + deltaX;
    const newTop = circle.offsetTop + deltaY;
    circle.style.left = newLeft + 'px';
    circle.style.top = newTop + 'px';
    lastX = e.clientX;
    lastY = e.clientY;
  }
});

circle.addEventListener('mouseup', e => {
  isDragging = false;
});

let ESP_IP = "192.168.238.155"
document.getElementById("50").addEventListener("click", () => {
    fetch("http://"+ ESP_IP +"/light_dimmer?value=50")
})
document.getElementById("150").addEventListener("click", () => {
    fetch("http://"+ ESP_IP +"/light_dimmer?value=150")
})
document.getElementById("255").addEventListener("click", () => {
    fetch("http://"+ ESP_IP +"/light_dimmer?value=255")
})

document.getElementById("play-btn").addEventListener("click", () => {
  let i = 0
  while ( i < 10){

    try{
      fetch("http://"+ ESP_IP +"/sound_on")
    }catch(error){
      console.log(error)
    }
    i++;
  }
})
