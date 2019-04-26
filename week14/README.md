# Week 13

- check-in
- saving and accessing data on a server
- in-class studio time

# Saving Data to a Server / Getting Data From A Server

### Converting JSON to text

A quick review: To send data to a server, we need to convert the data into a string. We do this with ```JSON.stringify()```, putting in the content to save.

Example

```
var obj = { name: "Shane", age: 39, city: "Los Angeles" };

var myJSON = JSON.stringify(obj);
```

### Working with the file system using Node.js

Node.js comes with a builtin file system module to work with a computer's file system, or for example on a server.  It can **read files, create files, edit files, delete files, and rename files.**

 To use it, we must import it.

```var fs = require('fs'); ```

#### Reading a file

```
fs.readFile()

#### Writing to a file

You can create a new text file in the file system with ```fs.writeFile()```. If the file already exists, it will overwire the previous content.

You can also add text to the end of a file using ```fs.appendFile()```. This has the advantage of not overwriting a file, and if it doesn't already exist, it will create the file first.

```
var fs = require('fs');

fs.appendFile('newTextFile.txt', 'This text will be added at the end of the file.', function (err) {
  if (err) throw err;
  console.log('Saved to newTextFile.txt!');
});
```


### Resources

- Node.js [File System](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) tutorial
- Node.js [modules](https://www.w3schools.com/nodejs/ref_modules.asp)


**In-class studio time**

- 1-on-1 meetings

### Final Project Details

This semester we have built websites for our class, (false) or misleading institutional websites, and a web-based time capsule. These sites have been collections of material: images, galleries, or institutional pages with lots of choices of what to navigate. They give a user multiple modes of entry and allow exploration. Now we are going to go small and concentrate on creating a site, app or extension for a single project or idea that we want to deliver to the world that will be delivered as a speculative work.

We have had multiple discussions on contemporary issues relating to the web today, from companies tracking users' every action, to the loss of privacy and the inability of many users to resist the compulsion to check their various feeds. How can you acknowledge this world and create a new intimacy with your website's visitors?

For this assignment you will make a mobile-responsive site or intervention (in the form of a web extension) that fundamentally alters our engagement with the Internet. The goal is to make a compelling site, app or extension with information, media, or other content but one that respects your user, plays with convention, or distorts a user's expectations on the web. You are a unique individual and your work is too! You may deconstruct your project or even the idea of a website itself. Perhaps your site is playful, mysterious, a game, a poem? How can the website be a work of art?

# Goals:
* the site should be responsive - it must work well on the desktop and mobile browsers
* the site should have interactive elements - you may want to use javascript, jquery or P5js
* the design should be compelling and unique - no cookie cutter sites. Question what the site is, the conventions of such sites, and make it your own!
* the site should be well-executed and original
* Consider how your site works with data and APIs.

**Final project presentations will be May 8 at 3PM.**  Students will be able to submit final revisions no later than the following week.

# Examples

## Website / web app examples for working with server

* [touched-some1](http://touched-some1.com) - For Underneath The Skin - *notice minimal example saving to server and displaying simple saved data*
* [Follower](http://follower.today) - art/performance project and commentary - *use of geolocation web app*
* [Binky](http://binky.app) - App/Artwork - *web app using randomization. mobile responsive*
* [somebody app](http://somebodyapp.com) - App/performance project. - *app using server to store users, data, match making*

##### Code example on Glitch

- [Jennchat](http://jennchat.glitch.me/) with [source code](https://glitch.com/edit/#!/jennchat)- minimalist chatroom allowing only 3 specified words in the chat

## Bookmarklets

We discussed Chrome web extensions in class. There is also a simpler web technology called a *Bookmarklet*. Where a *Web Extension* is a bit of Javascript app that executes on every page, that you load through the browser, a bookmarklet is simply a snippet of Javascript code that you run on any webpage you choose. You create a bookmarklet by creating a snippet of Javascript code and then saving it as a bookmark, usually in your bookmarks toolbar, so you can run it anytime you click on it. 

Bookmarks can be considered a shortcut to opening up your browser's console and typing in Javascript code directly. 

- [Tutorial](https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154) on *Creating Bookmarklets The Right Way*

## Homework

- Work on your final project
- Complete a first prototype for May 1
- message questions to Lee or TAs Amanda or Takashi!
