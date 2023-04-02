var bttn = document.getElementById("submitButton");
function showAlert(value) {
    let far = (9 / 5) * parseInt(document.getElementById("градусы").value) + 32;
    alert(far = far.toFixed(1))
}
bttn.onclick = showAlert;