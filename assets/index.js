function writeMessage(){
    var name = document.getElementById('personName').value;
    const nametag = document.getElementById("message")
    nametag.innerHTML = "Hello " + name + ", welcome to the bootcamp";
}