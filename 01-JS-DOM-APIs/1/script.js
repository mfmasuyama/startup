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


window.onload = function() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.github.com/search/repositories";
    xmlhttp.onreadystatechange = function() {
        var list = document.getElementById("repositoriesList");
        if (this.readyState == 4 && this.status == 200) {
            var repositories = JSON.parse(this.responseText);
            repositories.forEach(function(repository) {
                if([repositories.value.q*="Javascript"]) {
                    var item = document.createElement("li");
                    item.setAttribute(repositories.value.full_name);
                    list.insertAfter(item, list.lastChild);
                }
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
};



/*
var ajax = function (options) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var async = true; // siempre debe ser asíncrono el llamado
        request.onload = resolve;
        request.onerror = reject;
        if(options.method === 'GET' && options.data) {
            options.url += '?' + options.data;
        }
        request.open(options.method, options.url, async);
        if(options.contentType) {
            request.setRequestHeader('Content-type', options.contentType);
        }
        if(options.method !== 'GET' && options.data) {
            request.send(options.data);
        } else {
            request.send();
        }
    });
}

ajax({
    url: 'https://query.yahooapis.com/v1/public/yql',
    method: 'GET',
    //contentType: null,
    data: 'q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
}).then(function (response) {
    if(response.target.response !== '') {
        var data = JSON.parse(response.target.response);
        var sunset = data.query.results.channel.astronomy.sunset;
        document.querySelector('#target').innerHTML = sunset;
    }
}, function () {
    console.log('Hubo un error!');
});
*/
