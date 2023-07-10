---
title: Animatie op het web
tags: 
    - front-end
    - forms
    - animatie
    - design
    - interactie
    - post
---

In dit artikel (opsomming) over animatie staan mijn verzamelde bronnen en opmerkingen die naar mijn idee belangrijk of handig zijn om meer te weten te komen over animatie op het web. Als ik nieuwe bronnen vind plaats ik deze hier. Mocht jij een interessante bron hebben meld het mij, mijn contactgegevens staan onderaan de pagina.

## Animatie of motion design is...

Animatie is dat iets veranderd naar een andere toestand. Kan een beweging zijn of een andere vorm of een andere kleur. <br> 
Motion is beweging, iets zie je bewegen. Het verschil tussen motion en animatie is dat bij een animatie iets kan veranderen, maar dat hoeft geen beweging te zijn. Denk daar maar eens over na.
<br>
Tegenwoordig is Motion Designer een apart vak geworden. Er zijn bedrijven die Motion designers in dienst hebben. Zoals Google.


## Waarom beweging gebruiken?
Beweging is bedoeld om het gebruiksgemak te verbeteren. Overgangen verlopen soepeler. Het zorgt ervoor dat het natuurlijker overkomt.
<br>
Kijk welke vragen een bezoeker zich kan stellen op je pagina en laat daar beweging op aansluiten. Voorbeelden van deze vragen zijn:
- Wat moet ik hierna doen? De animatie neemt je mee in het proces van wat er moet gebeuren.
- Hoe weet ik of het formulier juist ingevuld is?


### Wat doet beweging?
Het neemt de bezoeker mee in de actie die het net deed en zorgt voor focus en orientatie waar je bent. De bezoeker heeft het gevoel dat het interacteert met echte elementen i.p.v. met een scherm. Schermen met beweging voelen meer levend en menselijk waardoor digitale producten tot leven komen. Bedenk daarbij wel dat levendigheid voor kinderen en jongeren anders is dan voor ouderen.
<br>
Beweging vertelt een verhaal. Het zorgt er voor dat een interactie niet uit losse onderdelen bestaat.


## Hoe zet je beweging in een design zodat een front-end developer het weet?

