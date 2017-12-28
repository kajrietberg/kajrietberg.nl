---
layout: post
title: Responsive afbeeldingen
tags: front-end, HTML, CSS
page-class: article
---


##De Picture-tag, of te wel responsive images

Doordat we steeds o.a. meer verschillende schermgroottes hebben en andere type schermen is het tonen van afbeeldingen op je website ook veranderd. Soms wil je een kleinere afbeelding of een scherpere, soms een lichtere of een ander type.
Hiervoor hebben we nog steeds de img tag, maar deze is uitgebreid met srcset en sizes. Zie het code voorbeeld:

```
<img src="small.jpg"
     srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w"
     sizes="(min-width: 36em) 33.3vw, 100vw"
     alt="A rad wolf">
```

scrset zegt welke afbeelding wanneer getoond moet worden. Als er ruimte is voor een afbeelding van 1024px zal large.jpg getoond worden (1024w staat voor de breedte van de afbeelding, dus 1024px width). Je kan door achter de afbeeldingen 1x of 2x te zetten bepalen wanneer een afbeelding getoont moet worden bij schermen met een ander pixeldichtheid. Bij een pixeldichtheid van 2x zal dan die afbeelding getoond worden.
sizes verteld hoeveel ruimte de afbeelding mag gebruiken. Hiervoor is een media-querie gebruikt, deze zegt dat bij een minimale schermbreedte van 36em de afbeelding 1/3 van de viewport moet gebruiken en anders altijd 100% van de viewport.

De srcset en sizes atrributes worden ondersteunt in alle browsers, behalve IE11 en Opera mini. Zie [https://caniuse.com/#feat=srcset](https://caniuse.com/#feat=srcset).

De picture element bevat 0 of meer source elementen en 1 img-tag waardoor je voor verschillende scherm-senario's verschillende afbeeldingen kan tonen. De browser kijkt welke source het beste past, kan deze niet 1 vinden wordt de img-tag gebruikt. De browser bekijkt de srcset, media en type attribute om te zien welke afbeelding past bij de status van de afbeelding op dat moment.

De picture-tag wordt ondersteund in alle webbrowsers behalve IE11 en Opera-mini [https://caniuse.com/#feat=srcset](https://caniuse.com/#feat=picture)

Voorbeeld van de picture-tag

```
	<picture>
	  <source media="(min-width: 40em)"
	    srcset="big.jpg 1x, big-hd.jpg 2x">
	  <source
	    srcset="small.jpg 1x, small-hd.jpg 2x">
	  <img src="fallback.jpg" alt="">
	</picture>
``` 
 
Het gebruik van de img tag prefereert de voorkeur tov de nieuwe Picture-tag. De reden hiervoor is dat de img tag flexibeler is, die laat de keuze aan de browser over om te bekijken wat het beste past. Bij de picture-tag gebruik je een source en de eerste scourse die de browser tegen komt wordt gekozen door de browser. En dat hoeft niet de best passende keuze zijn.
Gebruik de picture element als het om art-direction gaat. Of als je verschillende file-types wil tonen.

Met de srcset attribute kan je dus middels een media-query bepalen dat een afbeelding om te printen zwart-wit is.

Bovenstaande geldt voor inline afbeeldingen. Maar kan dit ook voor CSS?

Als je achtergrond afbeeldingen gebruikt in CSS, kan je gebruik maken van images-set bij resolution switching: [https://caniuse.com/#feat=css-image-set](https://caniuse.com/#feat=css-image-set). Wordt door steeds meer browsers gedragen. (zie demo: [https://cloudfour.com/examples/image-set/](https://cloudfour.com/examples/image-set/)). En anders gebruik media-queries in je CSS.


###Interessante links

* [Responsive Image Workgroup](http://responsiveimages.org/)
* [Use-cases van responsive images](http://usecases.responsiveimages.org/)
* [MDN over de img-tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
* [MDN over de picture-tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
* [Goede uitleg over het gebruik van img en picture tag](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
* Verschillende voorbeelden, met ook mengvormen: https://dev.opera.com/articles/responsive-images/
* [HTML5rocks uitleg van de picture-tag](https://www.html5rocks.com/en/tutorials/responsive/picture-element/)
* [Gebruik niet altijd de picture element](https://cloudfour.com/thinks/dont-use-picture-most-of-the-time/)
* [Goede uitleg video van Jason Grigsby]: https://aneventapart.com/news/post/responsive-images-jason-grigsby-an-event-apart-video