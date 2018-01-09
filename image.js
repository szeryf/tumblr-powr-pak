var img = document.getElementById('content-image')
if (null === img) {
  var imgs = document.getElementsByTagName('img')
  for (var i = 0; i < imgs.length; i++) {
    if (
      imgs[i].className.match('image-page-style-image') ||
      imgs[i].alt != 'avatar'
    ) {
      img = imgs[i]
      break
    }
  }
}
top.location = img.src
