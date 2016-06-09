var noIndashBlogsPlease = function () {
  var oldBool = window.Tumblr && window.Tumblr.Flags && window.Tumblr.Flags.bool;
  if (oldBool) {
    window.Tumblr.Flags.bool = function (t) {
      return "indash_blogs" === t ? false : oldBool(t);
    }
    console.log("noIndashBlogs override installed successfully!");
  }
  else {
    console.log("noIndashBlogs override not installed!");
  }
};

var script = document.createElement('script');
script.textContent = '(' + noIndashBlogsPlease + ')()';
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
