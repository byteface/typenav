var TYPENAV = TYPENAV || (function(d){

    var modern = (d.addEventListener),
    event = function(obj, evt, fn){
        if(modern) {
            obj.addEventListener(evt, fn, false);
        } else {
            obj.attachEvent("on" + evt, fn);
        }
    },

    code = function(e){
        e = e || window.event;
        return(e.keyCode || e.which);
    },
    
    // check for focus on any form elements
    isFormElementFocused = function(){

    },

    loadConfig = function( path, success, error )
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error)
                        error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    },


    // our default shiz
    // these bools are strings. check that against the json shiz
    options={
        "expandable":false,
        "event":"keypress",
        "search":false,
        "cursor":false
    },

    nav=[],

    showSearchBox = function(){
        var typenav = document.getElementsByClassName("typenav")[0];

        if(typenav===undefined){
            return;
        }

        typenav.style.display = "block";

        //var typenav = document.getElementById("typenav");//[0];

        // TODO - add char to search box
        // TIME OUT CLOSE / DISSAPEAR IF NOTHING TYPED
    },

    setOptions = function(){
        var typenav = document.getElementsByClassName("typenav")[0];

        if(typenav===undefined){
            return;
        }

        // if its not expandable hide it
        if( options.expandable === false ){
            typenav.style.display = "none";
        }else{
            typenav.style.display = "block";
        }

    },
    
    run = function(){
        
        loadConfig( CONFIG_FILE,

            function success( data ){
                // alert('loadconfig');

                if(data.options){
                    options = data.options;
                }

                nav = data.nav;

                setOptions();

            },

            function err( data ){
                alert('config load error');
            }


        );

        event( d, "keypress", function(e){

            // alert( 'a key was pressed' );
            
            // if not the document bail to not interupt forms etc
            if( document.activeElement.tagName !== 'BODY' ){
                return;
            }

            if( options )
            {
                if( options.search !== false ){
                    showSearchBox();
                }
            }

            var key = code(e);            
            key = String.fromCharCode(key); // convert code to char


            // for each registered functions
            for( var i=0; i<nav.length; i++ ){

                var keys=nav[i]['keys'];

                for( var j=0; j<keys.length; j++ ){

                    if( keys[j] === key ){

                        var url = nav[i]['url'];

                        // checks for a new window
                        var t = nav[i]['target'];
                        if(t==="blank"){
                            window.open(url,'_blank');
                        }else{
                            window.location = url;
                        }


                        // if its a chrome plugin
                        if(chrome.tabs)
                        {
                            chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
                                  chrome.tabs.update(tab.id, {url: url});
                            });
                            return;
                        }



                    }

                }
            }

        });
    };




// if chrome plugin
if(chrome.tabs)
{

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

        // alert("twatify222");

        if (changeInfo.status === 'complete') {

          //  alert("twatify - - - - - ");

            // Execute some script when the page is fully (DOM) ready
            chrome.tabs.executeScript(null, {code:"run();"});
            // init();
            //inti();
        }
    });

}



// expose

CONFIG_FILE = "config.json";

return {

    init : function( config_file ){

        if( config_file != undefined) {
            CONFIG_FILE = config_file;    
        }

        if(modern) {
            d.addEventListener("DOMContentLoaded", run, false);
        } else {
            d.attachEvent("onreadystatechange", function(){
                if(d.readyState === "complete") {
                    run();
                }
            });
        }

    }

}



})(document);