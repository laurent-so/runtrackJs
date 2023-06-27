var textarea = document.getElementById("keylogger");

function captureKeystroke(event) {
    var key = event.key;
    if (key.match(/[a-z]/i)) {
        if (document.activeElement === textarea) {
            textarea.value += key + key;
        } else {
            textarea.value += key;
        }
    }
}
