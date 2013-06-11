// Pulls "howMany" tweets from the user defined in TWITTER_USERNAME. This is also the most polite twitter plugin out there. It formats links, users, and hashtags with clickable links.
$.fn.tweetsPlease = function(howMany) {
	var tweets = [];
	var self = this;

	$.ajax({
		url: "https://api.twitter.com/1/statuses/user_timeline/" + TWITTER_USERNAME + ".json?count=" + howMany + "&include_rts=1",
		dataType: 'jsonp',
		async: false,
		success: function(data) {
			for (var i = 0; i < data.length; i++) {
				formatTweets(data[i]);
				tweets.push(constructTweet(data[i].text, data[i].created_at, getPermalink(data[i].user.screen_name, data[i].id_str)));
			};

			self.html(toString());
		}
	});

	function getPermalink(name, id) {
		return "https://twitter.com/" + name + "/status/" + id;
	}

	function formatTweets(obj) {
		var urlRegex = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/g;
		var twitterUserRegex = /@([a-zA-Z0-9_]{1,20})/g;
		var twitterHashTagRegex = /\B#(\w+)/g;

		obj.text = obj.text.replace(urlRegex," <a href='$&'>$&</a>").trim();
		obj.text = obj.text.replace(twitterUserRegex,"<a href='http://www.twitter.com/$1'>@$1</a>");
		obj.text = obj.text.replace(twitterHashTagRegex,"<a href='http://twitter.com/search/%23$1'>#$1</a>");

	}
	function constructTweet(text, date, permalink) {
		var output = "";
		output += "<li class='tweet'>"
		output += "<div class='tweet-body'>" + text + "</div>";
		output += "<div class='tweet-date'><a href='" + permalink + "'>" + moment(new Date(date)).fromNow() + "</a></div>";
		output += "</li>";
		return output;
	}

	function toString() {
		var output = "<ul>";
		for (var i = 0; i < tweets.length; i++) {
			output += tweets[i];
		};
		output += "</ul>";
		return output;
	}
};
