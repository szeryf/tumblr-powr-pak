function postDate(post) {
    "use strict";
    return new Date(post.querySelector('.post_date').innerText);
}

var allPosts = {};

function countStats() {
    "use strict";
    var posts = document.querySelectorAll(".post");
    var i, post, pDate, pId;
    for (i = posts.length - 1; i >= 0; i -= 1) {
        post = posts[i];
        pDate = postDate(post);
        pId = posts[i].id;
        allPosts[pId] = pDate;
    }
    var maxDate = postDate(posts[0]), minDate = maxDate;
    var postNum = 0, key, date;
    for (key in allPosts) {
        if (allPosts.hasOwnProperty(key)) {
            postNum += 1;
            date = allPosts[key];
            if (date < minDate) {
                minDate = date;
            } else if (date > maxDate) {
                maxDate = date;
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
