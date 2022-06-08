function generateQRCode() {
	var data = document.getElementById("data").value
	if (data != "") {
		eel.generate_qr(data)(setImage)
	}
}

function setImage(base64) {
	document.getElementById("qr").src = base64
}