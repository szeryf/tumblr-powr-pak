function postDate(post) {
  return new Date(post.querySelector('.post_date').innerText);
}

var allPosts = {};

function countStats() {
  var posts = document.querySelectorAll(".post");
  var len = posts.length;
  // console.log("len", len);
  for (var i = posts.length - 1; i >= 0; i--) {
    var post = posts[i];
    var pDate = postDate(post);
    var pId = posts[i].id;
    // console.log('post', post, pDate, pId);
    allPosts[pId] = pDate;
  };
  // console.log('allPosts', allPosts);
  var maxDate = postDate(posts[0]), minDate = maxDate;
  // console.log('maxDate', maxDate);
  // console.log('minDate', minDate);
  var postNum = 0;
  for (var key in allPosts) {
     if (allPosts.hasOwnProperty(key)) {
        postNum += 1;
        // console.log(key, allPosts[key]);
        var date = allPosts[key];
        // console.log('date', date);
        if (date < minDate) {
          minDate = date;
          // console.log('minDate', minDate);
        }
        else if (date > maxDate) {
          maxDate = date;
          // console.log('maxDate', maxDate);
        }
     }
  }
  // console.log('minDate - maxDate', maxDate - minDate);
  var days = 1 + Math.round((maxDate - minDate) / 1000 / 60 / 60 / 24);
  // console.log('days', days);

  var prev = document.querySelector('#przemek-post-stats');
  if (prev) {
    document.querySelector("#nav_archive").removeChild(prev);
  }

  var items = document.createElement('span');
  items.id = 'przemek-post-stats';
  items.className = 'search_control_items archive-controls';
  var info = document.createElement('span');
  info.className = 'control_text';
  info.innerText = "" + postNum + " posts in " + days + " days. AVG: " + (postNum / days).toPrecision(3);
  items.appendChild(info);
  document.querySelector("#nav_archive").insertBefore(items, document.querySelector("#register"));
}

// countStats();

setInterval(countStats, 100);
