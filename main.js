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

    init = function(){
        
        // TODO - error handle
        loadConfig( "config.json", function success( data ){

            // console.log( 'the data was loaded' ); 
            // console.log( data.options );

            options = data.options;
            nav = data.nav;

        });

        event( d, "keypress", function(e){
            
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
                        window.location = url;

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


// if($('input:focus').length == 0){