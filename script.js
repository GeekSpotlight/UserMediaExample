document.getElementById('openCamera').addEventListener('click', e => openCamera(e));
document.getElementById('stopCamera').addEventListener('click', e => stopCamera(e));
let stream;

function stopCamera() {
	if (!stream) {
		console.warn('no stream to stop!');
		return;
	}
	stream.getTracks().forEach(function(track) {
		track.stop();
	});  
}

function openCamera() {
	const localVideoElem = document.getElementById('localVideo');
	navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
		localVideoElem.srcObject = stream;
		stream = stream;
	}).catch(e => {
		console.error(e);
		const errorElem = document.getElementById('error');
		errorElem.innerText = e;
	});
}

function getMedia() {
	navigator
	.mediaDevices
	.getUserMedia({video: true, audio: true})
	.then(stream => {
	    console.log("success!")
	})
	.catch(e => {
	    console.log("e: ", e);
	});
}