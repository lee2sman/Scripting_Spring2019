# Week 3

- Javascript review
- functions
  - parameters
  - anonymous functions
  - passing functions as arguments
- jQuery

questions:
- what is jQuery for?
- how do we use it?

## Javascript Review

### Variables
* In JavaScript, the first character must be a letter, or an underscore, or a dollar sign ($).
* declare, initialize variables
* camelCase
* Javascript is CaSe SeNsItIvE

### Syntax
* lines end with a ;
* Flow order (top to bottom)
* comments start with //
* increment with ```++``` and decrement with ```--```
* add strings together with ```txt = string1 + " " + string2;```

### Functions are code blocks
* they break your code into manageable chunks
* named functions can be called
* anonymous functions used once

```
function myFunction() {
    var contents = $('#contents');

    $('#demo1').html("Hello World");
}
```


### Functions can have parameters

```
function greeting(name){  //the function greeting takes one parameter, which it will store in name
  console.log('Hi '+name);
}

greeting('Pierre');  //greeting, with the argument Pierre passed into the name parameter

var myName = 'Zinthia';
greeting(myName); //greeting, with the argument myName passed into the name parameter
```

Technically, when you declare a function, you specify an argument as the variable(s) needed for its input. When you call the function and pass it a variable, that variable is called an argument.

### Operators

* ```==``` equal to
* ```!=```	not equal
* ```>```	greater than
* ```<```	less than
* ```>=```	greater than or equal to
* ```<=``` less than or equal to

### Logic

* AND ```&&```
* OR ```||```
* NOT ```!```

### More JavaScript

#### Arrays

```
students = [
  'Jonathan','Joseph','Erinn','Danylo','Anthony','Emmie','Victoria','Katherine','Mafe','Zachary','Emory','Keeshawn','Ana','Wadiah','Vlad'];
]
```

You can access an array by specifying the index.

```
  console.log(students[0]); //prints out 'Jonathan'
```

Arrays have length

```
console.log(students.length);
```

The length is the total number of entries. It's common to access or do something with the contents using a loop.

```
console.log('The Students are: ');

for (let i=0; i < students.length; i++){
    console.log(students[i]);
}
```

Note: The last entry to an array is not ```arrayName[arrayName.length];```
Remember that if we have an array with 5 entries, we will have an index 0, 1, 2, 3, 4. The last entry is therefore ```arrayName[arrayName.length-1];```


# jQuery

- see [slides](https://github.com/lee2sman/Scripting_Spring2019/blob/master/slides/jquery.pdf)

### What's it for?

Same things as Javascript

* Dynamic change
* Interaction!

### It goes between ```<script>``` tags

* In HEAD or BODY

- best practices are to add link to jquery and then link to your own external javascript file right before the closing ```</body>``` tag
- why? so your HTML and CSS is loaded first and then your script is applied to them


### Calling external scripts

```
<!DOCTYPE html>
<html>
<body>

<script src="myScript.js"></script>

</body>
</html>
```

#### Advantages of External scripts
* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads
* you can load several

```
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```


### Running your jquery code after page load

Tired

```
<script>
  alert('Hello World');
</script>
```

Wired

```
<script>
$(document).ready(function()
{
    alert('Hello World');
});
</script>
```

(p.s.: it's better to put your jquery code in an external file instead of embedded in the html page)

Your jquery code is wrapped inside the ready function call, which means the code will run only once the page has loaded.


#### An aside: anonymous functions and passing functions

When we run ```$(document).ready(function(){})``` we are passing an anonymous function as an argument to ```$(document.ready()```

There are two things of note here: anonymous functions, and passing functions as arguments.

### Anonymous Functions

1. Anonymous functions are created at *runtime*
2. They don't have a name


Example of a named (not anonymous function):

```
function flyToTheMoon(){
      alert("Zoom! Zoom! Zoom!");
}

flyToTheMoon();
```

The same code written as an anonymous function.

```
var flyToTheMoon = function() {
   alert("Zoom! Zoom! Zoom!");
}

flyToTheMoon();
```

So we have an anonymous function stored as flyToTheMoon now.

Going back to our previous jQuery starter code, we are passing an anonymous function to the function ready(), which runs only once our page has loaded.

The ```$(document)``` part is what tells our program to use jQuery to interpret/run our code on the webpage.


### using jQuery to change our css stylesheet

```
$(window).ready(function() {

   changeBG();
   setInterval(changeBG, 5000);
   function changeBG() {
     var num = Math.floor(Math.random()*18);
     $('#background').css('background', 'url("css/style'+num+'.css")');
   }
 });
 ```

### Alternative: changing background image

```       $('#background').css('background', 'url("assets/background_images/'+num+'.jpg")');        ```



# Homework

## jQuery practice

- Practice your jQuery.
  - refine your They Live project
  - add to it by using a setInterval function call to trigger something to happen
- Attend Processing Community Day NYC
