---
layout: post
title: Mijn interpretatie van de Basis van JavaScript
tags: front-end, JS
page-class: article
---

Afgelopen jaar heb ik de tijd genomen om mij te verdiepen in de theorie achter JavaScript. De reden hiervoor is dat ik JavaScript wil leren gebruiken en dus snappen wat ik doe. Hiervoor verschillende video's bekeken, artikelen gelezen, Paul Verbeek-Mast heeft mijn vele vragen beantwoord, geoefend met de console. Het eerste stapje is gezet.
Hier staan mijn aantekeningen over de basis van JavaScript. Ik vul ze steeds aan. De reden dat ik ze nu al online zet is om feedback te krijgen van anderen waardoor ik weer leer. Heb je aanvullingen of denk je dat ik het verkeerd heb geinterpreteerd, geef het aan mij door. Mijn twitter-handle en mailadres staan onderaan de pagina.


##Wat is JavaScript?
JavaScript is een programmeertaal. Het is een taal bedoelt voor het web en vooral voor de webbrowser. Het maakt de laatste jaren een flinke opmars omdat het ook gebruikt wordt als back-end taal met Node.js. 
Brendan Eich heeft de naam JavaScript bedacht omdat het de bedoeling was om HTML te koppelen aan Java-applets. Maar JavaScript heeft als programmeertaal niks te maken met de programmeertaal Java. Microsoft kwam in het begin met hun eigen versie van JS, genaamd JScript. Brendan Eich wilde voorkomen dat er meerdere versies van JS zouden ontstaan heeft hij Ecma gevraagd het te standariseren. Hierop is EcmaScript ontstaan. EcmaScript is de specificatie van JavaScript. Hierin staat beschreven aan welke regels het moet voldoen, welek onderdelen er in horen en hoe de opbouw van een regel is. Ik zie dit als de grammatica van de programmeertaal. Naast JS is o.a. ActionScript een implementatie van EcmaScript.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xfATDpVubK4?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

De JavaScript die je schrijft moet geinterpreteerd worden. Hiervoor is in de webbrowser een JS-engine die compileert de taal. Deze doet dit net voor het uitvoeren of zelfs tegelijkertijd met uitvoeren van de code (bron: You don't know JavaScript). Elke browser heeft een eigen JavaScript-Engine. En elke browser vendor bepaald welke onderdelen van EcmaScript in de browser worden ingebouwd. Hierdoor werkt niet alle JS in elke browser.


##Wat is programmeren?
Hierboven heb ik het over een programmeertaal. Maar wat is programmeren eigenlijk? 
Als mensen snappen we wat we zien. Een computer heeft er geen idee van en heeft uitleg nodig om iets te snappen en ook een stappenplan om iets uit te voeren. Dat stappenplan is programmeren.

Om de werkelijkheid begrijpbaar te maken voor computers zijn dingen als objecten te duiden.
Elk object heeft:

* properties: karakteristieken. Elke property heeft een naam (name) en een waarde (value). Elke property zegt iets over het object. Aan deze property's is het object te herkennen. 
* events: interacties met objecten. Bij het programmeren kijk je naar welke events wat moeten triggeren. Voorbeelden van events zijn muisklikken, 
* methods: is een manier van communiceren met een object waardoor je een bepaalde waarde terugkrijgt van het object of juist gedaan krijgt bij het object. Het is een taak die uitgevoerd wordt. Deze taak kan uit allemaal kleine taakjes bestaan, maar hoe die worden uitgevoerd hoef je niet te weten. Zie bij API de method die daar genoemd staat.


##Onderdelen van JavaScript

###Variabelen 
[MDN over variabelen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).
Variabelen maak je door te beginnen met var en daarna een variable naam, dit mag haast alles zijn.
Een variabele kan verschillende [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) hebben:

* String; een String heeft ook Properties en [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2) waardoor je verschillende acties op een string kan loslaten.
* [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number); Integers (hele getallen), Floating points (decimale getallen) en Positive en Negative Infinity. Je hebt verschillende functies die je kan gebruiken om acties los te laten op Numbers. Zoals:

** parseInt() maakt van een string een integer;
** parseFloat() maakt van een string een decimaal;
** toFixed(x) maakt van een decimaal getal een string met x-aantal decimalen;
** toString maakt van een getal een string.
** Met de [Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) kan je rekenen met Numbers, zie .

Je hebt ook [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), dit staat voor Not a Number. Duidt vaak op een error;
* Boolean; geeft een true of false terug.
* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array);  een collectie van waarden. Kan verschillende data-types hebben, zelfs met meerdere objecten, elke waarde is gescheiden met een komma. De index van een array is de positie van de waarde, start met 0. Je kan o.a. arrays samenvoegen, je kan het aantal waardes in een array krijgen, je kan ze sorteren. Met .push() voeg je items toe aan je array en met `.pop()` haal je de laatste weg. Met `.length` kan je zien hoeveel items er in de array zitten. Zo zijn er meer acties die je kan toepassen op een array.
* Object; Je kan je eigen objecten maken en koppelen aan een variabele. In dit object kan je properties toevoegen (deze zeggen iets over het object). Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object  
`
var post = {
     id: 2,
     title: 'Hello JavaScript'
}; 
post.title = 'Hello JavaScript!';
post.slug = 'hello-javascript';
console.log( post );
`

