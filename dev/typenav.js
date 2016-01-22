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


    // defaults
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

    // find the key in our data and navigate to the url for that key
    findKeyAndNavigate = function( key ){

        MASTER_KEY=""; // flush the master key

        // for each registered functions
        for( var i=0; i<nav.length; i++ ){

            var keys=nav[i]['keys'];

            for( var j=0; j<keys.length; j++ ){

                _key = keys[j];

                // if cant find. strip a char and try again
                _key = _key.slice(0,_key.length-failcount);
                
                if( key.length<1 ){ // TODO - BUG? not sure this isworking
                    failcount=0;
                    return
                }


                if( _key === key ){

                    var url = nav[i]['url'];

                    // checks for a new window
                    var t = nav[i]['target'];
                    if(t==="blank"){
                        window.open(url,'_blank');
                    }else{
                        window.location = url;
                    }

                    // notice it bails on the first one due to changing url

                    // if its a chrome plugin
                    if(chrome.tabs){
                        chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
                              chrome.tabs.update(tab.id, {url: url});
                        });
                    }
                    
                    failcount = 0;
                    return; // match found so return

                }

            }
        }

        failcount+=1;

       // console.log( 'lets again then shall we' );

        if( failcount>15 ){ // find the bug
            failcount=0;
            // console.log('bail out');
            return
        }
        
        findKeyAndNavigate(key);

    },
    
    failcount=0,


    // TODO - detect if any keys are long. if not dont use timer.

    DELAY = 400,
    MASTER_KEY = "", // for keys greater than 1 character
    TYPE_TIMEOUT_ID = null, // this timer is for typing longer keys 
    
    run = function(){
        
        // alert('run');

        // if no json blob load the config file

        if(JSON_BLOB === undefined)
        {
            loadConfig( CONFIG_FILE,

                function success( data ){
                    
                    // alert('loadconfig success');

                    if(data.options){
                        options = data.options;
                    }

                    nav = data.nav;

                    // alert(nav);

                    setOptions();

                },

                function err( data ){
                    // alert('config load error');
                    console.log('config load error');
                }

            );

        } else {


            var data = JSON_BLOB;

            if(data.options){
                options = data.options;
            }

            nav = data.nav;

            setOptions();

        }


        event( d, "keypress", function(e){

            // alert('keypressed');


            clearTimeout( TYPE_TIMEOUT_ID ); // reset the timer


            // alert( 'a key was pressed' );
            
            // if not the document bail to not interupt forms etc
            if( document.activeElement.tagName !== 'BODY' ){
                return;
            }

            if( options ){
                if( options.search !== false ){
                    showSearchBox();
                }
            }

            var key = code(e);
            key = String.fromCharCode(key); // convert code to char


            MASTER_KEY+=key;

            // TODO - only timeout if we have long keys.

            TYPE_TIMEOUT_ID = setTimeout( findKeyAndNavigate, DELAY, MASTER_KEY );

        });

    };







// expose

CONFIG_FILE = "config.json",
JSON_BLOB = undefined;



// test loading json from gh-pages if is a chrome plugin
if(chrome_config){
   // init( chrome_config );
   CONFIG_FILE=chrome_config;
   run();
}
// TODO - if fail load the template?
// http://byteface.github.io/typenav/websites/*TEMPLATE.json




return {

    // pass either a path to a json file. or a json obj
    init : function( arg ){

        if (typeof arg === 'string' || arg instanceof String){
            CONFIG_FILE = arg;
            // console.log('load file');
        }else{
            JSON_BLOB = arg;
            // console.log('use json');
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