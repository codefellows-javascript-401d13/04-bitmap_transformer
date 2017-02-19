<a name="top"></a>
# Bitmap Transformer
___



####Team Members
 * Jermiah Walters
 * Zachary Crumbo
 * Sugey Valencia

###Table of contents

  * [Installation](#Installation)
  * [How to Use](#usage)
   * [Inverted bmp Example & command](#invert)
   * [Radom bmp  Examples & command](#random)
   * [Bluescale bmp  Example & command](#blue) 
   * [Grayscale bmp  Example & command](#gray)
   * [All at once command](#all) 
   
  --
  
What does the application do?
=================
<br> 
**Bitmap Transformer will change an 8-bit color bitmap file to either inverted, bluescale, grayscale or a random color .**

<br> 
<a name="Installation">
###Insallation
</a>

Forking Bitmap Transformer

1. 04-bitmap_transformer Repository: https://github.com/jtwalters25/04-bitmap__transformer
2. Click the "Fork" Button in the upper right hand corner of the repository 
3. After the repository has been forked, you will be taken to your copy of the repo at yourUsername/04-bitmap_transformer
and clone Your Fork
4. Clone your fork of 04-bitmap_transformer

~~~~
$ git clone https://github.com/yourUsername/04-bitmap_transformer

~~~~

<br> 
####Install all the Dependencies
 

~~~~
npm install
~~~~
<br> 


--


How to use Bitmap Transformer
=================


<br> <br>
 
<a name="usage">
###Original Bitmap</a>
<br>
<p align="center">
<img src="img/palette-bitmap.bmp"</p>

<br>

**This application will transform your an 8-bit color bitmap file into an inverted, bluescale, grayscale or a random colors version. Below are examples and commands to run the process.**

<br>
<br>


<a name="invert">
###Inverted Bitmap Example
</a>

<br>
<p align="center">
<img src="img/invert-bitmap.bmp"> 
<br><br> 
Inverses the colors of original image  
 (The inverse of a color is the most contrasting color of that color.)
 </p>
 <br>
***In the primary repository, enter the following command:***

~~~~
node index.js invert
~~~~
<br><br>

<a name="random">
###Random Bitmap Examples
</a>

<br>
<p align="center">
<img src="img/randbmpOne.bmp">
<img src="img/randbmpTwo.bmp">		
<img src="img/randbmpthree.bmp">
<img src="img/randbmpfour.bmp">   
<br>
 A new version with random colors will be created. Pictures above are examples of possible versions. **versions may repeat
 </p>
<br>

***In the primary repository, enter the following command:***

~~~~
node index.js random
~~~~
<br><br>

<a name="blue">
###Bluescale Bitmap Example
</a>
<br>
<p align="center">
<img src="img/bluescale-bitmap.bmp">
<br>
Changes original colors to blue colors pictured above
</p>

<br>
***In the primary repository, enter the following command:***

~~~~
node index.js bluescale
~~~~
<br><br>

<a name="gray">
###Grayscale Bitmap Example
</a>
<br>
<p align="center">
<img src="img/grayscale-bitmap.bmp">
<br>
Changes original colors to gray colors pictured above
</p>

<br>

***In the primary repository, enter the following command:***

~~~~ 
node index.j grayscale
~~~~

<br><br>

<a name="all">
###All At Once Example
</a>

<br>
<p align="center">
<img src="img/invert-bitmap.bmp">
<img src="img/randbmpOne.bmp">
<img src="img/bluescale-bitmap.bmp">
<img src="img/grayscale-bitmap.bmp">
<br>
Command will print a inverted, random color version, bluescale, and  grayscale version of original image.   
   _**Random image may be different than shown above_
</p>

<br>
***In the primary repository, enter the following command:***

~~~~
node index.js invert random bluescale grayscale
~~~~
<br><br>
[Back to the top](#top)