const sizes = ['1280', '640']
const extensions = ['jpg', 'png']
for (var i = 0; i < sizes.length; i++) {
  for (var j = 0; j < extensions.length; j++) {
    const selector = `img[src$="_${sizes[i]}.${extensions[j]}"]`
    const imgs = document.querySelectorAll(selector)
    // console.log(selector, imgs)
    if (imgs.length) {
      top.location = imgs[0].src
    }
  }
}

const parseSources = sources => {
  for (var i = 0; i < sources.length; i++) {
    const source = sources[i]
    // console.log('source', source, source.srcset, typeof source.srcset)
    const { srcset } = sources[i]
    const urls = srcset.match(/http\S+1280.(png|jpg)/)
    if (urls) {
      console.log('rediect', urls[0])
      top.location = urls[0]
    }
    const urls2 = srcset.match(/(http\S+.(png|jpg)) 1280w/)
    // console.log('urls2', urls2)
    if (urls2) {
      console.log('rediect', urls2[1])
      top.location = urls2[1]
    }
  }
}

parseSources(document.querySelectorAll('main img[srcset]'))
parseSources(document.querySelectorAll('figure img[srcset]'))
parseSources(document.querySelectorAll('picture source[srcset]'))
