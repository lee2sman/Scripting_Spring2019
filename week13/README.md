# Week 13

- check-in
- present: time capsule project final presentation
- break/back to our previous classroom in Humanities
- Working with data with JSON
- APIs

# Working With Data, with JSON

JSON (yes, pronounced 'Jason'), stands for JavaScript Object Notation.

JSON is a standardized format for storing data. Essentially, it's a way of storing data in text files and allows programs, websites and servers to exchange this data. It is based on how object literals work in Javascript, which means that JSON files are written in Javascript Object Notation.

#### JSON syntax

- Data is held in **name/value** pairs
- Data is separated by commas
- Curly braces hold objects
-examples

A name value pair: ```{ "name": "Ricardo" }```

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value. Javascript allows interchangeable use of double and single quotes. JSON doesn't: you must use double quotes for keys.


```{ "age": 77 }```

Square brackets hold arrays

JSON works very similar to Javascript objects. Here is a a Javascript object:

```var person = { name: "Ricardo", age: 71, city: "Philadelphia" };```

#### Accessing Object Values

You can access JSON data with dot or bracket notation.

Example of accessing with dot notation:

```person.name;```

Example of accessing with bracket notation:

```person["name"];```

You can modify the data.

```person.age = 36;```

You can delete properties from an object with delete.

```delete person.age;```

Example JSON file describing a school

```
{
  "name": "Purchase College",
  "official name": "State University of New York at Purchase"
  
}
```

Note that you use a comma between data pairs, but not after the last entry.

Accessing a Javascript object in a loop. In this example, there is a **for-in** loop.

```
<!DOCTYPE html>
<html>
<body>

<p>Use bracket notation to access the property values.</p>
<p id="demo"></p>

<script>
var myObj, x;
myObj = {"name":"John", "age":30, "car":null};
for (x in myObj) {
  document.getElementById("demo").innerHTML += myObj[x] + "<br>";
}
</script>

</body>
</html>
```

Alternatively, we could use the regular **for** loop.

#### JSON data types

Values must be a string, number, a JSON object, array, boolean, or null.

We have seen examples of strings as values and numbers as values. Objects can also be values in a key/value pair. For example:

```
{
"employee":{ "name":"Shane", "age":39, "city":"Los Angeles" }
} 
```

The key "employee" returns an object with 3 keys: name, age and city.

Values can also be arrays.

```
{
"students": [ "Zed", "Yasmin", "Xavier", "Willa"]
}
```

Values can be booleans

```
{
"graduated": false
}
```

Lastly, values can be null.

```
{
"middle name": null
}
```

```
{
    "name":"Cathy",
    "age":31,
    "pets":[
        { "animal":"dog", "name":"Dodo" },
        { "animal":"cat", "name":"Frodo" },
        { "animal":"hamster", "name":"Bob" }
    ]
}
```

#### In-class exercise:
- Look up and add at least 5 more data points to the Purchase College JSON file we began, such as number of undergrads, endowment, motto, etc. Try to work with arrays and objects as values as well.

### JSON with servers

JSON is used for storing, sending and receiving data on servers.

If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server. In other words, you can save data by SENDing it to a server. (names, passwords, etc).

If you receive data in JSON format, you can convert it into a JavaScript object. In other words, you can GET data from a server.

JavaScript has the command ```JSON.parse()``` to turn JSON data into a Javascript object. By using this command, you can work with the data in your javascript code.

Example data from a server: 

```
'{ "name":"Shane", "age":39, "city":"Los Angeles"}'
```

We use json.parse() to turn it into a Javascript object. The text must be written with proper JSON syntax or you will get an error.

```
var obj = JSON.parse( '{ "name":"Shane", "age":39, "city":"Los Angeles"}' );
```

```
<!DOCTYPE html>
<html>
<body>

<h2>Create Object from JSON String</h2>

<p id="demo"></p>

<script>
var txt = '{"name":"Shane", "age":39, "city":"Los Angeles"}'
var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
</script>

</body>
</html>
```

#### Sending data to a server

We previously covered parsing text into a JSON object to get data from a server (to display on a website for example).

To send data to a server, we need to convert the data into a string. We do this with JSON.stringify().

Example

```
var obj = { name: "Shane", age: 39, city: "Los Angeles" };

var myJSON = JSON.stringify(obj);
```

### Loading JSON file with Jquery

Jquery gives us methods to make it easier to work with JSON.

A basic getJSON request is formatted as:

```
$.getJSON(url, data, success);
```

The url is local or remote. The *data* is optional, an object or strong sent to the server when requesting data, and success is an optional callback function to execute after the JSON request is successful.

example

```
function success(data) {
  // do something with data, which is an object
}
```

## In-class: Browser Extensions

## Data and APIs


# Homework

- Read [The Simple, Serendipitous Joy of Browser Extensions](https://www.nytimes.com/2018/03/15/smarter-living/browser-extensions-text-swapping.html)
  - install some [extensions](https://chrome.google.com/webstore/detail/millennials-to-snake-peop/jhkibealmjkbkafogihpeidfcgnigmlf?hl=en-US)
_ Read [JSON tutorial](https://www.w3schools.com/js/js_json_intro.asp) on W3Schools
- Check out [Darius Kazemi's Corpora files](https://github.com/dariusk/corpora)
- Watch [Intro to jQuery's GET function](https://www.youtube.com/watch?v=3hN4PrJ7R6A)
- Watch [What is an API](https://www.youtube.com/watch?v=OPDWn_kmUCM)

