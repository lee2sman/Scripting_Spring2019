# Week 01

1. Introduction

2. Get to know each other

3. Our goals for the course

4. What do we already know?

5. Our tools

6. Crash course in HTML and CSS

7. Bad Website Jam

8. Intro to scripting with jQuery

9. Where to Get Help

# Development Environment Lab

+ Review Text Editors and IDEs
+ HTML
+ CSS selectors
+ Local Servers

# Editors and IDEs

* A text editor is software to write and modify plain text files. They are used to write code. As opposed to word processing software they do not normally allow formatting.

* An IDE is an *integrated development environment*, software that provides a number of tools in combination with a text editor and usually a compiler. There are a number of free and open source IDEs available. For this course, you can use whatever text editor or IDE you would like. Some editors and IDEs have good standard defaults (*with batteries*) for particular languages or use cases.

* [Brackets](http://brackets.io) - A contemporary UI with good defaults and support for Javascript. Excellent for coding web projects. Not many options for other languages.

* [Sublime](https://www.sublimetext.com/) aka SublimeText - a great minimal and powerful text editor with a history of plugins that combine to make it a powerful editor. Sublime costs $80 to remove the *nagware* pop-up that reminds you to pay. The software is fully functional regardless.

* [Atom](https://atom.io/) - A large project that appears to emulate Sublime at first but is built on Javascript/electron. It is young but sophisticated, with a large number of themes and plugins. You can build it into a custom editor for your coding needs.

* [Glitch](https://glitch.com/) - The new kid on the block. Glitch has a friendly UI and allows you to code a website or many other languages to deploy them to the web. It combines a web editor with version control like GitHub.

# HTML/CSS/Javascript environment

### HTML

* HTML - Hypertext Markup Language
  * aka *The content*
  * Hypertext - directional *hyper* links. Words are associated with another file. By clicking on the link you jump to the other file.
  * Markup - language used to describe formatting and placement. Other markup languages include [Wikimarkup](https://en.wikipedia.org/wiki/Wiki#Editing)
  * Language - self-explanatory!
  * [HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### CSS

* CSS - Cascading Style Sheets
  * aka *The Style*
  * Where HTML is said to be your *content*, your CSS describes its *style*. CSS is used to describe colors, placement, fonts, size of objects, and more.
  * CSS has a specific format. You specify what elements on your website you want to modify, then give rules for how to style those elements.
  * CSS [reference](http://cssreference.io/)
  * CSS for placement
    * We use CSS for *style*. Positioning is specified in CSS.

### CSS units and box model tutorial
* tutorial - [Inline Block](http://dustwell.com/div-span-inline-block.html)
* Do [this](http://www.barelyfitz.com/screencast/html-training/css/positioning/) CSS positioning tutorial

# Warm-up
* Building a Text Editor in the browser - [starter code](https://gist.github.com/lee2sman/0c3fe0e05ed6f340102a6899ea04221e)

### Javascript
  * For *Interaction*
  * Javascript was created by Brendan Eich in 1995 over a rushed time period for Netscape/Mozilla in order to compete with other web browsers (Internet Explorer) that were developing a competing language for interactive content.
  * Javascript as a name was selected because the Java language was popular at the time. They are not otherwise related.
  * Over time Javascript was adopted by all browsers though each browser/engine may have its own implementation. Standards for JavaScript are maintained by an international committee and codified as EcmaScript.
  * Javascript is a multiparadigm language, meaning there are many approaches to coding with it.
  * Javascript is *weakly* typed, meaning that the language does not have built in safety checks for memory and variable types
  * Javascript as a language has evolved significantly over time. New language features have been implemented and adopted at varying times by different browsers. Ecmascript2015 aka ES6 brought significant changes to syntax for classes, types, functions and loops, among other changes.
  * Javascript includes support for working with text, arrays, dates, regular expressions, and basic manipulation of the DOM.

## Working with the DOM

* DOM - The Document Object Model - tree structure where each node is an object representing a part of the document
* Web browsers use an internal DOM model in this tree structure with the topmost node named as "Document object". When an HTML page is rendered in browsers, the browser downloads the HTML into local memory and automatically parses it to display the page on screen.
* The DOM acts as an interface between your webpage and Javascript
* JavaScript can add, change, and remove all of the HTML elements and attributes in the page.
* JavaScript can change all of the CSS styles in the page
* JavaScript can react to all of the existing events in the page
* JavaScript can create new events within the page
* There are libraries that make it easier to work with the DOM. We will cover JQuery, historically one of the most popular Javascript libraries

# Homework

## Tutorials
The following are supplemental to what we go over in class. Much of the same information will be covered, but some of it will be new. I encourage you to review these videos on your own time.

- Intro to jQuery

# Homework

+ Read [What Happens When Type a URL in the browser?](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
+ Read these JavaScript tutorials
  - [Where To](https://www.w3schools.com/Js/js_whereto.asp) put Javascript
  - [Output](https://www.w3schools.com/Js/js_output.asp)
  - JS [Syntax](https://www.w3schools.com/Js/js_syntax.asp)
  - [Arithmetic](https://www.w3schools.com/Js/js_arithmetic.asp) and [Assignment](https://www.w3schools.com/Js/js_assignment.asp)
  - [Data types](https://www.w3schools.com/Js/js_datatypes.asp)
  - [Functions](https://www.w3schools.com/Js/js_functions.asp)
  - [Objects](https://www.w3schools.com/Js/js_objects.asp)
  - [For Loops](https://www.w3schools.com/Js/js_loop_for.asp)
+ Read the [DOM tutorial](https://www.w3schools.com/Js/js_htmldom.asp) entire section down to Events page
+ Due next Wednesday by noon
	+ Make a CSS page for the class website
  + Be able to explain how the DOM works
