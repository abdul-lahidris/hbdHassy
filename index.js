$("#slideshow > div:gt(0)").hide();

let slideCount = document.getElementById('slideshow').children.length;
let slideTempCount = slideCount;
var btnCount = null;
var playBtn = document.getElementById('playBtn');
var slide = null;

function startMessage(){
    playAudio();
    slide = setInterval(function() { 
        if(btnCount != null)
            clearInterval(btnCount);
        $('#slideshow > div:first')
        .fadeOut(1000)
        .next().delay(1000)
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
        slideTempCount--;
        if(slideTempCount == 0){
            clearInterval(slide);
            // $("#slideshow > div:gt(0)").hide();
            // $("#playBtn").show();
            playAudio();
            playBtn.textContent = "Open";
            slideTempCount = slideCount;
        }
      }, 3000);  
      
}

  // Audio
function playAudio() {
    // Check for audio element support.  

    if (window.HTMLAudioElement) {
        try {
            var oAudio = document.getElementById('myaudio');
            // Tests the paused attribute and set state.
            if (oAudio.paused) {
                //oAudio.loop = true;
                oAudio.play();
                var count = 3;
                btnCount = setInterval(function() { 
                    if(count===0)
                        count = 3;
                    // $('#counter').text(`${count}`);
                    playBtn.textContent = `${count}`;
                    count--;
                }, 1000);
                // btn.textContent = "Pause";
            }
            else {
                oAudio.pause();
                oAudio.currentTime = 0;
                // btn.textContent = "Play";
            }
        }
        catch (e) {
            // Fail silently but show in F12 developer tools console
            if (window.console && console.error("Error:" + e));
        }
    }
}
