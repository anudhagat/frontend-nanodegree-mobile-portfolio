Setup:
------
I used python webserver to host the website. To access it remotely, I used ngrok. To do this,
I used the cmd shell to change to my project directory. I ran python's webserver using the
command from the cmd shell:
python -m SimpleHTTPServer 8080

I downloaded ngrok. From the Downloads folder, I ran ngrok in another cmd shell window, using
the command:
ngrok 8080

This gave me a website that is remotely accessible and that I could use for testing.

Optimiztions to index.html
--------------------------
1. Added "async" attribute to analytics.js
2. Added "media='print'" to print.css
3. Resized to 100 pixels and compressed pizzeria.jpg image using http://jpeg-optimizer.com/
Renamed this resized version: pizzeria_compressed.jpg. Another minified version of this image
but not resized is named: pizzeria_min.jpg. This is used in pizza.html.
Used this website to also compress profilepic.jpg to profilepic_compressed.jpg
Note: jpegtran did not compress as well as this website.
4. Inline style.css into index.html
5. Added fontface rule into index.html
6. Used compressed version profilepic.jpg
7. Using Minified css, non minified css available
8. Using Minified js, non minified js available

Final score on PageSpeed Insights:
Mobile: 92/100, User Experience: 100/100
Desktop: 94/100


Optimizations to main.js
------------------------
Setup:
I used DevTools/Timeline to see frames per sec while scrolling or resizing the pizzas.

Modifications:
1. In function changePizzaSizes(), removed dx and newwidth out of the for loop. These
values are not dependent on the loop iteration and are staying the same. Also use
getElementsByClassName() instead of querySelectorAll() inside the loop.
2. In function updatePositions(), use getElementsByClass() instead of querySelectorAll().
3. In function updatePositions(), create 5 separate values of phase outside of for loop (sinValue)
and assign the correct on based on the result of i%5.
4. In function updatePositions(), added backface-visibility: hidden to each pizza so that it is in its
own layer as recommended by Mark during office hours.

Results:
Time to resize pizzas: 2.98 ms.
Frames per second values when scrolling are under 60 fps.

Bonus:
------
I used Grunt to minified css and js files. I also used it compress all images, except for pizzeria.jpg.
All html files were also minified. All files are stored in a separate directory called build. I tested the build
version. PageSpeed Insights and Chrome/Dev Tools gave me the same results as mentioned above.