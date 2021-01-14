let streamGlobal;

document.getElementById('openCamera').addEventListener('click', e => openCamera(e));
document.getElementById('stopCamera').addEventListener('click', e => stopCamera(e));

function stopCamera() {
	if (!streamGlobal) {
		console.warn('no stream to stop!');
		return;
	}
	streamGlobal.getTracks().forEach(function(track) {
		track.stop();
	});  
}

function openCamera() {
	const localVideoElem = document.getElementById('localVideo');
	navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
		localVideoElem.srcObject = stream;
		streamGlobal = stream;
	}).catch(e => {
		console.error(e);
		const errorElem = document.getElementById('error');
		errorElem.innerText = e;
	});
}