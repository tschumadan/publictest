// working with variables
var a=5;
var b=3;
var c=a+b;
c=c+c;

//redirect
//window.location = "localhost/..."

//functions
function getvalue(id, text) {
    // finds the HTML element with "id" and changes the element content (innerHTML) to ...
    document.getElementById(id).innerHTML = text;
}

// JSON: Objects to text to be able to transfer them
// creating an object
var myJSONobject = {"name":"John", "age":"35"};
// JSON Object converted to string
var text = JSON.stringify(myJSONobject);
// converting string to Object
var obj2 = JSON.parse(text);

alert (text);

// Object.Index gives a part of an object
alert (obj2.name);

getvalue("value1", "value2");
