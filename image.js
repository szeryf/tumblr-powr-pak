const sizes = ['1280', '640']
const extensions = ['jpg', 'png']
for (var i = 0; i < sizes.length; i++) {
  for (var j = 0; j < extensions.length; j++) {
    const selector = `img[src$="_${sizes[i]}.${extensions[j]}"]`
    const imgs = document.querySelectorAll(selector)
    console.log(selector, imgs)
    if (imgs.length) {
      top.location = imgs[0].src
    }
  }
}

const parseSources = (sources) => {
  for (var i = 0; i < sources.length; i++) {
    const source = sources[i]
    console.log('source', source, source.srcset)
    const { srcset } = sources[i]
    const urls = srcset.match(/http\S+1280.(png|jpg)/)
    if (urls) {
      console.log('rediect', urls[0])
      top.location = urls[0]
    }
  }
}

parseSources(document.querySelectorAll('figure img[srcset]'))
parseSources(document.querySelectorAll('picture source[srcset]'))
