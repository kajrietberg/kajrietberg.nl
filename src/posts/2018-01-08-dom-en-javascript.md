---
title: De DOM en JavaScript
tags: ['front-end', 'JS', 'DOM', 'post']
---

<p class="lead">Na mijn <a href="https://www.kajrietberg.nl/2018/01/basis-van-javascript.html">Mijn interpretatie van de Basis van JavaScript artikel</a> is dit mijn volgende artikel/ blad met aantekeningen over mijn JS leertocht. Deze keer zijn dit aantekeningen over wat de DOM is en hoe die zich verhoudt tot JavaScript. Ik krijg graag jullie feedback. Hier kan ik weer van leren.<br>Mijn twitter-handle en mailadres staan onderaan de pagina.</p>

[De DOM](https://javascriptforwp.com/introduction-to-document-object-model/) is een representatie van de webpagina, maar is er ook voor bedoeld om te communiceren met de webpagina.<br> 
[De DOM](https://css-tricks.com/dom/) is een object met properties en methods. Naast de DOM heb je ook het scherm dat een object is met zijn eigen properties en methods. En elke node is een object met methods en properties.<br>
[De DOM is ook een API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Mode). 
Het is een API voor HTML (XML, SVG) die een webpagina aanbiedt als een boom met vertakkingen van objecten. Browser vendors gebruiken de DOM specificatie om te komen tot het weergeven van webpagina's. Een webbrowser zet de HTML om naar de DOM. En de DOM is waar de JS mee kan praten.<br>
De DOM is opgebouwd uit Nodes. Nodes zijn objecten in een boomstructuur. Nodes hebben properties en methods. Methods die je kan gebruiken staan op [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) en op [https://developer.mozilla.org/en-US/docs/Web/API/Node](https://developer.mozilla.org/en-US/docs/Web/API/Node). 

Verschillende [Node types](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType):

* Document [ 9 ] = HTML document
* DocumentType [ 10 ] = de doctype
* Element [ 1 ] = alle HTML elementen op een pagina
* Text [ 3 ] = tekst- waardes vaak gevonden in Element-nodes
* Comments [ 8 ] = HTML comments
* DocumentFragments [ 11 ] = een collectie van Nodes om meerdere elementen in te stoppen

Met JS pas je de DOM tree aan en niet de originele HTML bestanden.

Het werken met de DOM behelst 2 stappen:

* Ga naar de node(s) waarmee je wilt werken.
* Werk aan de node(s), voeg iets toe, pas het aan, etc.


## Nodes selecteren in je webpagina
Om een Node te selecteren in je pagina kan je typen: `document.children`. Dan krijg je een array van elementen. Zo kan je [ 0 ] er achter zetten en krijg je de eerste waarde uit je array. Daar kan je weer achterzetten children[ 1 ] en zo kan je doorgaan totdat je het element hebt dat je wilt hebben. Dit is erg omslachtig. Om het makkelijker te maken voor ons ontwikkelaars kan je methodes gebruiken.
Zo heb je:

* `document.getElementById()`
* `document.getElementsByTagName()`
* `document.getElementsByClassName();` hiermee krijg je alle elementen met deze class-naam terug in een array, ook als er maar 1 element is krijg je die in een array.
* `document.querySelector();` hiermee kan je zoeken op alle CSS selectors. Zoals een class-naam op dezelfde manier als je het in CSS zet dus met de . er voor. Je krijgt dan het eerste element terug met die class-naam. Of `document.querySelector('form input[type="email"]')` kan ook.
* `document.querySelectorAll();` Hiermee doe je hetzelfde als bovenstaande maar dan krijg je alle elementen terug met die specifieke class-naam in een array.

Het kan zijn dat `getElementById()` en `getElementsByTagName()` sneller werken dan de querySelector.


## Dom Traversal
Het reizen van en naar andere onderdelen.

* `.parentElement`
* `.parentNode`

Bovenstaande zijn vaak het zelfde, maar niet elke node is een element.

Bij elk Node type:

* `.childNodes`
* `.firstChild`
* `.lastChild`

Bij Element Nodes → dit is nieuwer:

* `.children`
* `.firstElementChild`
* `lastElementChild`
* `childElementCount`

White Space (witruimte) is ook een Node. Door .childNodes op te vragen krijg je ook de witruimte/regels terug. Maar de witruimte/regel is geen Element.

Buren bezoeken:

Bij elk Node type:

* `.nextSibling`
* `.previousSibling`

Bij Element Nodes → dit is nieuwer:

* `.nextElementSibling`
* `.previousElementSibling`

Meest voorkomende Nodes zijn de Element en Text nodes.

Een interessant en handig artikel over het selecteren van elementen in de DOM komt van Zell Liew, [Traversing the DOM with JavaScript](https://zellwk.com/blog/dom-traversals/).


## waardes in en uit Element Nodes te krijgen

* `.innerHTML`: geeft alle html in het element
* `.innerText`: geeft alle tekst zoals je het ook in de browser ziet
* `.textContent`: geeft alle tekst ook die met CSS op display none is gezet en zoals de tekst precies in je html bestand is gezet.
* `.outerHTML`: Geeft je element en ook de binnenste html
* `.outerText`: 

Om nieuwe HTML of text in een element te plaatsen gebruik je `.innerHTML = '<h2> </h2>'`. Dit zet de nieuwe html. Met `.innertext = kkkkkskjsjj` doe je hetzelfde maar dan voor tekst.

Om de waardes in en vanuit Text Nodes te krijgen gebruik:

* `.data` (hiermee kan je geen teksten uit attributes krijgen, dan moet je onderstaande gebruiken)
* `.nodeValue`


## Nodes aanmaken

* `.createTextNode( ' ' );`
* `.creatElement( ' ' );`
* `.appendChild( childNode );` Hiermee zet je een child in een element.
* `.createDocumentFragment( ' ' );` Om meerdere Nodes in te zetten om later als 1 element neer te zetten in een element. Een Document Fragment is een container voor Nodes.


## Nodes toevoegen aan de DOM

* `ParentElement.insertBefore (Nieuwe node, waarvoor je het wil plaatsen);`
* `insertAfter` bestaat niet, gebruik dan `.nextSibling` op het element waarna je het wil plaatsen.
* `replaceChild( nieuw element, element om te vervangen);`


## Kopiëren van Nodes

* `cloneNode( true );` met true wordt het element met alle children gekopieerd. Let er op dat bij Clonen dat attributen zoals id wel de juiste waardes krijgen.


## Verwijder Nodes van de DOM

* `element.remove();`
* `parentEl.removeChild( );` deze is handiger, je kan dan het element bewaren en weer oproepen.

Style aanpassen van Nodes

* met `window.getComputedStyle( el).propToChange;` (hiermee krijg je de inhoud van de propToChange)
* `el.style.propToChange = "destyle";`  hiermee zet je inline styling.
* `document.styleSheets;` hiermee krijg je een array van de stylesheets die opgeroepen worden.
* `styleSheet.insertRule( selector, rule, index );` als je een stylerule wilt aanpassen in een stylesheet.


## Attributes

Om met de attributes te spelen gebruik je de propertie `.attributes`. Je krijgt dan een array van informatie terug.

Om de informatie van de attribute te krijgen gebruik je:

* `.nodeName`
* `.nodeValue`

Om de waardes van attributes aan te passen:

* `.getAttribute()`
* `.setAttribute()`

Om Class attributes te krijgen:

* `.getAttribute('class')`
* `.className`
* `.classList` → is nieuwer

Om Data attributes te krijgen:

* `.getAttribute('data-attr')`
* `.dataset` → je krijgt een DOMStringMap; hierin staan de data attributes van een element.

Er zijn betere manieren om data op te slaan ipv in je markup. Liever niet in je HTML opslaan.


## Formulier elementen

Bij formulier elementen om deze te laten werken zet de `<form>` tag er om heen. Deze heeft een attribute method. De method attribute kan de waardes hebben GET of POST. Als je GET doet zie je de waardes van de invulvelden in de url terugkomen. Bij POST niet. Dit laatste moet je officieel doen zodat alles verborgen blijft, maar de GET methode is handig voor testen. De id attribute is handig voor referentie zodat je vanuit je JS aan het formulier kan referen. De name attribute is belangrijk voor het doorgeven van de info zodat je weet welke info bij de form met die naam hoort.

De attributes van form elementen kan je makkelijk met JS aanpassen.

De value attribute is de waarde die je bij een inputveld invult. Deze kan je ook voorinvullen, dan zie je bij het komen op een website dat er al iets in de inputvelden staat. Dat kan zijn als je al iets weet zoals postcode of andere adres gegevens.

Om formulier elementen aan te spreken kan je gebruik maken van:

* `document.forms`
* `document.getElementById`
* `document.getElementsByName`

Selecteer een onderdeel van een form. Gebruik:

* Door de elementen heen lopen
* Selecteer specifieke elementen

Om te werken met radio, checkbox en option voor te checken op checked of ze daarop te zetten:

* `radio.checked = true;`
* `checkbox.checked = true;`
* `option.selected = true;`


## Events

[Events](https://developer.mozilla.org/en-US/docs/Web/Events) zijn technisch gezien een onderdeel van de DOM.

Selecteer het element waarop iets moet gebeuren. Zeg welk event moet plaats vinden om een bepaalde functie te activeren.

Te veel eventlisteners kunnen de performance verslechteren. Soms kan het beter zijn op een parent element een eventlistener te zetten.

Type:

* mouse events
* keyboard events
* form events
* media events
* drag en drop events
* window events (scrolling, browser die veranderd van grootte)
* Etc...en nog meer

Kan het inline zetten, dus in de HTML, bijvoorbeeld met onclick=" ". Denk er aan dit is niet Best Practice, dus alleen in noodsituaties gebruiken.

Bij [Global Event Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) gebruik je bijvoorbeeld een onclick, maar dan in het JS bestand. Je kan de onclick koppelen aan een element. Hierbij moet je altijd de functie voor de Global event handler zetten. Je gebruikt een function reference.

Event Listeners is de meest gebruikte en de beste manier om Events te gebruiken; [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

Weghalen gaat met: [removeEventListener();](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

Gebruik geen anonieme functies met Event Listeners, want je kan de removeEventListener niet gebruiken bij een anonieme functie.

[Event Propagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase) gaat over :

* capturing; fase 1 naar het element toe vanaf Window
* Target: fase 2 het terecht komen bij het element
* Bubbling: fase 3 het weer terug gaan naar de Window

Een Event Listener kan inhaken op de Capturing of Bubbling fase. Wat kan je hier mee? Het kan zijn dat je wilt dat een parent element weet wat er gebeurt in een child element en of dit er voor of er na moet gebeuren.

Event Object: heeft properties met informatie over het Event dat net gebeurd. Middels functies is deze info te verkrijgen.