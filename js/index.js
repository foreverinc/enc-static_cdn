const encode = document.getElementById('encode');

function toggleFileInput(selectElement) {
	const fileInput = document.getElementById("formFile");
	const textInput = document.getElementById("Text");
	fileInput.disabled = selectElement.value !== "1";
	textInput.disabled = selectElement.value !== "2";

	if (selectElement.value === "2") {
		textInput.required = true;
	} else {
		textInput.required = false;
	}
}
