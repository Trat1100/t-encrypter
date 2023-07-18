function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var key = "secret_key"; // It is a secret key
    var encryptedText = sjcl.encrypt(key, inputText);
    document.getElementById("outputText").value = encryptedText;

    let btn = document.querySelectorAll(".btn");
btn.forEach(btn => {
    btn.onclick = function(e){
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        let color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        ripples.style.borderColor = color;
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 2000);
    }
})
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var key = "secret_key"; // It is also a secret key
    var decryptedText = sjcl.decrypt(key, inputText);
    document.getElementById("outputText").value = decryptedText;

    let btn = document.querySelectorAll(".btn");
btn.forEach(btn => {
    btn.onclick = function(e){
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        let color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        ripples.style.borderColor = color;
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 2000);
    }
})
}