# tumblr-powr-pak
A simple Chrome extension to fix some of the most annoying Tumblr quirks: redirect to archive, hi-res images, bring back the tracked tags

## What does it do?

### Redirect to archive

`<anything>.tumblr.com` -> `<anything>.tumblr.com/archive`

What I hate about Tumblr is that every blog can install its own "template", most of which turn the browsing experience into a horrible nightmare. Awful music that starts playing in the background? Check. Epilepsy-inducing blinking animated background? You bet. Sparklies falling down from the cursor? Why the hell not! Huge blurry photo of author's hairy nostrils that makes you scroll 3 screens down and 2 to the left to see the actual content? Believe me, you wouldn't be able to unsee it.

Even if the UI is decent, it's still rather hard to tell whether the author posts with some reasonable frequency or would spam you with 100+ posts per day. On the other hand, each blog's archive offers consistent and familiar experience: the UI is always the same, you can estimate the posting frequency and quickly see if the blog is still active or dead for a long time.

So, in my early days of Tumblr I found myself constantly looking for the *Archive* link (which each "template" inconveniently puts in a different place, some even hide it completely), doing the right-click acrobatics to select the *Archive* link on the dashboard, or even adding the word `/archive` to the URL by myself. When I got tired of this, I learned how to make Chrome extensions and thus [tumblr-powr-pak](https://github.com/szeryf/tumblr-powr-pak) was born :)

Caveat: doesn't work with custom domains (i.e. when blog doesn't have `tumblr.com` in its address). Doesn't work when the URL points to an individual post (most of the links on dashboard). Your best bet is to click on blog's avatar. Doesn't work for some blogs where Tumblr shows this awful side-peeper thingy.

### Redirect to image

`<anything>.tumblr.com/image/<id>` -> actual image URL

This just makes it easier to save the image (I follow some photography blogs and like to save images for using as my desktop wallpaper). The "image" page is useless, anyway. Please respect the copyrights if use this.

### Always show the highest resolution picture (1280)

Tumblr has several standard picture resolutions, of which the 1280px-wide is highest available for still pictures (JPG & PNG). However, Tumblr dashboard and some templates only show the 500px version and even when you click on the picture, you still get the 500px. [tumblr-powr-pak](https://github.com/szeryf/tumblr-powr-pak) takes care of this, always redirecting to 1280px version (only works when you open the picture directly or have it opened by the function above, i.e. when the URL in browser's address bar is the picture URL).

### Bring back the tracked tags

Some time ago Tumblr replaced its "tracked tags" function with its useless and bloated search functionality. However, it's still possible to follow tracked tags, just the link to this functionality was hidden. Your tracked tags (displayed under search bar when you press Tab) now point to `https://www.tumblr.com/search/<tag>/recent`, which [tumblr-powr-pak](https://github.com/szeryf/tumblr-powr-pak) replaces with `https://www.tumblr.com/tagged/<tag>` when navigated to.

The search functionality is still available since search bar links to `https://www.tumblr.com/search/<search term>` if you type something.

### Archive stats

As mentioned above, I like to see how much stuff does the author post before I follow them. You can guess that by looking at the archive, but usually it requires some mental effort to estimate it. Plus, it's cool to see that somebody posts `1.33` posts per day :)

Caveat: doesn't work with custom domains (i.e. when blog doesn't have `tumblr.com` in its address).


## How to install

1. Clone the repo: `git clone https://github.com/szeryf/tumblr-powr-pak.git`
2. Open extensions tab in Chrome (Window -> Extensions)
3. Make sure `Developer mode` is checked
4. Click `Load unpacked extension`
5. Navigate to the directory where you cloned the extension and Select it
6. That's it. Enjoy! (You might want to refresh any open Tumblr windows, though.)

### What? Y U NO publish to Chrome store?

This might be due to one of the following reasons. Or both:

1. I'm too cheap to pay Google $5 for posting **my free stuff** to **their** store.
2. I'm too lazy to add a configuration panel to enable/disable functionality etc.


## Problems? Bugs? Ideas?

Feel free to tweak the code, send pull request or raise issues. If you would like to turn this into a proper Chrome extension (or incorporate into an existing one), I have no problem with that as long as it stays free.

### What if I want to use the extension, but not one of the functions?

Locate the functionality in the code (I added some helpful comments to mark these places, but you should be familiar with the JS syntax at least) and comment it out, then reload extension in Chrome.
