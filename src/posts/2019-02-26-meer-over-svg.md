---
layout: post
title: Wat is SVG?
tags: ['svg', 'post']
page-class: article
---


## Wat is een SVG?
SVG is een mark-up taal net zoals HTML. SVG bestaat uit XML. Het beschrijft aan de browser wat deze moet tonen. 
Verschil tussen HTML en XML is dat XML structuur aangeeft en HTML meer beschrijft hoe de informatie getoond moet worden. 
Je kan makkelijk in je developer text-editor aanpassingen doen aan een SVG. 
Een SVG is een vector afbeelding wat er voor zorgt dat hoe groot je deze ook maakt het is altijd scherp wat je ziet. 
Dat is het grote voordeel van SVG. Hierdoor weet je dat op elk type beeldscherm je afbeelding scherp getoond wordt.

SVG is perfect te gebruiken voor iconen, logo's, kaarten, lijntekeningen, etc. Let hierbij op of de SVG niet zwaarder is dan een jpg of png variant. Voordeel van SVG is dat deze via CSS, een style-tag in de svg of inline styling makkelijk aan te passen is.

SVG's kan je inline in je HTML document zetten o.a. middels object-, img-, svg-tags of verder als achtergrond afbeelding. Als achtergrond afbeelding kan je ze als data url invoegen waardoor je geen extra http request maakt. Omdat het vaak om een extra design element gaat niet erg dat het in de CSS staat.

SVG's zijn vrij toegangelijk voor screen readers. Je kan er teksten in verwerken, maar ook een titel of een omschrijving toevoegen. Verder op in dit artikel beschrijf ik waar je hierbij op moet letten.

Het coordinaten-systeem binnen je svg blijft bestaan, ook als je breedte of hoogte aanpast, dat is een groot voordeel.

Een SVG kan bestaan uit: `<line> <rect> <circle> <ellipse> <polygon> <polyline> <path>`.
Attributes kunnen zijn: `fill` voor de kleurvulling, `stroke` voor de kleur van de border, `stroke-width` voor de dikte van de border. Hiermee kan je dus inline een svg kleuren, maar je kan deze attributes ook in de CSS zetten en zo de svg kleuren, hiervoor moet de SVG wel inline in je HTML zijn opgenomen.


## Maken
SVG's kan je makkelijk maken via Sketch of Adobe Illustrator. Afbeelding als SVG opslaan. Volgens Sara Soueidan kan je het beste svg's exporteren vanuit Illustrator, die doet dit op moment van schrijven beter dan Sketch.


