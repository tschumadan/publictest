/* Created by EU on 18.09.2019 */
/* Used for testing creating own classes to learn how jQuery works */

class equery {
    constructor(el) {
        // prüfen ob Klasse oder Id übergeben wurde -> Wenn ein Element nicht im array ist wird der Index als -1 angegeben
       if (el.indexOf(".") > -1)
       {
            el = el.replace(".", "");
            this.elements = document.getElementsByClassName(el);
       }
       else if (el.indexOf("#") > -1)
       {
           el = el.replace("#", "");
           //muss in einen array gepackt werden, auch wenn nur ein Element
           this.elements = [document.getElementById(el)];
       }
       else {
           this.elements = document;
       }
    }

    // method to add a class to all equery elements (aka all elements of a certain class)
    addClass(cl) {
        var count = 0;
        while (count<this.elements.length) {
            //avoiding space before classname if element has no class before
            if(this.elements[count].className) {
                this.elements[count].className += " " + cl;
                count++;
            }
            else {
                this.elements[count].className = cl;
            }
            count++;
        }
    }
}

//function to instantiate new class instance
function eQuery(el) {
    var element = new equery(el);
    return element;
}