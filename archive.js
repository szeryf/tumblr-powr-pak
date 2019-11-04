function postDate({ innerText: date }) {
  // console.log('date', date, Date.parse(date), new Date(date))
  date = date
    .replace(/ene\.|sty|янв\./, 'January')
    .replace(/févr\.|lut|февр\./, 'February')
    .replace(/мар\./, 'March')
    .replace(/abr\.|avr\.|kwi|апр\./, 'April')
    .replace(/ma[ij]|мая/, 'May')
    .replace(/juin|cze|июн./, 'June')
    .replace(/juil\.|lip|июл\./, 'July')
    .replace(/ago\.|août|sie|авг\./, 'August')
    .replace(/wrz|сент\./, 'September')
    .replace(/paź|окт\./, 'October')
    .replace(/lis|нояб\./, 'November')
    .replace(/dic\.|gru|дек\./, 'December')
    .replace('г.', '')
  const newDate = new Date(date)
  if (newDate.toString() !== 'Invalid Date') {
    // console.log('newDate', date, newDate)
    return newDate
  }
  const match = date.match(/(\d{4}).*(\d{2}).*(\d{2})/)
  if (match) {
    const d = new Date(`${match[1]}-${match[2]}-${match[3]}`)
    // console.log('match', date, d.toISOString())
    return d
  }
  console.log('unparsed', date)
}

var allPosts = {}

function countStats() {
  'use strict'
  var posts = document.querySelectorAll('a h1')
  if (!posts.length) return
  var i, post, pDate, pId
  for (i = posts.length - 1; i >= 0; i -= 1) {
    post = posts[i]
    pDate = postDate(post)
    pId = posts[i].parentElement.parentElement.href
    allPosts[pId] = pDate
  }
  var maxDate = postDate(posts[0]),
    minDate = maxDate
  var postNum = 0,
    key,
    date
  for (key in allPosts) {
    if (allPosts.hasOwnProperty(key)) {
      postNum += 1
      date = allPosts[key]
      if (date < minDate) {
        minDate = date
      } else if (date > maxDate) {
        maxDate = date
      }
    }
  }
  // console.log('minDate - maxDate', maxDate - minDate);
  var days = 1 + Math.round((maxDate - minDate) / 1000 / 60 / 60 / 24)
  // console.log('days', days);

  var prev = document.querySelector('#przemek-post-stats')
  if (prev) {
    document.querySelector('header > div:first-child').removeChild(prev)
  }

  var items = document.createElement('div')
  items.id = 'przemek-post-stats'
  items.style = 'color:#fff;margin-left:10px;font-size:14px'
  var info = document.createElement('div')
  info.className = 'control_text'
  info.innerText = `${postNum} posts in ${days} days. AVG: ${(
    postNum / days
  ).toPrecision(3)}`
  items.appendChild(info)
  document
    .querySelector('header > div:first-child')
    .insertBefore(items, document.querySelector('#register'))
}

// setTimeout(countStats, 2000)

setInterval(countStats, 1000)
