---
layout: post
title: Communicatie met online webformulieren
tags: front-end, forms, input
page-class: article
---


Het internet is begonnen als een netwerk van computers om informatie met elkaar te delen. Hierbij was, naar mijn idee, de `<a>` tag het belangrijkste element. Hiermee zorgden en zorgen we nog steeds voor dat informatie aan elkaar gelinkt wordt. Zo kan je van het ene naar het andere springen. Hiermee kunnen we uren zoet zijn, zonder dat we door hebben wat we aan het doen zijn :-). We noemen dit surfen. Het toffe van het linken van informatie is dat de informatie die met elkaar te maken heeft aan elkaar gelinkt kan worden.

In de loop der jaren is het internet geeëvolueerd tot een medium waar niet alleen maar informatie te vinden is, maar waar je ook mee kan interacteren. We kunnen nu via webformulieren informatie verzenden en zo zijn er nog meer mogelijkheden tot interactie met een website. Aangezien mijn werkveld webformulieren behelst hou ik mij hier tot deze interactie. 
Doordat de interactie tussen websites/ applicaties en gebruikers steeds belangrijker geworden is, zijn onderwerpen als interactie design ook steeds belangrijker geworden.

De interactie van de gebruiker met een webapplicatie bestaat uit wat je ziet als gebruiker en waardoor je weet hoe je de applicatie/ website kan/moet gebruiken. Dit heeft te maken met uiterlijk. Daarnaast speelt de manier hoe je interacteert met de applicatie. In het begin van het internet was dit via desktop computers met een toetsenbord en muis, de stem begon later zijn entree te maken, nog weer later kwam het touchscherm en zo is de ontwikkeling mbt communiceren met een webapplicatie steeds verder gegaan. 
Dit is allemaal bedoelt om de communicatie makkelijker en prettiger te maken voor de bezoeker, maar ook voor degene van wie de applicatie is, want meer gebruikers die makkelijker door je applicatie gaan betekent waarschijnlijk meer omzet. 

Jason Grigsby heeft een kort filmpje online gezet waarin hij laat zien wat er qua input mogelijkheden is veranderd, vanuit Apple oogpunt. Je ziet dat de ontwikkelingen vooral de laatste jaren heel snel gaat.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UZFvybGp26I" frameborder="0" allowfullscreen></iframe>

De manier van interacteren wil ik opsplistsen in 2 manieren. Namelijk welke middelen gebruik je om te interacteren en de ander is hoe verloopt de interactie, dus wat is het uiterlijk en de vorm van de interactie.


##Input middelen

