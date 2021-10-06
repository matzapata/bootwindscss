
# For local testing with markserv

Change the dead of node_modules/markserv/index.html
to 
```html
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>{{title}}</title>
	<meta charset="utf-8">
	<!-- <link rel="stylesheet" href="{markserv}templates/markserv.css"> -->
	<link rel="stylesheet" href="{markserv}templates/highlight-js-github-gist.css">
	<script type="text/javascript" id="MathJax-script" async
	      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
        </script>
	<link rel="stylesheet" type="text/css" href="./testCss/tailboots.css">
	<link rel="stylesheet" type="text/css" href="./testCss/markdown.css">
</head>
```

Also the ./node_modules/nuxt/nuxt-docs/tailwind.config.js file is modified to reduce the interference with the tailboots docs