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
   * [Inverted bmp picture & command](#invert)
   * [Radom bmp picture & command](#random)
   * [Bluescale bmp picture & command](#blue) 
   * [Grayscale](#gray)
   * [All at once](#all) 
   
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
3. After the repository has been forked, you will be taken to your copy of the FCC repo at yourUsername/04-bitmap_transformer
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
 
<a name="original">
###Original Bitmap</a>
(img/palette-bitmap.bmp)


**This application will transform your an 8-bit color bitmap file into an inverted, bluescale, grayscale or a random color version. Below are examples and commands to run the process.**
<br><br>


<a name="invert">
###Inverted Bitmap
</a>

(img/inverted-bitmap.bmp)

~~~~
node index.js invert
~~~~

<br><br>

<a name="random">
###Random Bitmap
</a>

(img/randbmpone.bmp)
(img/randbmptwo.bmp)
(img/randbmpthree.bmp)
(img/randbmpfour.bmp)

~~~~
node index.js random
~~~~

<br><br>

<a name="blue">
###Bluescale Bitmap
</a>


~~~~
node index.js bluescale
~~~~
<br><br>
<a name="gray">
###Grayscale Bitmap
</a>


~~~~
node index.js  random grayscale bluescale invert
~~~~
<br><br>

<a name="all">
###All At Once
</a>
(img/iverted.bmp)
(img/randbmpone.bmp)
(img/bluescale.bmp)




~~~~
node index.js bluescale
~~~~
<br><br><br><br>
[Back to the top](#top)