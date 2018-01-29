var audio, playbtn, stopbtn, volumeslider;

function initAudioPlayer(){
	audio = new Audio();
	audio.src = "http://stream.basso.fi:8000/stream";
	audio.loop = true;
	audio.play();

	playbtn = document.getElementById("playbtn");
	stopbtn = document.getElementById("stopbtn");
	volumeslider = document.getElementById("volumeslider");

	playbtn.addEventListener("click", playAudio);
	stopbtn.addEventListener("click", stopAudio);
	volumeslider.addEventListener("mousemove", setvolume);

	function playAudio(){
		audio.play();
	}

	function stopAudio(){
		audio.pause();
	}

	function setvolume(){
	    audio.volume = volumeslider.value / 100;
  }
}

window.addEventListener("load", initAudioPlayer);