Ik werd wakker geschud voor [Jason Grigsby](https://twitter.com/grigs) tijdens de [Fronteers Conferentie van 2016](https://fronteers.nl/congres). Zijn talk ging over [Different input types](https://vimeo.com/194967832). Als eerste dacht ik aan verschillende soort input velden, zoals date, password, email, etc. Maar tijdens zijn talk kwam ik er achter dat het ging over middelen om input te geven aan een webapplicatie/site. De meeste manieren van interacteren met een applicatie/website kende ik al. Maar de manier waarop hij er over sprak was een eye-opener.

Zijn conclusie was/is dat we goed moeten opletten en ons niet moeten vastleggen op een bepaalde input manier, maar er voor zorgen dat de applicatie/website met alle middelen overweg kan. Zo open en breed mogelijk. Waardoor je waarschijnlijk ook voor toekomstige manieren bouwt.

Afgelopen jaren zijn er steeds meer input mogelijkheden bij gekomen en we weten niet wat er nog meer gaat komen. Hou daar dus rekening mee in het bouwen van je applicatie en zet het niet vast op een bepaalde invoermogelijkheid. Dit gebeurde eerder en nog steeds bij beeldschermen. We zetten de website op een vaste breedte, maar er zijn zo veel schermen dat je niet weet wat de juiste vaste breedte is. Dus beter flexibel/ adaptief bouwen.

De manier van invoer is niet betrouwbaar te detecteren. We kunnen dat dus niet gebruiken als parameter om iets op te bouwen. Net zoals we niet kunnen uitgaan van telefoon is touch en desktop is keyboard en muis. Tegenwoordig is desktop ook touch.
Vaak denken we vanuit onze eigen manier van communiceren met een applicatie. Hierop baseren we wat de prettigste of beste manier is. Dat hoeft natuurlijk niet zo te zijn. 

De les die je hier uit kan trekken is; bouw zo adaptief mogelijk zodat je applicatie toekomstig bestendig is. [Luke W](http://www.lukew.com/) laat middels een afbeelding zien dat [beelschermgrootte en touch of geen touch niet met elkaar samen hangen](http://static.lukew.com/unified_device_design.png).


Mijn opsomming van een aantal middelen waarmee je kan interacteren met een website/ applicatie met daarbij een korte uitleg en/of voorbeeld.


* Toetsenbord<br>
Toetsenbord kennen we allemaal, deze kan bedraad of niet bedraad zijn. het Qwerty toetsenbord is volgens mij het meest gebruikt, maar er zijn ook [andere indelingen](https://nl.wikipedia.org/wiki/Toetsenbordindeling).


* Muis<br>
De muis komt in verschillende vormen, bedraad, draaloos, met scroll wiel met touch scrollwiel, etc.


* Touchscreen<br>
De iPhone kwam met een touchscreen, nu is het ingeburgerd bij zowel kleine computers (smartphones en tablets) en grotere desktop computers. In het design van je website heb je hier rekening mee te houden zoals grotere knoppen omdat je rekening houdt met vingers die klikken ipv een muis.


* Stem<br>
Zou toch heerlijk zijn als je vragen op een formulier niet hoeft te typen, maar in een gesprek met je computer kan beantwoorden. Heerlijk in conversatie modus. Maar hoe doe je dat met accenten, dialecten? Die moet de computer allemaal begrijpen. Dus nog een hele klus ligt er voor ons.
Mooi beschreven in een voorbeeld op [The future of webforms](https://blog.prototypr.io/the-future-of-web-forms-4578485e1461#.60wu3f3eo). <br>
Gelukkig zijn er al beginnetjes mee. Er is een [Web Speech api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) voor de webbrowser. In Chrome kan je op [Google](https://www.google.nl/) met je stem een zoekopdracht geven. Verder hebben ze bij Google nog [interessante demo's](https://www.google.com/intl/en/chrome/demos/speech.html).


* Bewegingen<br>
Hierbij kan je denken bewegingen van je lichaam(sdelen) die geregistreerd worden door een camera (zie xbox). Maar ook aan bewegingen met je tablet of telefoon. Door de gyroscoop kunnen deze bewegingen geinterpreteerd worden en een actie aan verbonden worden.<br>
In de webshop [Warby Parker](warbyparker.com) kan je een bril op het hoofd van het model beter bekijken door je telefoon te bewegen. En op de desktop gebeurd dit middels de muis.<br>
Aan een weggooi beweging zou je de actie van iets weggooien/ verwijderen kunnen verbinden. Leuk voorbeeld is de [Paper Planes website](https://paperplanes.world/). Hier kan je een papieren vliegtuig vouwen en met je telefoon weggooien. Hou je telefoon goed vast als je de gooi beweging maakt.


* Camera<br>
Een voorbeeld van gebruik van je camera is het scannen van een QR-code in bijvoorbeeld de ING-app om geld over te maken. In Azië kan je middels QR-codes te scannen boodschappen bestellen in de Metro die 's avond bij je bezorgd worden.<br>
Foto van je creditcard om gegevens er uit te halen en makkelijk op [te nemen in een betaal-formulier](https://cloudfour.com/thinks/autofill-what-web-devs-should-know-but-dont/).<br>
Voor Zorgweb zouden we kunnen denken aan het scannen van je verzekeringspas om je huidige verzekering te weten. 


* Vingerafdrukken<br>
Over een paar jaar kan je misschien een zorgverzekering aanvragen via je vingerafdruk op je touchscreen. Nu kan je middels vingeafdruk je iPhone inschakelen. 


* GPS<br>
Hebben we ingebouwd in de [zorgzoeker van de Amersfoortse](https://zorgzoeker.amersfoortse.nl/apps/). Die bepaalt dan waar je in de buurt bent en en neemt dat adres als uitgangspunt.



* Hololens<br>
Hoe lang zal het nog duren voordat mensen hun zorgverzekering aanvragen via de Hololens.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kwn9Lh0E_vU" frameborder="0" allowfullscreen></iframe>



##Nieuwe interactie vormen

Naast de nieuwe input mogelijkheden merken we dat veel gebruikers online de menselijke interactie missen bij een applicatie. Soms is iemand die je helpt toch erg prettig, even die menselijke interactie, die goedkeuring dat het klopt wat je denkt en doet. 
Langzaamaan wordt hier ook mee geeëxperimenteerd. Verschillende mensen zetten voorbeelden online waarin ze proberen om de interactie tussen mens en machine menselijker te maken. Reden hierbij is natuurlijk een prettigere beleving en meer gebruikersgemak, maar wat ook meer conversie kan betekenen.

Voorbeelden van deze meer menselijke interactie kan je vinden op:

* Conversational form<br>
Een formulier waarin het gesprek wordt aangegaan met de bezoeker [Introductie tot de conversational form](https://medium.com/conversational-interfaces/introducing-the-conversational-form-c3166eb2ee2f#.nzamnvdcb)


* With Jack<br>
Hier kan je in de praktijk zien wat ze beschrijven in het artikel over de Conversational form. Het aanvragen van een quote voor een verzekering kan op een mensenlijker manier bij [With Jack](https://withjack.co.uk/quote/).


* Independer<br>
Independer probeert dit ook. Je ziet veel foto's van werknemers van Independer die je aankijken en een bericht aan je communiceren. Ze laten zien met wie je belt. 
Heb je de eerste gegevens ingetypt, zie je iemand die verwijst naar een tekstje. Hierin kan je klikken op een knop zodat je via teksten op de website extra hulp krijgt. Daarnaast kan je bellen. 


* Autofill<br>
Maak het invullen van je formulier makkelijker met [autofill](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill).



##Afsluiting:
We gaven onze websites een vaste breedte passend bij het gemiddelde scherm van dat moment, totdat we merkten dat het niet werkbaar was toen er een explosie kwam van verschillende schermen. En moesten we onze werkwijze aanpassen.

Met input mogelijkheden staat dit ook weer te gebeuren. We gaan uit van muis, toetsenbord en een beetje touch. Maar er zijn nog meer mogelijkheden. Houden we daar al rekening mee? Bouwen we adaptief genoeg dat we ons snel kunnen aanpassen? Wij als bouwers zijn niet degene die bepalen wat de beste input is. Wij moeten mogelijk maken dat alle gebruikers van een website makkelijk door de site heen kunnen. Test dus veel, ook met nieuwe manieren van input types en interactie vormen.
Kijk wat goed werkt voor de gebruiker en bouw daar op verder.

We zijn aangekomen bij een interessante tijd voor webapplicaties die de conversatie aangaan. Wij, die deze applicaties neerzetten, willen graag informatie van de website/applicatie bezoeker. Hoe zorgen we hiervoor? Hoe maken we het de bezoeker makkelijk? <br>
We zullen steeds meer de conversatie proberen aan te gaan met de bezoeker van de website/applicatie. We hebben hier steeds meer middelen voor, zoals de Web Speech API in de browser. 
Maar voordat dit echt op een goede manier ingezet kan worden kunnen we gebruik maken van foto's, persoonlijke teksten, makkelijk te doorlopen formulieren. Een belangrijke rol zal animatie en storytelling hier in krijgen. Ik verwacht dat deze middelen je zo door het proces heen loodsen zonder dat je als bezoeker in de gaten hebt dat je door een proces heen loopt. En dat je als bezoeker een goed gevoel overhoudt aan de conversatie met de website/applicatie.


##Meer info/ bronnen:

* [Adapting to input](http://alistapart.com/article/adapting-to-input)
* [Four thruths about input](https://cloudfour.com/thinks/four-truths-about-input/)
* [How voice assistants seemingly came from nowhere](https://medium.com/conversational-interfaces/how-voice-assistants-seemingly-came-from-nowhere-33747876b91f#.3btwcxcto)