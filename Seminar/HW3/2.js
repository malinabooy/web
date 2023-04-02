var bttn = document.getElementById("submitButton");

function showAlert() {
    var n = document.getElementById("name").value;
    alert("Привет " + n + "!");
}

bttn.onclick = showAlert;