## Project 4: Website Optimization
### Udacity Frontend-WebDev Nanodegree

This project was part of a Nanodegree for Frontend Web Development issued by Udacity.com.

Given an existing project, I was tasked to optimize the code to ensure a PageSpeed Insight score of 90.
The optimizations I made received a score of 94/95 for mobile and desktop.

To view the improvements and modifications I made to this project, you can view my comments and edits in the `source/index.html` file.
Additionally, if you would like to run the production version of the application directly through your web browswer, you are welcome to clone
or download the project to your desktop using the links provided by github.  Afterward, please locate the project directory and select the `build` folder.
The `build` folder houses the exact same development code as the `source` directory, but all files have been minified for production purposes.
Locate the `build/index.html` file and load it with your favorite web browser to run the application.


#####Changes to 'source/views/js/main.js':
- `changePizzaSizes()`: Pulled variables outside of the for-loop to prevent iterations on the DOM during function callback
- `updatePositions()`:  pulled calculations on DOM from `querySelectorAll` and `scrollTop` outside of for-loop, then created an array for `var = userScroll` to reduce DOM iterations
- reduced overall generated pizzas from 200 to 

#####Changes to 'source/views/pizza.html':
- set `charset` and `viewport`
- attempted `async` on main.js, but removed as it drastically altered the page layout

#####Changes to 'source/views/CSS':
- minified CSS using gulp, updated folder to minCSS during minification

#####Changes to 'source/views/images/*':
- optimized images using gulp-imagemin, smushit, and pngquant

#####Changes to 'source/index.html':
- added `async` to analytics.js and 'GoogleAnalyticsObject'
- removed `href` to google fonts, replaced with WebFont Loader by bramstein with link to sourcecode on github.  Moved script to bottom of html body
- inlined CSS elements using gulp
- as mentioned above, I made a duplicate copy of the pizzeria.jpg image and added it to the img folder so that I could reduce the pixle size.  The CSS width attribute was set to 100px, removed that attribute and changed the picture size manually to improve timing during layout

#####Changes to 'source/img/*':
- opitmized all images using gulp-imagemin and gulp-smushit

#####Changes to 'source/js/perfmatters.js':
- uglified js using gulp and inlined it at the bottom of the index.html document  