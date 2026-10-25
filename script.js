//your JS code here. If required.
function getURLInfo() {
    const url = window.location.href;
    const length = url.length;

    const letters = url.replace(/[^a-zA-Z]/g, "").length;

    alert("Length of URL: " + length);
    alert("Number of letters: " + letters);
}

getURLInfo();