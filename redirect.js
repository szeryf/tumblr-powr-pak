/*global chrome*/
// Redirect to archive: comment out or remove the following block to disable (lines 2-13)
chrome.webNavigation.onBeforeNavigate.addListener(
    function (details) {
        'use strict';
        var newurl = details.url;
        var tumblrUrlRE = /^https?:\/\/(www.)?tumblr.com\/?$/;
        if (!tumblrUrlRE.test(newurl)) {
            newurl += 'archive';
        }
        if (newurl !== details.url) {
            chrome.tabs.update(details.tabId, {url: newurl});
        }
    },
    {url: [{hostSuffix: '.tumblr.com', pathEquals: '/'}]}
);


// Replace images with 1280px version: comment out or remove the following block to disable (lines 17-28)
chrome.webNavigation.onBeforeNavigate.addListener(
    function (details) {
        'use strict';
        var oldurl, newurl;
        oldurl = details.url;
        newurl = oldurl.replace(/(\d+).(png|jpg)$/, "1280.$2");
        if (newurl !== oldurl) {
            console.log('redirecting', oldurl, newurl);
            chrome.tabs.update(details.tabId, {url: newurl});
        }
    },
    {url: [{hostSuffix: 'media.tumblr.com'}]}
);


// Bring back the tracked tags: comment out or remove the following block to disable (lines 32-45)
chrome.webNavigation.onBeforeNavigate.addListener(
    function (details) {
        'use strict';
        var oldurl = details.url;
        var newurl = oldurl.replace(
            /search\/(.+)\/recent/,
            function (_, p1) {
                return 'tagged/' + p1;
            }
        );
        if (newurl !== oldurl) {
            console.log('redirecting', oldurl, newurl);
            chrome.tabs.update(details.tabId, {url: newurl});
        }
    },
    {url: [{urlMatches: 'tumblr.com/search/.+/recent'}]}
);
