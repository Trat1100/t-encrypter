function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var key = "secret_key"; // It is a secret key
    var encryptedText = sjcl.encrypt(key, inputText);
    document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var key = "secret_key"; // It is also a secret key
    var decryptedText = sjcl.decrypt(key, inputText);
    document.getElementById("outputText").value = decryptedText;
}