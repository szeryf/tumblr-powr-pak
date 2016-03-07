chrome.webNavigation.onBeforeNavigate.addListener(
  function (details) {
    var newurl = details.url;
    if (!/^https?:\/\/(www.)?tumblr.com\/?$/.test(newurl)) {
      newurl += 'archive';
    }
    if (newurl != details.url) {
      chrome.tabs.update(details.tabId, {url: newurl});
    }
  },
  {url: [{hostSuffix: '.tumblr.com', pathEquals: '/'}]}
);

chrome.webNavigation.onBeforeNavigate.addListener(
  function (details) {
    var oldurl, newurl;
    oldurl = details.url;
    newurl = oldurl.replace(/(\d+).(png|jpg)$/, "1280.$2");
    if (newurl != oldurl) {
      console.log('redirecting', oldurl, newurl)
      chrome.tabs.update(details.tabId, {url: newurl});
    }
  },
  {url: [{hostSuffix: 'media.tumblr.com'}]}
);

chrome.webNavigation.onBeforeNavigate.addListener(
  function (details) {
    var oldurl = details.url;
    var newurl = oldurl.replace(
      /search\/(.+)\/recent/,
      function(_, p1) {
        return 'tagged/' + p1});
    if (newurl != oldurl) {
      console.log('redirecting', oldurl, newurl)
      chrome.tabs.update(details.tabId, {url: newurl});
    }
  },
  {url: [{urlMatches: 'tumblr.com/search/.+/recent'}]}
);