* Zet erbij welke waarden veranderen en met welke eenheden.
Denk daarbij aan: easing, timing, properties (de wat). Bij tijd zijn er zelfs al onderzoeken gedaan welke tijd het beste gebruikt kan worden voor welke onderdelen.
* [Schets wat er moet bewegen en hoe](http://valhead.com/2016/12/08/sketching-interface-animations-an-interview-with-eva-lotta-lamm/)<br>
In dit interview beschrijft Eva-Lot hoe ze animaties schets. Ze vertelt over een trigger die zorgt voor de animatie, de actie die daarna komt en als laatste de kwaliteit die laat zien hoe het gebeurd. Elk van deze heeft andere schets onderdelen en kan je op een bepalde manier aanduiden zodat het geheel uiteindelijk duidelijk wordt wat je als designer precies bedoelt.<br>
Schetsen is ook handig om eerste ideeen te bedenken en te bespreken met anderen.
* Gebruik storyboards [PDF van Rachel Nabors om te gebruiken](https://s3.amazonaws.com/stash.rachelnabors.com/downloads/storyboard.pdf)
* Of probeer een gif van de beweging/animatie te maken.


## Motion in webforms
We weten nu wat motion is en hoe we dit online kunnen gebruiken. In mijn oude werkveld van zorgverzekeringen aanvragen zijn webformulieren belangrijk. Je vraagt een zorgverzekering aan en daarvoor moet je verschillende vragen beantwoorden middels een webform. Mijn vraag hierbij is: "Hoe kunnen we een webformulier gebruiksvriendelijker maken, prettiger om in te vullen?". Ik denk dat Motion hierbij een rol kan spelen. Bewegingen kunnen een webformulier levendiger maken, het natuurlijker laten aanvoelen, de menselijke interactie meer in verwerken dan statische webformulieren doen. 

### Maar hoe doen we dit dan?
Val Head laat in [een screencast](http://valhead.com/2015/02/02/screencast-ui-animation-reviews-web-forms/) zien hoe je dit kan toepassen.

## De tools
Bovenstaand gaat meer over het ontwerpen en toevoegen van animatie aan een webpagina. Als je dit bedacht hebt en in een design verwerkt komt het volgende onderdeel en dat is de animatie bouwen. Je kan dit met CSS doen met daarnaast JavaScript libaries. Het is niet dat het ene de ander bijt. Er zijn verschillende libaries die je kan gebruiken. 

### CSS
Bij CSS werk je met de transition property en/of de animation property waarbij de @keyframes belangrijk is. 

### CSS of JavaScript
- CSS Tricks; [Myth Busting: CSS Animations vs. JavaScript](https://css-tricks.com/myth-busting-css-animations-vs-javascript/)
- [Alien Invasions, SVGs and CSS Animations](https://medium.com/helabs/alien-invasions-svgs-and-css-animations-d56c4d757209)

### JS libraries
- [GSAP](https://greensock.com/)
- [animejs](http://animejs.com/)
- [Motion for the web](http://mojs.io/)
- [three.js](https://threejs.org/)


## Voorbeelden:
- [Tobias Ahlin; moving letters](http://tobiasahlin.com/moving-letters/)
- [The Illusion Of Life: An SVG Animation Case Study](https://www.smashingmagazine.com/2016/07/an-svg-animation-case-study/)
- [A Guide to Browser Scroll Animations](https://developer.telerik.com/featured/guide-browser-scroll-animations/)


## Performance van web animaties

[CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/). Als je animaties gaat gebruiken op een website vraag je meer van de rekenkracht van de webbrowser en de computer. Denk er dus goed overna of het handig is wat je doet of dat het op een manier kan die minder rekenkracht nodig heeft.


## Skills:
- Kennis van animatie design
- [UX](https://lawsofux.com/): wanneer gebruik je wel en niet animatie.
- CSS
- JavaScript


## Tools
Een kleine opsomming van tools.
* Webdeveloper tools in Firefox en Chrome hebben animatie tools (Safari en Opera bekijken) [Visualize easing in devtools](https://hacks.mozilla.org/2016/11/visualize-animations-easing-in-devtools/)
* [Web animatie API](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/)
* [Vergelijk webanimatie technieken/tools](http://sparkbox.github.io/bouncy-ball/)
* Adobe Illustrator en After Effects
* HTML [canvas](https://caniuse.com/canvas) element
* WebGL: [WebGL and animation](https://webglfundamentals.org/webgl/lessons/webgl-animation.html)
* [pixi.js](http://www.pixijs.com/)
* [Bodymovin](https://aescripts.com/bodymovin/), After Effect plugin voor exporteren van animaties
* [Spiritjs](https://spiritapp.io/)


## Boeken
De hier genoemde boeken zijn al wel ouder, maar volgens mij nog wel relevant. 

* [Val Head, Designing Interface Animation](http://valhead.com/2016/07/26/designing-interface-animation-is-now-available/)
* [Sarah Drasner, SVG Animations](http://shop.oreilly.com/product/0636920045335.do?intcmp=il-web-books-videos-product-na_new_site_introduction_to_svg_animation_body_text_cta)
* [Rachel Nabors, animation at work](https://abookapart.com/products/animation-at-work)


## Bronnen:
Net zoals bij de boeken oudere artikelen maar volgens mij wel relevant voor basis informatie over het onderwerp web en animatie.

* [UX Planet; Motion in UX Design](https://uxplanet.org/motion-in-ux-design-90f6da5c32fe#.49bacsb9l)
* [A List Apart; Communicating Animation](http://alistapart.com/article/communicating-animation)
* [Google Design; Making Motion Meaningful](https://design.google/library/making-motion-meaningful)
* [A List Apart; Patterns and Purpose, an Excerpt from Animation at Work](https://alistapart.com/article/patterns-and-purpose)
* [The 12 Principles of Animation](https://www.creativebloq.com/advice/understand-the-12-principles-of-animation)
* [A Comparison of Animation Technologies](https://css-tricks.com/comparison-animation-technologies/)

## Conferentie talks:
* [Rachel Nabors Smashing Conf](https://vimeo.com/163510676)
* [Rachel Nabors The web in motion at Front-Trends 2016](https://www.youtube.com/watch?v=jX_TWlDe-Is&feature=youtu.be&list=PLBevk0eXLOGdZ4yHChA-JW69DCBe7uGkJ)
* [Sarah Drasner Fronteers conf 2016](https://vimeo.com/194963386) en de [slides](http://slides.com/sdrasner/functional-fronteers#/)
* [Val Head: “Choose Your Animation Adventure” at Fronteers Conference 2017](https://vimeo.com/240478145)


## Mensen om te volgen
- [Sarah Drasner](https://sarahdrasnerdesign.com/)
- [Chris Gannon](https://gannon.tv/)
- [Val Head](https://valhead.com/)


## Nieuwsbrieven
- Val Head's [The UI Animation Newsletter](http://uianimationnewsletter.com/)


## Design bureau’s die werken met Animatie in de webbrowser:
- [Clarify](https://clarify.nl/)
- [Pixelpillow](https://www.pixelpillow.nl/)

