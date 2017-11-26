SVG


Wat is een SVG?

SVG is een mark-up taal net zoals HTML. SVG bestaat uit xml. Het beschrijft aan de browser wat deze moet tonen. Zo kan je makkelijk in je developer text-editor aanpassingen doen aan een SVG. Een SVG is een vector afbeelding wat er voor zorgt dat hoe groot je deze ook maakt het is altijd scherp wat je ziet. En dat is het grote voordeel van SVG. Hierdoor weet je dat op elk type beeldscherm je afbeelding scherp getoond wordt.

SVG is perfect te gebruiken voor iconen, logo's, kaarten, lijntekeningen, etc. Let hierbij wel steeds op of de SVG niet zwaarder is dan een jpg of png variant. Voordeel van SVG is dat deze via CSS of inline styling makkelijk aan te passen is.

SVG's kan je inline in je HTML document zetten middels obet, img svg tags, verder als achtergrond afbeelding. Als achtergrond afbeelding kan je ze als data url invoegen waardoor je geen extra http request maakt en omdat het vaak om extra design element gaat niet erg dat het in de CSS staat.

SVG zijn vrij toegangelijk voor screen readers. Je kan er teksten in verwerken, maar ook een titel of een omschrijving toevoegen.
Animeren

Animeren van SVG kan via SMIL, CSS en JS. SMIL wordt afgeraden omdat o.a. Chrome het niet meer gaat ondersteunen. Met CSS is (nog) niet hel goed te animeren, maar bepaalde zaken en dan is de verschijningsvorm verschillend in de verschillende browsers. Goed kijken wat lukt. Het beste is JS te gebruiken, je kan gebruik maken van verschillende library's, o.a. Greensock wordt hoog aangeschreven.
Maken

SVG's kan je makkelijk maken via Sketch of Adobe Illustrator. Afbeelding als SVG opslaan.
Workflow: gebruik op het web

Voor gebruik op het web is het aan te raden de SVG eerst te optimaliseren via bijvoorbeeld: https://jakearchibald.github.io/svgomg/. Je kan hiervan ook een Grunt plugin gebruiken als dit beter past in je work-flow. Voor het plaatsen in je website als achtergrond afbeelding is http://www.grumpicon.com/ perfect te gebruiken. Het maakt png afbeeldingen voor fallback en zet de svg als data url om. Ook hiervan is een Grunt plugin.




Hoe werkt een SVG?
Om de aspect ratio te behouden van een svg gebruik dan <code><svg preserveAspectRatio="xMaxYMax" meet of slice></code>
Waarby xMax ook xMin of xMid kan zijn, zelfde geldt voor de yMax. Daarnast akn je nog meet er bij zetten dan blijft de svg helemaal zichtbaar en zet je er slice bij wordt deze zo groot als de inhoud van de afbeelding.
Je kan het vergelijken met background-size en de background-position in CSS.

Een style tag in de svg kan voor de styling zorgen van een svg. Maar je kan ook via een CSS stylesheet de svg of onderdelen van de svg stylen.
Je kan tekst toevoegen aan een svg middels een text-tag. <code><text></text></code>

Een SVG bestaat uit de onderdelen:
- <code><svg></code>: DE svg-tag waardoor de browser weet dat het om svg gaat. In deze tag staat vaak benoemt en de hoogte en breedte van de svg, verder de viewbox en .....
- <code><symbols></code>: de symbol-tag symboliseert een afbeelding welke je nog niet ziet. Door later in je HTML de use-tag (deze is onderdeel van een shadow-dom) te gebruiken roep je een bepaalde symbol aan om te tonen in de HTML. Zo kan je bepaalde afbeeldingen makkelijk op verschillende plekken te gebruiken zonder de hele code van die die afbeelding in je HTML te plakken. Voorbeeld is een svg spritesheet met bijvoorbeeld icons.
- <code><polygon> <circle> <rect><clipPath><g></code>: dit zijn elementen van je afbeelding. De g-tag groepeert bij elkaar horende elementen binnen een svg.
- 


SVG gebruiken in je website.
https://css-tricks.com/using-svg/


Hoe is browser-support?
Zie https://caniuse.com/#feat=svg. Uit eigen ervaring merkte ik dat je de hoogte en breedte moet benoemen in de svg zelf voor IE. Anders is de scg erg klein. Kijk je op Can I Use zie je deze opmerking ook.


Hoe animeer je SVG met CSS?
Als je gaat animeren, zorg er voor dat je van te voiren de svg optimaliseert. Doe dat niet na die tijd.

https://www.august.com.au/blog/svg-animation-with-greensock/
https://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/


Accessible SVG's
Een svg afbeelding kan net als een andere afbeelding een alt-tekst nodig hebben voor mensen die de tekst laten voorlezen. Als er al tekst om de afbeelding ehen staat die uitlegt wat je ook op de afbeelding ziet heb je geen alt-tekst nodig, voeg dan aan de svg-tag toe: aria-hidden="true". Kan zijn dat in de <code><figcaption></code> al een beschrijving staat.

Om echt gebruik te maken van een toegankelijke SVG afbeelding moet je deze inline zetten.
Bij een inline SVG in de title tag een beschrijving zetten van de afbeelding. Is ook een tooltip als de muis er overheen gaat.
Door bugs in Chrome en Firefox voeg je toe aan de title-tag: id="title" en aan de desc-tag: id="desc".

Voeg aan de svg-tag toe: role="img" en aria-labelledby="title desc".
Voeg aan de svg-tag van grote/complexe svg's toe: role="group". Hierdoor weet een browser en screenreader dat het bij elkaar hoort. Bij complexere afbeelding voeg role="presentation" toe aan onderdelen die niet voorgelezen hoeven te worden, maar alleen voor de sier zijn.


Links: 
- https://css-tricks.com/accessible-svgs/ (Zie voor meer ingewikkelde svg's het artikel)


Interessante links:
- Wat je moet weten over SVG: https://www.sarasoueidan.com/workshops/svg-coffee-cup/
- Zeer uitgebreide opsomming met handige SVG links: https://css-tricks.com/mega-list-svg-information/
- Practical SVG - A List Apart: https://alistapart.com/article/practical-svg
- Praktische tips over svg: http://mediatemple.net/blog/tips/an-svg-that-isnt-all-svg/
- Wat handige tips mbt Sketch en svg: https://medium.com/sketch-app-sources/preparing-and-exporting-svg-icons-in-sketch-1a3d65b239bb
- Integrating SVG into your site: https://www.heartinternet.uk/blog/integrating-svg-site/
- SVG op MDN: https://developer.mozilla.org/en-US/docs/Web/SVG


Overige plugins:
- https://github.com/jonathantneal/postcss-write-svg


Bronnen
- CSS Tricks: https://css-tricks.com/mega-list-svg-information/


Boeken:
- Smashing Magazine Book 5; hoofdstuk over SVG
- SVG Essentials. http://shop.oreilly.com/product/0636920032335.do


Mensen om te volgen
- Sara Soueidan http://sarasoueidan.com/
- Sarah Drasner http://sarahdrasnerdesign.com/


Handige tools:
- svgomg, maakt SVG's lichter door overbodige zaken er uit te halen: https://jakearchibald.github.io/svgomg/
- Grumpicon, voor inline maken van svg voor gebruik in CSS: http://www.grumpicon.com/