window.onload = function() {
    const play = document.querySelector(".play");
    const pause = document.querySelector(".pause");
    
    pause.style.display = "none"
    //  Menambahkan event listener untuk mendeteksi klik
    play.addEventListener("click", function () {
      var audio = document.getElementById("audio");
      var playPromise = audio.play();
      play.style.display = "none"
      pause.style.display = "block"
    });
    
    pause.addEventListener("click", function () {
      var audio = document.getElementById("audio");
      var playPromise = audio.pause();
      play.style.display = "block"
      pause.style.display = "none"
    });
  }