# typenav
### Navigate websites with the keyboard

typenav utilises the keyboard for quick navigation and can be setup without much effort. typing 'c' for example could bring up your contact page. or 'h' may take you to the homepage if you so wish.

If you're a webmaster and use the same site a lot, it's useful to quickly jump around your site.


## setup...
example json configuration...

```
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
```

With this example typing 'c' or 'h' would launch the url


## longer keys
you can now also have longer keys. if you type part of a key it will trigger...

```
{
	"keys":[
		{
			"key":["cats"],
			"url":"/cats",
			"target":"parent"
		},
		{
			"key":["cobras"],
			"url":"/cobras",
			"target":"blank"
		}
	]
}
```

so typing 'ca' at least would take you to the cats page. typing 'co' to the cobras page.


## NOTES

	• If a form field on the page is selected, typenav is disabled as to not block users from using textboxes etc
	• Binding to hash urls allows you to expand functionality by triggering anchors or js functions


## EXAMPLES
check out examples/quick for quick setup
typenav in action at http://en.r8lst.com/ - press any key on the keyboard to jump to top level nav items
TODO - dynamic nav example.


## CHROME PLUGIN
The chrome plugin loads config files depending on the site you're on. These config files are on github and can be found in the gh-pages branch in the websites folder. So anyone can add a config.json for sites used a lot.

plugin is in /archive at mo whilst i sort it out.


## LICENCE
GPL