De `.title` na de variabele naam/object heeft de dotnotation.
* [Symbol](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/); zorgt er voor dat je objecten niet conflicteren als een andere ontwikkelaar dezelfde object naam zou nemen. Symbols mogen dezelfde naam hebben en conflicteren dan niet.


Een variabele is niet zijn waarde maar zijn containers voor hun waarde. Een variabele krijgt een inhoud die weer kan veranderen tijdens het lopen van het programma. De Constants heeft een vaste waarde, deze waarde kan je wel aanpassen als het programma gelopen heeft.
Voor een variabele zet je `var` en voor een Constants zet je `const`.  

var voorbeeld; hiermee heb je een variabele gedeclareerd (declared) en met var voorbeeld ="een voorbeeld"; is die gedefineerd (defined).

Volgens Zac Gordon is het handigste de variabelen aan de top te declareren en ze met een komma te scheiden.
`var  titel =  'Leer JS',
       content = 'Zet er maar wat neer',
       post; //Deze laatste wordt hier alleen maar gedeclareert en pas later gevuld met een waarde, als je deze later vult hoef je niet het woordtje var er voor te zetten.`

JS is een [weakly of loose Typed Language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof). Je hoeft niet te zeggen welk data-type een variabele is. In Java is dat wel zo.

Een variabele benoemt in het js bestand is een global variabele, deze is ook bereikbaar door andere functies in je JS. Een variabele benoemt in een functie is een local variabele, deze heeft lexical scoping.

Een variable gemaakt met let of const in een functie is een variabele met Block Scoping. Let er dus goed op waar je een variabele definieert. 

###This

