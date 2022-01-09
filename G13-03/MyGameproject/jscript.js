let audio=new Audio('ninjaA.mp4');
document.getElementsByClassName('sound')
[0].addEventListener('click',(e) => {
    if(e.target.innerText === "play_disabled"){
        audio.play();
        audio.loop=true;
        e.target.innerHTML ="play_arrow";
    }else{
        audio.pause();
        audio.currentTime=0;
        e.target.innerHTML="play_disabled";
    }
})
cross = true; 
score = 0; 
document.onkeydown = function(e) {
console.log("Key code is:",e.keyCode); 
if (e.keyCode == 38) { 
player = document.querySelector('.player'); 
player.classList.add('animateplayer'); 
setTimeout(() => { 
player.classList.remove('animateplayer'); 
    }, 700); 

     } 
if (e.keyCode == 37) { 

      player = document.querySelector('.player'); 

  playerx = parseInt(window.getComputedStyle( 

                 player, null).getPropertyValue('left')); 

  

             player.style.left = (playerx - 112) + "px"; 

        } 

        if (e.keyCode == 39) { 

             player = document.querySelector('.player'); 

  

             playerx = parseInt(window.getComputedStyle( 

                 player, null).getPropertyValue('left')); 

              

             player.style.left =  playerx + 112 + "px"; 

        } 

    } 

    setInterval(() => { 

         player = document.querySelector('.player'); 

        gameover = document.querySelector('.gameover'); 

        obstacle = document.querySelector('.obstacle'); 

  

        dx = parseInt(window.getComputedStyle( 

             player, null).getPropertyValue('left')); 

  

        dy = parseInt(window.getComputedStyle( 

             player, null).getPropertyValue('bottom')); 

  

        ox = parseInt(window.getComputedStyle( 

            obstacle, null).getPropertyValue('left')); 

  

        oy = parseInt(window.getComputedStyle( 

            obstacle, null).getPropertyValue('bottom')); 

  

        offsetx = Math.abs(dx - ox); 

        offsety = Math.abs(dy - oy); 

  

        console.log(offsetx, offsety); 

  

        if (offsetx < 120 && offsety <= 144) { 

            if (score != 0) 

                scorecount.innerHTML = "Your score : " + score; 

            gameover.style.visibility = 'visible'; 
			 

            obstacle.classList.remove('animateobstacle'); 

        } else if (offsetx < 125 && cross) { 

            score += 1; 

            updateScore(score); 

            cross = false; 

            setTimeout(() => { 

                cross = true; 

            }, 1000); 

            setInterval(() => { 

                obsanidur = parseFloat(window 

                .getComputedStyle(obstacle, null) 

                .getPropertyValue('animation-duration')); 

  

                obstacle.style.animationDuration 

                    = obsanidur - 0.01 + 's'; 

            }, 500); 

        } 

    }, 10); 

  

    function updateScore(score) { 

        scorecount.innerHTML = "Your score : " + score; 

    } 