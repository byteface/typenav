// some urls / research
http://stackoverflow.com/questions/16089421/simplest-way-to-detect-keypresses-in-javascript
http://stackoverflow.com/questions/12153357/how-to-register-document-onkeypress-event
http://stackoverflow.com/questions/9838812/how-can-i-open-a-json-file-in-javascript-without-jquery


"enabled":"true", - stop the component from working
"debug":"true", - logs some stuff to the console
"event":"keydown", - which event it binds to. keypress is default. can also have keyup or keydown
"autocomplete":"false", - true by default. pops up the autocomplete. without it they key will just trigger the url
"expandable":"true", - has a small icon that can rollover to expand

"typemode":"true", - false by default. won't trigger until you finish typing / press return?


TODO
- multiple keys...
- some constants for keys? SPACE, SHIFT
- key should also take keycodes
- onKeyPress Vs. onKeyUp and onKeyDown
- consider using jquery . would be easier to do tons of stuff.
- scrape a domain, remove common words leaving only a domain specific lexicon, build a map for that lexicon (crude auto typenav generator)



## config.json

minimum setup...

’’‘
{
	"options": {
		"autocomplete":"false"
	},
	"keys":[
		{
			"key":["a","A"],
			"url":"/otherpage"
		}
	]
}
’’‘