function annually() {
    document.getElementById("changeTextM").innerHTML = "$8.99/month";
    document.getElementById("changeTextY").innerHTML = "$199/month"
}

function monthly() {
    document.getElementById("changeTextM").innerHTML = "$0/month";
    document.getElementById("changeTextY").innerHTML = "$99/month"
}

function client1() {
    document.getElementById("name").innerHTML = "Tom Tomas Ceo";
    document.getElementById("im").src = "../pictures/clients/client-1.png";
    document.getElementById("text").innerHTML = "Donec ullamcorper nulla non metus auctor fringilla." +
        "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. " +
        "Cras mattis consectetur purus sit amet fermentum. Fusce dapibus."
}

function client2() {
    document.getElementById("name").innerHTML = "Jack Jackson DevOps";
    document.getElementById("im").src = "../pictures/clients/user-3.png";
    document.getElementById("text").innerHTML = "Bring to the table win-win survival strategies to ensure proactive domination.\n"+
        "                At the end of the day, going forward, a new normal that has. \n"+
        "                At the end of the day, going forward, a new normal that has."
}
