let button1 = document.getElementById("btn1");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button1.style.display = "block";
  } else {
    button1.style.display = "none";
  }
};

button1.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let button2 = document.getElementById("btn2");

button2.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});