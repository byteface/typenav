# typenav
### Navigate websites with the keyboard

On many websites, when you type on the keyboard nothing happens. You can click around with your left mouse on images or words to navigate pages. But why not also use the keyboard?

typenav connects your keyboard to your content without much effort. Providing a quick navigation device, so typing 'c' for example could bring up your contact page. or 'h' may take you to the homepage if you so wish.

You can either link directly to pages or enable a pop-over search box showing matches from your config file.

If you're a webmaster and use the same site a lot, it's useful to quickly jump around your site.


## a config.json file provides you with the following capabilities

### options

enabled : true - enable or disable the component from working
debug : true - logs to the console
event : "keypress" - which event it binds to. keypress is default. can also have keyup or keydown
search : true - *true by default* Global setting, triggers pop up search box/results. If false key will immediatley trigger the url without prompt.
expandable : true - small icon that can touch or roll to expand. otherwise its hidden until typing
cursor : true - using cursor skips through pages

// TO CONSIDER
// means string matching on titles?
?? "delay":1 - no trigger until you finish typing meaning you can type strings ( i.e. 'ca' or 'co' return different matches )


### keys - properties you can add to each typenav item

"keys":["a"] - which letters on the keyboard trigger this url (REQUIRED)
"url":"/about" - where clicking will take you (REQUIRED)
"target":"parent" - 'parent' or 'blank' (new) browser window

"title":"abracadabra"  - appears in search results
"description":"abracadabra is the magic word" - appears in search results
"image":"", - an image to appear in results
"search": false - *false by default* overrides the default behaviour in the options for THIS ITEM ONLY if set


## minimum setup...

A example of a minimum set of options and values you would need in a config.json for it to work...

’’‘
{
	"options": {
		"search":"false"
	},
	"keys":[
		{
			"key":["c"],
			"url":"/contact"
		},
		{
			"key":["h"],
			"url":"/home"
		}
	]
}
’’‘

In this example typing 'c' or 'h' would immediately trigger the url because the search feature is set to false.


## NOTES

	• If a form field on the page is selected, topnav is disabled to not block users from using textboxes etc
	• Binding to hash urls allows you to expand functionality by triggering anchors or js functions


## EXAMPLES

	• check out the alphabet sitemp example for a common set of site urls


## PLUGIN

	TODO - plugin to have it in chrome so hold key and letter jumps to favourite sites



## LICENCE



TODO
- multiple keys...
- some constants for keys? SPACE, SHIFT
- key should also take keycodes
- onKeyPress Vs. onKeyUp and onKeyDown
- consider using jquery . would be easier to do tons of stuff. (however vanilla has been fun)
- scrape a domain, remove common words leaving only a domain specific keyword lexicon, build a map for that lexicon (crude auto typenav generator)
- arrow up and down search results
