// working with variables
var a=5;
var b=3;
var c=a+b;
c=c+c;

//klassendefinitionen
class myClass  {
    constructor(name) {
        //Konstruktor Methode, es können auch Variablen übergeben werden
        console.log("myClass created", name);
        // jetzt sind die variablen außerhalb des constructors verfügbar
        this.name = name;
    }

    mylength() {
        return this.name.length;
    }
}

// Klasse instanzieren
var dog = new myClass("bello");

//Methode einer Klasse aufrufen
console.log(dog.mylength());

//globale variable für alle Klassen festlegen
myClass.varia = "globaleVariable";
//globale Variablen verwenden
console.log(dog.constructor.varia);




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



//arrays
var myarray = ["wert1", "wert2", "wert3"];
//console.log(myarray);
//console.log(myarray.length);
//console.log(myarray[2]);
//adding
myarray.push("Wert4");

//looping through arrays with a callback function
myarray.forEach(function(item, index){
    //console.log(item, index);
});

// returns last item of array and deletes it
myarray.pop();
// returns and deletes first item
myarray.shift();
//vorne einfügen
myarray.unshift("Wert0");

// getting an index
var index3 = myarray.indexOf("Wert3");
//delete from position x y number of elements
myarray.splice(index3,1);

// cerating function for Button
function ButtonClicked() {
    console.log("Button Clicked");
    //getElementByClass liefert eine Liste aller Elemente dieser Klasse
    var input = document.getElementsByClassName("input");
    var textArea = doucment.getElementsByClassName("mytextarea");
    var results = document.getElementById("text");
    //input[0] ist das erste Element der Klassenliste
    results.innerHTML = input[0].value;

}

// add EventListener foe ClickEvent of Button with id submitbutton and calling a function
document.getElementById("submitbutton").addEventListener("click", ButtonClicked);



// Object.Index gives a part of an object
//alert (obj2.name);

//getvalue("value1", "value2");
