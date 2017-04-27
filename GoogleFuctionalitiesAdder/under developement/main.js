// ==UserScript==
// @name         GoogleFunctionalitiesAdder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  adding some cool stuff to google
// @author       icehax
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function loadjscssfile(filename, filetype){                                           //external scripts loader,for files such as other .js and stylesheets such as .css
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}

  var searchbar = document.getElementById("viewport");
   var b1 = document.getElementById("b1");
  searchbar.innerHTML = searchbar.innerHTML + '<input type="button" value="fuck" id="b1" >';

})();
