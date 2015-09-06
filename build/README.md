## Project 4: Website Optimization
### Udacity Frontend-WebDev Nanodegree

#####Note to Udacity:
This was by far the most challenging and informative project I've done so far.  You didn't know it, but there were times where you and I weren't on the best of terms because of Project 4.  Now I can honestly say I'm very grateful for this challenge--it has taught me more than I expected to learn when I started this nanodegree and forced me to utilize tools I would've otherwise shyed away from.

#####Changes to '/views/js/main.js':
- `changePizzaSizes()`: Pulled variables outside of the for-loop to prevent iterations on the DOM during function callback
- `updatePositions()`:  pulled calculations on DOM from `querySelectorAll` and `scrollTop` outside of for-loop, then created an array for `var = userScroll` to reduce DOM iterations
- reduced overall generated pizzas from 200 to 100

#####Changes to '/views/pizza.html':
- set `charset` and `viewport`
- attempted `async` on main.js, but removed as it drastically altered the page layout

#####Changes to '/views/CSS':
- minified CSS using gulp, updated folder to minCSS during minification

#####Changes to 'views/images/pizzeria.jpg':
- manually reduced pixel size of image for Cam's portfolio page on index.html
- optimized image using gulp-imagemin and gulp-smushit

#####Changes to '/*.html':
- added `async` to analytics.js and 'GoogleAnalyticsObject'
- removed `href` to google fonts, replaced with WebFont Loader by bramstein with link to sourcecode on github.  Moved script to bottom of html body
- inlined CSS elements using gulp
- as mentioned above, I made a duplicate copy of the pizzeria.jpg image and added it to the img folder so that I could reduce the pixle size.  The CSS width attribute was set to 100px, removed that attribute and changed the picture size manually to improve timing during layout

#####Changes to '/img/*':
- opitmized all images using gulp-imagemin and gulp-smushit

#####Changes to '/js/perfmatters.js':
- uglified js using gulp and inlined it at the bottom of the index.html document  