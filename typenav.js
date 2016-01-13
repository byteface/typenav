(function(d){

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
        "enabled":true, // TODO - any point in this?
        "debug":false,  // TODO - a log function
        "expandable":true,
        "event":"keypress",
        "autocomplete":true
    },

    nav=[],

    showSearchBox = function(){
        var typenav = document.getElementsByClassName("typenav")[0];
        typenav.style.display = "block";

        //var typenav = document.getElementById("typenav");//[0];

        // TODO - add char to search box
        // TIME OUT CLOSE / DISSAPEAR IF NOTHING TYPED
    },

    setOptions = function(){
        var typenav = document.getElementsByClassName("typenav")[0];

        // if its not expandable hide it
        if( options.expandable === false ){
            typenav.style.display = "none";
        }else{
            typenav.style.display = "block";
        }

    },


    init = function(){
        
        // TODO - error handle
        loadConfig( "config.json", function success( data ){

            // console.log( 'the data was loaded' ); 
            // console.log( data.options );

            options = data.options;
            nav = data.nav;

            setOptions();

        });

        event( d, "keypress", function(e){
            
            // if not the document bail to not interupt forms etc
            if( document.activeElement.tagName !== 'BODY' ){
                return;
            }

            if( options.search !== false ){
                showSearchBox();
            }

            //TODO - set focus and add chars
            //document.getElementById("Box1").focus();

            var key = code(e);            
            key = String.fromCharCode(key); // convert code to char

            //console.log( 'do some shit' );
            console.log( key );


            // for each registered functions
            for( var i=0; i<nav.length; i++ ){

                // console.log('============');
                // console.log(nav[i]);

                var keys=nav[i]['keys'];

                for( var j=0; j<keys.length; j++ ){

                    // console.log( '--' );
                    // console.log( keys[j] );

                    if( keys[j] === key ){

                        // console.log( nav[i]['url'] );
                        var url = nav[i]['url'];

                        // checks for a new window
                        var t = nav[i]['target'];
                        if(t==="blank"){
                            window.open(url,'_blank');
                        }else{
                            window.location = url;
                        }

                    }

                }
            }


        });
    };



    if(modern) {
        d.addEventListener("DOMContentLoaded", init, false);
    } else {
        d.attachEvent("onreadystatechange", function(){
            if(d.readyState === "complete") {
                init();
            }
        });
    }

})(document);