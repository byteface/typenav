# typenav
### Navigate websites with the keyboard

typenav enables the keyboard for quick site navigation and can be setup without much effort. It's useful to quickly jump around a website with strokes of the keyboard.

It's very easy to add typenav to your site and enable keyboard navigation for your users. 

Also there's a chrome-plugin *almost ready*, allowing you to navigate lots of websites faster and even add configurations for your own favourite sites.


## setup...
example json configuration...

```
{
	"nav":[
		{
			"keys":["c"],
			"url":"/contact"
		},
		{
			"keys":["h"],
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
	"nav":[
		{
			"keys":["cats"],
			"url":"/cats",
			"target":"parent"
		},
		{
			"keys":["cobras"],
			"url":"/cobras",
			"target":"blank"
		}
	]
}
```

so typing 'ca' at least would take you to the cats page. typing 'co' to the cobras page.


## init
by default typenav loads a config.json from same directory as the html page...
```
TYPENAV.init();
```

however you can specify the path...
```
TYPENAV.init( '/path/to/my/config.json' );
```

but even more awesome is you can pass a chunk of json allowing you to build dynamic typenavs on the fly...
```
typenav_json={"nav":[{"keys":["a"],"url":"#abracadabra"}]}

TYPENAV.init( typenav_json );
```



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