$("#slideshow > div:gt(0)").hide();

function startMessage(){
    playAudio();
    setInterval(function() { 
        $('#slideshow > div:first')
        .fadeOut(1000)
        .next().delay(1000)
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
      }, 3000);    
      location.reload();
}
  // Audio
function playAudio() {
    // Check for audio element support.
    var playBtn = document.getElementById('playBtn');
    var count = 3;
    setInterval(function() { 
        if(count===0)
            count = 3;
        // $('#counter').text(`${count}`);
        playBtn.textContent = `${count}`;
        count--;
    }, 1000);

    if (window.HTMLAudioElement) {
        try {
            var oAudio = document.getElementById('myaudio');
            // Tests the paused attribute and set state.
            if (oAudio.paused) {
                oAudio.loop = true;
                oAudio.play();
                // btn.textContent = "Pause";
            }
            else {
                oAudio.pause();
                // btn.textContent = "Play";
            }
        }
        catch (e) {
            // Fail silently but show in F12 developer tools console
            if (window.console && console.error("Error:" + e));
        }
    }
}
