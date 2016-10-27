$(document).ready(function() {
    $(".hidden").fadeIn(2000);
});

function getAJoke() {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.icndb.com/jokes/random";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            document.getElementById("joke").innerHTML = json.value.joke;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
