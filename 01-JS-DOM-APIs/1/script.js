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
function ajax (config) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var async = true;
        request.onload = function (response) {
            if(response.target.status !== 200) {
                reject({
                    code: response.target.status,
                    message: response.target.statusText
                });
            } else {
                resolve(response.target.response);
            }
        }
        request.onerror = reject;
        if(config.method === 'GET' && config.data) {
            config.url += '?' + config.data;
        }
        request.open(config.method, config.url, async);
        if(config.method !== 'GET' && config.data) {
            request.send(config.data);
        } else {
            request.send();
        }
    });
}

// 8
window.onload = function() {
    let request = new XMLHttpRequest();
    let url = "C:/Workspace/startup/01-JS-DOM-APIs/1/index.html";
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 500) {
            document.querySelector(".content").style.color = "red";
        }
    };
    request.open("GET", url, true);
    request.send();
}

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
}
*/


// 9
window.onload = function() {
    let request = new XMLHttpRequest();
    let url = "https://api.github.com/search/repositories?q=javascript";
    request.onreadystatechange = function() {
        let list = document.querySelector("#repositoriesList");
        if(this.readyState == 4 && this.status == 200) {
            let repositories = JSON.parse(this.response);
            repositories.items.forEach(function(item) {
                let itemElem = document.createElement("li");
                let data = document.createTextNode(item.full_name);
                itemElem.appendChild(data);
                list.appendChild(itemElem);
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

// 10
function search() {
    let search = document.querySelector("#search").value;
    let request = new XMLHttpRequest();
    let url = "https://api.github.com/search/repositories?q=" + search;
    request.onreadystatechange = function() {
        let list = document.querySelector("#repositoriesList");
        while(list.firstChild) {
            list.removeChild(list.firstChild);
        }
        if(this.readyState == 4 && this.status == 200) {
            let repositories = JSON.parse(this.response);
            repositories.items.forEach(function(item) {
                let itemElem = document.createElement("li");
                let data = document.createTextNode(item.full_name);
                itemElem.appendChild(data);
                list.appendChild(itemElem);
            });
        }
    };
    request.open("GET", url, true);
    request.send();
};

// 12
function createTable(matrix) {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    for(var i=0; i<matrix.length; i++) {
        let tr = document.createElement("tr");
        for(var j=0; j<matrix[i].length; j++) {
            let td = document.createElement("td");
            let data = document.createTextNode(matrix[i][j]);
            td.appendChild(data);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}

function insertTable() {
    let matrix = [[1,2],[3,4],[5,6]];
    let table = createTable(matrix);
    document.body.appendChild(table);
}
