const sizes = ['1280', '1200', '640']
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
    // const source = sources[i]
    // console.log('source', source, source.srcset, typeof source.srcset)
    const { srcset } = sources[i]
    console.log('srcset', srcset)
    for (var j = 0; j < sizes.length; j++) {
      const reg1 = new RegExp(`http\\S+${sizes[j]}.(png|jpg)`)
      const urls = srcset.match(reg1)
      console.log('reg1', reg1, urls)
      if (urls) {
        console.log('redirect', urls[0])
        top.location = urls[0]
        return
      }
      const reg2 = new RegExp(`(http\\S+.(png|jpg)) ${sizes[j]}w`)
      const urls2 = srcset.match(reg2)
      console.log('reg2', reg2, urls2)
      if (urls2) {
        console.log('redirect', urls2[1])
        top.location = urls2[1]
        return
      }
    }
  }
}

parseSources(document.querySelectorAll('main img[srcset]'))
parseSources(document.querySelectorAll('figure img[srcset]'))
parseSources(document.querySelectorAll('picture source[srcset]'))
