lasso-autoprefixer
==================
This plugin for the [Lasso.js](https://github.com/lasso-js/lasso) will run your css through [autoprefixer](https://github.com/postcss/autoprefixer-core) allowing you to write css without having to worry about vendor prefixes.

# Installation

Install the plugin:

```
npm install lasso-autoprefixer --save
```

Enable the plugin:

```javascript
require('lasso').configure({
    plugins: [
        {
            plugin: 'lasso-autoprefixer',
            config: {
                ... // See below for config options
            }
        },
        ...
    ]
});
```

# Plugin Configuration


This plugin uses [Autoprefixer options](https://github.com/postcss/autoprefixer#options);


## Sample Configuration

```javascript
require('lasso').configure({
    plugins: [
        {
            "plugin": "lasso-autoprefixer",
            "config": {
                "browsers": [
                    "Android >= 2.3",
                    "BlackBerry >= 7",
                    "Chrome >= 9",
                    "Firefox >= 4",
                    "Explorer >= 9",
                    "iOS >= 5",
                    "Opera >= 11",
                    "Safari >= 5",
                    "OperaMobile >= 11",
                    "OperaMini >= 6",
                    "ChromeAndroid >= 9",
                    "FirefoxAndroid >= 4",
                    "ExplorerMobile >= 9"
                ]
            }
        },
        ...
    ]
});
```
