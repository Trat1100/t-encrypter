function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var key = "secret_key"; // It is a secret key
    var encryptedText = sjcl.encrypt(key, inputText);
    document.getElementById("outputText").value = encryptedText;
}