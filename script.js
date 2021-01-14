document.getElementById('openCamera').addEventListener('click', e => openCamera(e));

function openCamera() {
	const localVideoElem = document.getElementById('localVideo');
	navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
		localVideoElem.srcObject = stream;
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