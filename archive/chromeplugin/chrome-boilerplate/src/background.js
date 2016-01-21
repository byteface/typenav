if(chrome.tabs)
{
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {

            // alert( tab.url );

            // http://stackoverflow.com/questions/17567624/pass-parameter-using-executescript-chrome
            chrome.tabs.executeScript(tab.id, {
                // code: 'var chrome_config='+tab.url
                code: 'var chrome_config="http://byteface.github.io/typenav/websites/carpicker.net.json"'
            }, function() {
                chrome.tabs.executeScript(tab.id, {file: 'src/typenav.min.js' });
            });

        }
    });
}

//icon on/off
//https://developer.chrome.com/extensions/examples/extensions/talking_alarm_clock/background.js