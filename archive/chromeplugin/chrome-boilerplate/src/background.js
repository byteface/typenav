function getLocation(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}
//getLocation("http://example.com:3000/pathname/?search=test#hash");
/*
{
    "protocol": "http:",
    "host": "example.com:3000",
    "hostname": "example.com",
    "port": "3000",
    "pathname": "/pathname/",
    "search": "?search=test",
    "hash": "#hash"
}
*/


if(chrome.tabs)
{
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {

            // alert( tab.url );

            // var url = getDomainName( tab.url );
            var url = getLocation(tab.url).hostname.split('www.').join('');

            // http://stackoverflow.com/questions/17567624/pass-parameter-using-executescript-chrome
            chrome.tabs.executeScript(tab.id, {

                code: 'var chrome_config="https://byteface.github.io/typenav/websites/'+url+'.json"'

            }, function() {
                chrome.tabs.executeScript(tab.id, {file: 'src/typenav.min.js' });
            });

        }
    });
}

//icon on/off
//https://developer.chrome.com/extensions/examples/extensions/talking_alarm_clock/background.js