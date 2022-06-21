function writeMessage(){
    var name = document.getElementById('personName').value;
    const nametag = document.createElement("p")
    nametag.innerHTML = "Hello " + name + ", welcome to the bootcamp";
    document.body.append(nametag)
}