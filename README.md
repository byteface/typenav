# typenav
### Navigate websites with the keyboard

typenav utilises the keyboard as a quick navigation device and can be setup without much effort. typing 'c' for example could bring up your contact page. or 'h' may take you to the homepage if you so wish.

If you're a webmaster and use the same site a lot, it's useful to quickly jump around your site.


## minimum setup...

An minimum example json configuration...

’’‘
{
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

With this example typing 'c' or 'h' would immediately launch the url


## longer keys

you can now also have longer keys. if you type part of a key it will trigger...

’’‘
{
	"keys":[
		{
			"key":["cats"],
			"url":"/cats"
		},
		{
			"key":["cobras"],
			"url":"/cobras"
		}
	]
}
’’‘

so typing 'ca' at least would take you to the cats page. typing 'co' to the cobras page.



## NOTES

	• If a form field on the page is selected, typenav is disabled as to not block users from using textboxes etc
	• Binding to hash urls allows you to expand functionality by triggering anchors or js functions


## EXAMPLES

	• check out examples/quick for quick setup
	• typenav in action at http://en.r8lst.com/  - press any key on the keyboard to jump to top level nav items
	TODO - dynamic nav example.


## PLUGIN
- TODO - plugin to have it in chrome so hold key and letter jumps to favourite sites


## LICENCE
- TODO - sort this to be free to use etc