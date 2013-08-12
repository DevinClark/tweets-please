# Tweets Please
_A project by Devin Clark_

__Deprecated with Twitter API 1.0__   

You're probably thinking "Why should I use this plugin? There are hundreds of Twitter plugins out there." This is a simple plugin, by design. No fancy stuff. The good thing about that is the plugin comes in at around 16kb minified with [Moment.js](https://github.com/timrwood/moment) bundled. That's exactly what I wanted when I built it, something lean. So… yeah… Use it if you want. Add issues (or even better Pull Requests) if I did something weird or buggy. It happens.

## Getting Started

1. Define a variable `TWITTER_USERNAME` with the username you wish to fetch tweets for.
2. Call the `tweetsPlease` method on the jQuery object you wish to put the tweets in and pass it the number of tweets you want.
3. ???
4. PROFIT!

**TL;DR**

    var TWITTER_USERNAME = "iDevinClark";
    $("#js-tweets").tweetsPlease(5);
    
## Dependencies
* [jQuery](http://jquery.com)
* [Moment.js](https://github.com/timrwood/moment) (included in index.min.js)
