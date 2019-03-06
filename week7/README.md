# Week 7

## Next week's class meets at Fort Awesome RAX 0137

Collab projects with Graphic Design

## March 7 - Technology and Interactive Media Careers

Time
5:00pm  — 7:00pm
Location
Student Services Building, Red Room

Learn about the exciting and innovative evolving field of contemporary technology and new media.  Network with people in the field and explore career possibilities.  Appetizers and refreshments will be served.

Co-sponsored by the School of Natural and Social Sciences, the School of Film and Media Studies, the Career Development Center and Alumni Engagement.

Panelists Include:

    Yu-Fan (Linda) Chang: Blue Sky Studios Lighting TD
    Genevieve Hoffman: Data Visualization Engineer at TOPOS
    Cassie Tarakajian: Engineer at Cycling ’74, Lead Developer at Processing Foundation
    Campbell Watson: IBM Research

[Event info](https://www.purchase.edu/live/events/16030-technology-and-interactive-media-careers)

# Review GitHub Pages
- structure of the site

# Glitch.com

- main features
- spin up website
- import from GitHub

# Frameworks

- open source toolkits for developing with HTML, CSS, and JS quickly. Great for prototyping your ideas or build out an entire app.

- [Bootstrap](https://getbootstrap.com/)
- [Tachyons](http://tachyons.io/)

## Website Jam

- Spin up a website

# Intro to Node

# Javascript Classes
* A review of Javascript classes in ES6
* [Notes](intro-to-classes-in-ES6.md)

# Intro to NodeJS
* Node is a version of Javascript that works outside the browser. It can run on the command line and on servers
* Node is used for writing backend applications without a browser, though it can be used to manage the server in addition to the software you write for a browser
* Download [Node](https://nodejs.org/en/)

# Running Node in the command line
* After installing, you can launch node by typing ```node```
* Enter javascript commands one at a time
* Exit with *Control-D*
* You can edit node files (javascript files run with node) in any text editor
* You can append the node shebang ```#!/usr/bin/env node``` in the first line of the file. Save the file with a ```.js``` suffix.
* You can run your program in the Terminal with ```node filename.js```

# NPM
* NPM is the Node Package Manager
* A package manager is a kind of *app store* for the command line, sometimes for a particular operating system, such as [Homebrew](http://brew.sh) for Mac, or for a specific programming language.
* NPM is the package manager for Node software
* Each node program you write that will also use NPM software needs a ```package.json``` file to list the NPM packages you want to include and use
* Go to the directory of your program and type ```npm init --yes```
* To install a package you'll use ```npm install <module_name> --save```
* This package will be installed and added in the ```package.json``` file for your program

# Express

* Express is a node package
* It is a simple web framework for node that can host files and get user input
* ```npm install express -save```

To use it in your program

```
var express = require('express');

//you can now create an 'app'
//This app holds an instance of express and can use its functionality

var app = express();

var server = app.listen(4000); //listens on port 4000. Triggers callback.

app.use(express.static('public'));
```

This means http://localhost:4000 will host the project

Runtime environment, library. 
Installing node, working with a server, working locally.  
NPM package manager

# Homework

- A very short [introduction](https://glitch.com/edit/#!/first-app-node?path=README.md:1:0) to Node
- Speculative Everything - Chapter 9 - Uploaded to Moodle
- Meet next week at Fort Awesome!