Zie: [https://zellwk.com/blog/this/](https://zellwk.com/blog/this/)

###Comments

voor een heel stuk zelfde als in CSS `/*  */` of voor 1 regel met `//`


###Operators 

De hele lijst van [Operators staat op MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

`+ , -, *, /, =, ===, !, !==, ++, >, <, =>, =< +=, -=`

* Logical:
&& = AND
|| = OR
! = NOT

* String Operators: + voor samenvoegen Strings.
De + kan je gebruiken om getallen op te tellen, maar ook Strings samen te voegen. Voeg je een Number en een getal als string samen, wordt het een String.

* Conditional Operators:  werkt met ( ) ? true: false 

###Math

Met de modulus kan je de overgebleven getallen zien bij een deling. Dus 365 % 27 geeft 14. Dat zijn het aantal dagen die overblijven na het delen van 365 door 27.

* `Math.random();` geeft een random getal tussen 0 en 50.
* `Math.floor();` maakt van een decimaal getal een rond getal. Rond af naar beneden.


###Conditionals:
Onder deze conditie moet je dit doen en anders dat. if (...) doe dan dit ... else doe dan dat.... Wat na de if tussen de ( ) staat heet een [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Iterations).

[Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) ( ) ... case ....: doet iets break;  Break is nodig na elke case. Anders blijft het door gaan.

Verschil tussen Switch en Else if: bij Switch test je 1 conditie en is dan sneller als Else if. Switch gebruikt altijd ===, niet de lossere variant ==.

###Functions: 
In [functies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) zet je functionaliteiten die je graag weer wil hergebruiken. Een functie is vaak een naam met brackets  --( )-- er achter. Een functie heeft vaak arguments nodig, stukjes data, om hun werk te doen. De webbrowser heeft functies ingebouwd, maar je kan ook zelf functies samenstellen. Binnen een function heb je de return-statement die er voor zorgt dat het resultaat van de functie ook buiten de functie beschikbaar is. Dan kan de uitkomst pas gebruikt worden. De variabelen die binnen een functie worden gedefinieerd, zijn ook alleen daar bruikbaar, dit heet scoping. Een functie doet niks, pas op het moment dat deze aangeroepen wordt gebeurt er iets.

Een functie ziet er zo uit:

`//Function declaration
var addTwoNumbers = function(numberOne, numberTwo (dit zijn parameters)) {
var numberOne; (door dat deze nu in de functie zitten, mogen deze eerste 2 variabelen weg)
var numberTwo;
var (hier betekent var dat deze variabele die er aan komt dat deze alleen in deze functie mag bestaan) sum = numberOne + numberTwo;
return sum; (return geeft het antwoord terug, zonder dit stel je alleen de vraag en krijg je undefined)
}
addTwoNumbers(2, 5); //Function call`

Een functie gebruik je als je een taak vaker in je code wilt gebruiken. Zo kan je deze functie vaker aanroepen.

Anonieme functie = een functie zonder naam. Deze kan gekoppeld zijn aan een variabele. Zo'n functie hoeft maar 1x gebruikt te worden. Maar de waarde daarvan misschien wel vaker. Dan zet je de functie in een variabele.
Functie expression = Als je een functie op de plek zet waar de interpreter een expression zou verwachten. Hierdoor kan je er voor zorgen dat variabelen-namen niet met elkaar conflicteren. Deze moet je altijd afsluiten met een ;

Een [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) is een functie gekoppeld aan een object. 

Function call = functieNaam();
Function reference = functieNaam; 

Een IIFE (Immediately Invoked Function Expression) is een functie met () er om heen zodat de variabelen er in niet gebruikt kunnen worden door code van buiten de functie.

###Events:
[Gebeurtenissen zoals klikken met een muis of een toetsenbord aanslag](https://developer.mozilla.org/en-US/docs/Web/Events). Datgene wat luistert naar het event heet event listeners. De code die wordt uitgevoerd na dat het event is uitgevoerd heet event handlers.

###Loops
Met [een loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) kan je door een functie blijven gaan tot dat de conditional false aanduidt. Dan is het klaar, zo ga je door een lijst heen, do...., while...., do..while... of een for... loop (For in en For of).

Infinite loop is een loop die niet stopt omdat je niet aan je conditionals komt.

De For ... in looop gebruik je voor properties in object.

De For...of loop gebruik je in een collectie zoals een array.

Een Do.. While.. loop voert eerst iets uit en checkt daarna pas waar het aan moet voldoen.

De [break-statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) zorgt er voor dat je uit een loop gaat omdat voldoen is aan de conditie.

De [continue-statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) zorgt er voor dat je door gaat in de loop, maar slaat die conditie over.

###Object
Een object bestaat uit variabelen en functies. Deze variabelen worden properties genoemd en die functies worden methods genoemd.

Object.isMethod hier mee kan je via de isMethod functie iets doen met het object. Het object kan een Number of String zijn.
De isMethod kan je in je DevTools terug vinden. Dit zijn dan degene waar je webbrowser mee overweg kan. Deze lijken op die in jQuery worden gebruikt. jQuery heeft zichzelf overbodig gemaakt, in JS zijn nu verschillende methods die hetzelfde doen als wat jQuery doet/ deed.

Build-in object van JS zijn o.a. String, Number, Math en Date. Hiermee kan je spelen door de properties en methods die ze hebben.
Overig

Met console.log(); kan je een bepaalde variabele uitlezen. Hierdoor kan je o.a. debuggen om te kijken waar een fout zit als je deze hebt.

Een statement is een individuele instructie of een stap afgesloten met een ; of tussen {...}.
Expressions zijn vaak delen van een statement en zijn stukjes code die een waarde krijgen.
[Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) hebben een functionaliteit in JS, zoals var en function.

* undefined = nog niet gedefineerd, heeft nog geen waarde, maar bestaat wel.
* null = niks, echt helemaal niks.
* block = statements die bij elkaar horen. Hebben {} om zich heen. Alleen maar een block kom je niet snel tegen. Vaak is het gekoppeld aan een andere statement, zoals een if.
* scope = de reikwijdte van een functie. Variabelen die in een functie staan, staan in de scope van die functie.
* this = verwijst naar het object waaraan het gekoppeld is.


##Belangrijke termen

* interpolation: een variabele in een string zetten.
* hoisting: er uit halen/ optillen. Doordat een js-bestand eerst soort van gecompiled wordt worden bepaalde variabelen en functies in een bepaalde volgorde gezet waardoor ze daarna door de interpreter goed gelezen worden.
* coercion:
* scope: het bereik van een variable of een functie; lexical scope in die functie of die genest zijn. Of een global scope, boven in het bestand gedefineerd.
* scope chain: de ketting van het bereik van een variabele of een functie, deze gaat van binnen naar buiten/ of van beneden naar boven.
* closures: als een geneste functie gebruik maakt van een variabele in een parent functie dan doet deze aan een Close over. Dit noemen we een closure.
* garbage collection: 

##JS Reference

* [JavaScript de basis])https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Overzicht van alle onderdelen](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference)
* [Hoe gebruik je JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)