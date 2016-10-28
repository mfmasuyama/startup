// 4
$(document).ready(function() {
    $(".hidden").fadeIn(2000);
});

// 6
function getAJoke() {
    let request = new XMLHttpRequest();
    let url = "http://api.icndb.com/jokes/random";
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);
            document.querySelector("#joke").innerHTML = json.value.joke;
        }
    };
    request.open("GET", url, true);
    request.send();
};

//7
let ajax = function (config) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            const async = true;
            request.onload = resolve;
            request.onerror = reject;
            request.setRequestHeader("contentType", config.contentType);
            request.open(config.method, config.url, async);
        }
        if(options.method !== "GET") {
            request.send(config.data);
        }  else {
            request.send();
        }
    });
};

// 8 -- .content = null
ajax({url: "index.html",
method: 'GET',
contentType: 'json',
data: 'firstField=foo&secondField=var'})
.then(function (response) {
    console.log('On success: ', response);
}, function (error) {
    console.log('On error: ', error);
    console.log(document.querySelector(".content"));
//    $(".content").attr("color", "red");
    document.querySelector(".content").color = "red";
});

/* -- Example

function getURL(url, callback) {
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.addEventListener("load", function() {
if (req.status < 400)
callback(req.responseText);
else
callback(null, new Error("Request failed: " +
req.statusText));
});
req.addEventListener("error", function() {
callback(null, new Error("Network error"));
});
req.send(null);
}*/


// 9 -- Error 422 Unprocessable Entity
window.onload = function() {
    let request = new XMLHttpRequest();
    let url = "https://api.github.com/search/repositories";
    request.onreadystatechange = function() {
        let list = document.querySelector("#repositoriesList");
        if (this.readyState == 4 && this.status == 200) {
            let repositories = JSON.parse(this.responseText);
            repositories.forEach(function(repository) {
                if([repository.value.items.value.q==="JavaScript"]) {
                    let item = document.createElement("li");
                    item.setAttribute(repository.value.full_name);
                    list.insertAfter(item, list.lastChild);
                }
            });
        }
    };
    request.open("GET", url, true);
    request.send();
};


/*
-- Example

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

// 10 -- Error 422 Unprocessable Entity
function search() {
    let search = document.querySelector("#search");
    let request = new XMLHttpRequest();
    let url = "https://api.github.com/search/repositories";
    request.onreadystatechange = function() {
        let list = document.querySelector("#repositoriesList");
        while(list.firstChild) {
            list.removeChild(list.firstChild);
        }
        if (this.readyState == 4 && this.status == 200) {
            let repositories = JSON.parse(this.responseText);
            repositories.forEach(function(repository) {
                if([repository.value.items.value.q===search]) {
                    let item = document.createElement("li");
                    item.setAttribute(repository.value.full_name);
                    list.insertAfter(item, list.lastChild);
                }
            });
        }
    };
    request.open("GET", url, true);
    request.send();
};
