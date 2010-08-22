CSS Playing Cards
=================

CSS Playing Cards help you to create simple and semantic playing cards in (X)HTML.

* @author   Anika Henke <anika@selfthinker.org>
* @license  CC BY-SA [http://creativecommons.org/licenses/by-sa/3.0]
* @version  2010-08-22
* @link     http://github.com/selfthinker/css-playing-cards

Contents
--------

* **cards.css** is the main part and provides the styles for the cards
* **cards-ie.css** is a tiny fix for IE to make a simple version work
* **examples.html** provides some example HTML
* **README** is this file
* **faces/* contains images for the faces

How to use it
-------------

### Surrounding container

    <div class="playingCards [fourColours|faceImages|simpleCards|playfulSuits|rotateHand]">
        ...
    </div>

There needs to be a surrounding container with the class "playingCards" around all the cards. That container can also have other classes which serve as **configuration options**:

* **fourColours**: Switches the default two colour deck with a four colour deck. (The colours of the German four colour deck will be different.)
* **faceImages**: Switches the default simple big letters for faces with images. (The default letters are dependent on the language.) *Note: Depending on the size of the card, you might need to adjust the image positioning of the faces in cards.css (search for "@change").*
* **simpleCards**: Switches the default multiple suits to one simple single big suit in the middle. *Note: This option does not work with "faceImages" and "playfulSuits"*.
* playfulSuits: Switches the default normal suits to more fancy ones.
* rotateHand: Switches the hand to rotate and fan in a semi circle.

### The back of a card

    <[element] class="card back">*</[element]>

To make the cards smaller or bigger, just change the font-size in the main "card" class in cards.css (search for "@change").

### The front of a card

    <[element] class="card rank-[2|3|4|5|6|7|8|9|10|j|q|k|a] [diams|hearts|spades|clubs]">
        <[element] class="rank">[2|3|4|5|6|7|8|9|10|J|Q|K|A]</[element]>
        <[element] class="suit">&[diams|hearts|spades|clubs];</[element]>
    </[element]>

Depending on the context, the main card element should either be an **a** (for selecting single cards), a **label** (for selecting multiple cards) or a **span** (for pure representation or played cards), e.g.

    <[a|label|span] class="card rank-a clubs" [href=""]>
        <span class="rank">A</span>
        <span class="suit">&clubs;</span>
        [<input type="checkbox" [...] />] <!-- if in label -->
    </[a|label|span]>

### Different hands

    <ul class="[table|hand|deck]">
        <li>
            [<strong>] <!-- if selected -->
                ... card ...
            [</strong>]
        </li>
        ...
    </ul>

* **table** places the whole cards side by side.
* **hand** places them side by side, but lets them overlap, so you will only see a part of each card. If the "rotateHand" option is enabled, you'll see the cards rotated in a semi circle.
* **deck** places the cards on top of each other, so that you cannot see single cards but a pack.

Requirements
------------

The CSS is only intended to work in **modern browsers** (Firefox 3.6+, Opera 10+, Chrome, Safari).
To make a basic version work in IE8, you need the provided **cards-ie.css**.

Credits
-------

* The faces' images are taken from http://svg-cards.sourceforge.net/
* One of the cards back images was taken from http://www.squidfingers.com/patterns/
