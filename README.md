# typenav
### Navigate websites with the keyboard

typenav utilises the keyboard as a quick navigation device and can be setup without much effort. typing 'c' for example could bring up your contact page. or 'h' may take you to the homepage if you so wish.

If you're a webmaster and use the same site a lot, it's useful to quickly jump around your site.


## minimum setup...

A example of a minimum set of options and values you would need in a config.json for it to work...

’’‘
{
	"options": {
		"search":"false",
		"expandable":false
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

	• check out examples/quick for first working example


## PLUGIN
- TODO - plugin to have it in chrome so hold key and letter jumps to favourite sites


## LICENCE
- TODO - sort this to be free to use etc