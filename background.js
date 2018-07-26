// 接受content脚本的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    requestData(request.word,function(data){
        chrome.tabs.query({active: true,currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, data, function () {});
        });
    }) 
});

function requestData(word,fn){
    var params = {
        callback: '',
        a: 'getWordMean',
        c: 'search',
        word: word
    }

    get('http://www.iciba.com/index.php?' + formatParams(params), function (callback) {
        var data = JSON.parse(callback)
        fn(data)
    })
}

function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (res) {
        if (xhr.readyState == 4) {
            callback(xhr.responseText)
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

function formatParams(params) {
    var arr = [];
    for (var key in params) {
        arr.push(
            key + '=' + params[key]
        )
    }
    return arr.join('&')
}