## Workflow: gebruik op het web
Voor gebruik op het web is het aan te raden de SVG eerst te optimaliseren via bijvoorbeeld: [SVGomg](https://jakearchibald.github.io/svgomg/). Je kan hiervoor ook een Grunt plugin gebruiken als dit beter past in je work-flow. Voor het plaatsen in je website als achtergrond afbeelding is [GrumpIcon](http://www.grumpicon.com/) perfect te gebruiken. Het maakt png afbeeldingen voor fallback en zet de svg als data url om. Hiervan is ook een Grunt plugin.


## Hoe werkt een SVG?
Je kan tekst toevoegen aan een svg middels een text-tag. `<text></text>`

Een SVG bestaat uit de elementen:
- `<svg>`: De svg-tag waardoor de browser weet dat het om svg gaat. In deze tag staat vaak benoemt de hoogte en breedte van de svg, verder de viewbox.
- `<symbols>`: de symbol-tag symboliseert een afbeelding welke je nog niet ziet. Door later in je HTML de use-tag (deze is onderdeel van een shadow-dom) te gebruiken roep je een bepaald symbol aan om te tonen in de HTML. Zo kan je bepaalde afbeeldingen makkelijk op verschillende plekken gebruiken zonder de hele code van die afbeelding in je HTML te plakken. Voorbeeld is een svg spritesheet met bijvoorbeeld icons.
- `<polygon> <circle> <rect> <clipPath> <g>`: dit zijn elementen van je afbeelding. De g-tag groepeert bij elkaar horende elementen binnen een svg.
- `<defs>`: Definieert elementen en deze elementen kan je tonen in je website via `<use>`.
- Elk element kan een `<title>` en `<desc>` hebben.
- `path` geeft aan welk pad getoont moet worden door de browser. Hierin is de `d` de afkorting van data.	

Inline svg met styling geven dit door aan de andere svg's die inline staan.

Om een svg te kleuren die in een `<use>` zit gebruik je css variabelen, met `fill=currentColor` kan je 2 elementen kleuren.
En anders gebruik custom properties `var(--primaty-light)`.
Gebruik een sprite en use om zelfde svg's vaker weer te geven en als ze verschillende kleuren nodig hebben, gebruik custom propeties.

```
	<svg>
		<use xlink:href="path/to/sprite.svg#twitter">
	</svg>
```

### SVG sprite
Een svg-sprite krijgt standaard een 300px bij 150px van browsers. Zet er dus een height en width van 0 op en een visibility: hidden;. Een display: none; zorgt er voor dat in sommige browsers de icon niet getoond wordt.

Met een `<img>` tag kan je de sprite afbeeldingen tonen met `<view>` of `viewBox()`.


### Viewbox/preserveAspectRatio
The viewport is de voorste laag --> de browser window of de svg tag
The viewbox is de 2de laag --> de svg afbeelding --> alles binnen de svg tags.

Om witruimte om de svg te krijgen maak de viewbox --> -1 -1 802 602 (omdat je -1 doet moet je bij width en height er een extra bij optellen), letterlijk zoom je in en uit.

Om de aspect ratio te behouden van een svg gebruik dan `<svg preserveAspectRatio="xMaxYMax" meet of slice>`
Waarby xMax ook xMin of xMid kan zijn, zelfde geldt voor de yMax. Daarnaast kan je nog `meet` erbij zetten (meet de sides of the viewport) dan blijft de svg helemaal zichtbaar en zet je er `slice` bij wordt deze zo groot als de inhoud van de afbeelding (vul het geheel).
Je kan het vergelijken met background-size en de background-position in CSS.


## SVG gebruiken in je website
Verschillende manieren staan hier boven al beschreven. Verder kan je op [CSS-Tricks: Using SVG](https://css-tricks.com/using-svg/) de verschillende manieren zien.
Voordeel van SVG is dat je geen extra http-request hebt omdat je het inline kan plaatsen. Een SVG is net zoals HTML opgebouwd uit verschillende onderdelen die met JS te bereiken zijn en dus te manipuleren.


### Clip-path
Hiermee kan je een stuk uitsnijden en dan wel of niet tonen. Gebruik hiervoor bijvoorbeeld circle(); of polygon();
Je kan beter svg clip-path gebruiken ipv [CSS clip-path](https://caniuse.com/#feat=css-clip-path).


### Mask
Browsersupport is slecht bij [CSS mask](https://developer.mozilla.org/en-US/docs/Web/CSS/mask), je kan beter svg masking gebruiken.


## Hoe is browser-support?
Zie [Can I Use](https://caniuse.com/#feat=svg). Uit eigen ervaring merkte ik dat je de hoogte en breedte moet benoemen in de svg zelf voor IE. Anders is de svg erg klein. Kijk je op Can I Use zie je deze opmerking ook.


## Hoe animeer je SVG met CSS?
Als je gaat animeren, zorg er voor dat je van te voren de svg optimaliseert. Doe dat niet na die tijd. Een svg heeft een navigeerbare DOM, je kan dus elk element bereiken met JavaScript en CSS.

https://www.august.com.au/blog/svg-animation-with-greensock/
https://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/

Animeren van SVG kan via SMIL, CSS en JS. SMIL wordt afgeraden omdat o.a. Chrome het niet meer zou ondersteunen. Kijk je op Can I Use of op [MDN docs over SMIL](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL) dan kan je zien dat Chome het toch nog ondersteunt.
Met CSS is (nog) niet heel goed te animeren, maar bepaalde zaken wel. Dan is de verschijningsvorm verschillend in de verschillende browsers. Goed kijken wat lukt. Het beste is JS te gebruiken. Je kan gebruik maken van verschillende library's.

Top 3:
- GreenSock (voor de meer moeilijkere animaties)
- snap.svg (jQuery van animatie)
- anime.js (in opkomst, maar je gebruikt meer code dan GreenSock)

Animaties kan je met de [Inspector Tools van Firefox](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Work_with_animations) in de browser bekijken en aanpassen.
Onder de regels staan ook de instellingen van @keyframes zodat je die kan aanpassen via de developer tools, je moet hiervoor wel iets naar beneden scrollen. 
Ook zijn de timing functies van je animatie aan te passen via de developer tools.

### Wanneer animeren met CSS of JS?
In [The Animation Newsletter](https://us2.campaign-archive.com/?u=6fbaddc8c1fce7588d1a35cb2&id=6a31c014a2) beschrijft Val Head hoe ze kiest tussen CSS of JS. Ze gebruikt hiervoor 3 verschillende regels.
Hierin beschrijft ze dat ze SVG's voornamelijk animeert met JS en dan met Greensock. En komt het neer als de animatie complexer wordt of meerdere animaties bevat dan is het gebruik van JS handiger.
Een beschrijving van wanneer JS of CSS te gebruiken geeft Zell Liew in zijn artikel [Should you use CSS or JavaScript for web animations?](https://www.heartinternet.uk/blog/should-you-use-css-or-javascript-for-web-animations/). Deze beschrijving is wat uitgebreider dan die Val Head, maar komt overeen met wat zij beschrijft.

<blockquote>
    For simple two-state animations, I recommend you use CSS transitions. For more complicated animations, I recommend you use CSS animations or JavaScript.
    At the time of writing, the Web Animations API is still not well supported yet, so the best possible way to animate is with GSAP, which is an amazing library.
    Make sure you provide a non-animated, but workable version of your site for people who don’t have JavaScript enabled. They should still be able to use your website even when it’s not animated.
</blockquote>
Quote van Zell Liew

De eenvoudigste manier van animeren kan je met CSS transitions doen. In Zell Liew's artikel [CSS Transitions explained](https://zellwk.com/blog/css-transitions/) uitgelegd hoe die werken.
Iets lastiger wordt het met CSS animations, maar gelukkig legt Zell Liew dit weer uit in zijn artikel [CSS Animations explained](https://zellwk.com/blog/css-animations/). Bij CSS animations kan je de tijdlijn beinvloeden zo kan je er voor zorgen dat er meerdere states worden bereikt.

Voor SVG's is het dus het handigste om gebruik te maken van JavaScript en de library Greensock is het handigste. Bekijk Sarah Drasner haar video over [SVG en animeren](https://www.youtube.com/watch?v=ZNukcHhpSXg).

### De performance van animaties
Het animeren van elementen in je website heeft invloed op de performance van je website. Bij sommige onderdelen moet de hele pagina weer opgebouwd worden.
Meer informatie over animeren en performance kan je vinden in het artikel [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)


## Accessible SVG's
Een svg afbeelding kan net als een andere afbeelding een alt-tekst nodig hebben voor mensen die de tekst laten voorlezen. Als er al tekst om de afbeelding heen staat die uitlegt wat je ook op de afbeelding ziet heb je geen alt-tekst nodig, voeg dan aan de svg-tag toe: aria-hidden="true". Kan zijn dat in de `<figcaption>` al een beschrijving staat.

Om echt gebruik te maken van een toegankelijke SVG afbeelding moet je deze inline zetten.
Zet bij een inline SVG in de title tag een beschrijving van de afbeelding. Is ook een tooltip als de muis er overheen gaat.
Door bugs in Chrome en Firefox voeg je toe aan de title-tag: id="title" en aan de desc-tag: id="desc".

Voeg aan de svg-tag toe: role="img" en aria-labelledby="title desc".
Voeg aan de svg-tag van grote/complexe svg's toe: role="group". Hierdoor weet een browser en screenreader dat het bij elkaar hoort. Bij complexere afbeelding voeg role="presentation" toe aan onderdelen die niet voorgelezen hoeven te worden, maar alleen voor de sier zijn.


## Tekst in SVG
Met `<text>` kan je tekst toevoegen aan een SVG waardoor de tekst toegankelijk, vindbaar en selecteerbaar is.
De tekst kan je stylen via `svg text {}`. Zie [Optimizing SVG Text & Image Delivery with Inline SVG](https://www.sarasoueidan.com/blog/optimizing-svg-delivery-with-svg/).


## SVG en datavisualisatie
Datavisualisaties zijn perfecte uitingen om svg te gebruiken. Het zijn vaak lijnen. Door SVG te gebruiken zijn ze mooi scherp op elk beeldscherm en in elke grootte. De library D3 zorgt er voor dat data wordt gekoppeld aan een SVG element. 


## SVG filters
In CSS hebben we filter mogelijkheden. Maar dit zijn eigenlijk versimpelde SVG Filter mogelijkheden. Met de SVG Filters kan je meer en daarom zegt Sara Soueidan in haar serie artikelen over SVG Filters, [SVG Filters 101](https://tympanus.net/codrops/2019/01/15/svg-filters-101/), op Codrops dat je beter SVG Filters kan gebruiken. Zij is een meester als het om SVG's gaat, dus lees vooral haar artikelen over SVG Filters.


### Interessante links:
- [Accessible SVG's](https://css-tricks.com/accessible-svgs/) (Zie voor meer ingewikkelde svg's het artikel)
- [SVG op MDN](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [SVG als background-image gebruiken](https://codepen.io/noahblon/post/coloring-svgs-in-css-background-images)
- [Wat je moet weten over SVG](https://www.sarasoueidan.com/workshops/svg-coffee-cup/) door Sara Soueidan
- [CSS Tricks mega list svg information](https://css-tricks.com/mega-list-svg-information/)
- [How to handcode a svg](https://webdesign.tutsplus.com/tutorials/how-to-hand-code-svg--cms-30368): heeft een handige opsomming met beschrijving van de elementen in een svg. Geeft een goed inzicht hoe simpele elementen zoals een lijn of een cirkel in SVG zijn opgebouwd.
- [Practical SVG](https://alistapart.com/article/practical-svg) van A List Apart
- [Praktische tips over svg](http://mediatemple.net/blog/tips/an-svg-that-isnt-all-svg/)
- [Handige tips mbt Sketch en svg](https://medium.com/sketch-app-sources/preparing-and-exporting-svg-icons-in-sketch-1a3d65b239bb)
- [Integrating SVG into your site](https://www.heartinternet.uk/blog/integrating-svg-site/)


### Interessante links animaties:
- [MDN - Work with animation](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Work_with_animations)
- [Smashing Magazine - HTML5 SVG Fill Animation With CSS3 And Vanilla JavaScript](https://www.smashingmagazine.com/2019/01/html5-svg-fill-animation-css3-vanilla-javascript/)
- [Snipcart website - Creating Vue.js Transitions & Animation: Live Examples](https://snipcart.com/blog/vuejs-transitions-animations)


### Voorbeelden
- [Sara Soueidan's Codepen's](https://codepen.io/SaraSoueidan/#)
- [Angled background sections met clip-path](https://codepen.io/SaraSoueidan/pen/RJRjvN)


### Boeken:
- Smashing Magazine Book 5; hoofdstuk over SVG
- [SVG Essentials](http://shop.oreilly.com/product/0636920032335.do)


### Video's
- [Sarah Drasner - SVG can do that?! in 2017](https://www.youtube.com/watch?v=ADXX4fmWHbo)
- [Chris Coyier - The Wonderful World of SVG in 2015](https://www.youtube.com/watch?v=tsGa-gcckwY)


### Mensen om te volgen
- [Sara Soueidan](http://sarasoueidan.com/)
- [Sarah Drasner](http://sarahdrasnerdesign.com/)


### Handige tools:
- [SVGOMG](https://jakearchibald.github.io/svgomg/) maakt SVG's lichter door overbodige zaken er uit te halen
- [Grumpicon](http://www.grumpicon.com/) voor inline maken van svg voor gebruik in CSS
- [Boxy svg](https://boxy-svg.com/): online SVG editor of met een app
- [CSS clip-path maker](https://bennettfeely.com/clippy/)
- [SVG Coordinate system](https://www.sarasoueidan.com/demos/interactive-svg-coordinate-system/)


### Plugins:
- [PostCSS plugin; Write SVGs directly in CSS](https://github.com/jonathantneal/postcss-write-svg)


### Workshops
- [SVG workshops van Sara Soueidan](https://www.sarasoueidan.com/workshops/)