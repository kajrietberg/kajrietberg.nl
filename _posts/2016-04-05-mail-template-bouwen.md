---
layout: post
title: Mail template bouwen; een startpunt
tags: front-end, mail
page-class: article
---

Email is nog steeds of weer een belangrijk communicatiemiddel. Het leek een tijdje er op dat we het minder gingen gebruiken. Maar in de stroom van sociale media is mail juist weer belangrijker geworden, je kan het makkelijker bewaren. Bedrijven sturen steeds meer post via de mail ipv briefpapier. En we abonneren ons liever op een nieuwsbrief dan constant maar alle sociale media af te lopen om bij te blijven. 
Het sturen van een goed leesbare mail en dan heb ik het niet over inhoudelijk maar over het uiterlijk is goed te doen, als je maar weet hoe. En dit hoe is anders dan het bouwen van een website. Zoals velen zeggen is het net zoals in de begintijd dat tabellen gebruikt werden voor het uiterlijk van je website. Het is weer terug in de tijd. 
De reden hiervoor ligt aan het feit dat er veel mail-clients zijn. De bedrijven die mailclients bouwen vinden het niet belangrijk genoeg om deze net zo vaak te updaten als met een webbrowser. Iets wat ik mij ook kan voorstellen.

Om voor onze klanten beter beslagen ten ijs te komen heb ik mij verdiept in het bouwen van mail-templates. De informatie die ik verzameld heb wil ik hier met jullie delen.

Door je te verdiepen in het bouwen van mail templates kan je klanten vertellen wat wel en niet mogelijk is. Zij weten vaak niet wat wel en niet kan en verwachten hierdoor dat bijvoorbeeld knoppen altijd rond zullen zijn. Wat dus niet zo is. 

<strong>Denk er aan: dit artikel is geschreven in april 2016.</strong> De ontwikkelingen gaan gestaag in de mail-wereld, maar ze zijn er wel. Er zullen betere en nieuwere technieken zijn. Bekijk de links onder aan het artikel voor plekken om deze nieuwere informatie te bekijken.


##Algemeen
Om de boodschap, wat heb je besteld, voor wie en wat zijn de gegevens van deze personen, over te brengen lijkt een single column layout het beste te werken. De boodschap moet duidelijk leesbaar zijn.

Een link in de mail met: "Lees in de browser" zou mooi zijn, mocht de mail niet duidelijk leesbaar zijn kan iemand er voor kiezen om de link in de browser te lezen. Maar dit zou betekenen dat de mail ook online zou moeten staan. Ivm de privacy kan dit niet altijd. 

Belangrijke boodschap bovenaan zetten ivm afbreken van een mail in een mail-client. Gebeurt vaak op mobiel.
Pixel perfect design in elke mail-client lukt je niet.

Melding op bedankt pagina dat mensen een bepaald mailadres toevoegen aan hun adressenbestand zodat de mail niet in de spamfilter terecht komt.

##Bouwen
Voor de opbouw van email templates wordt een `<table>` element gebruikt met daarnaast een `<tr>` en een `<td>`. Meer heb je niet nodig. Hiermee kan je makkelijk alles op de goede plek zetten en weet je dat in de meeste mail-clients de mail goed staat. En dit laatste daar gaat het om. Je kan ook gebruik maken van meer semantische HTML tags zoals een `div, p, h1-h6,` maar je hebt dan grote kans dat er verschillende mail-clients zijn die de styling daaraan gekoppeld niet toont. Zo heeft Outlook 2007+ moeite met het tonen van de padding op een p en een div.
Op elke `<table>` en bijna elke `<td>` kan of moet je gebruik maken van een aantal attributen namelijk:

 * align
 * bgcolor
 * border
 * cellspacing
 * cellpadding
 * width
 * height

Gebruik voor elk element een eigen `<table>`, dit is modulair opbouwen van je mail. Hierdoor kan je een element makkelijk verplaatsen, toevoegen of verwijderen. Hierdoor krijg je ook natuurlijke breekpunten die belangrijk zijn voor Outlook, in lange emails zet Outlook die anders zelf en dan kan het op een plek komen waar je het niet wilt. Visuele problemen zie je hierdoor ook sneller en zijn makkelijker op te lossen.

Gebruik de overall table voor de achtergrond kleur, body wordt door sommige mail-clients genegeerd. Gebruik onderstaande manier:

    <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
		  <td bgcolor=”#000000”>
			Your email code goes here.
		</td>
	   </tr>
    </table>

Je kan shorthand attributes gebruiken, maar schrijf dan wel de waardes voor elke kant voluit.

Reken bij meerdere kolommen iets minder % dan 100% bij elkaar opgeteld, dan weet je zeker dat het naast elkaar blijft staan. Outlook plaatst soms wat extra ruimte en dan komen ze niet naast elkaar te staan.

Je kan een mailtemplate zelf opbouwen. Maar om je werk uit handen te nemen kan je ook gebruik maken van een mail-template. Ik heb hieronder een aantal opgenoemd.

Templates

* [Foundation for email](http://foundation.zurb.com/emails.html)
* [Salted van Litmus](https://github.com/rodriguezcommaj/salted)

Er zijn meer templates te vinden, maar verschillende zijn 3 of meer jaar niet aangepast. Er zijn zeker wel wat veranderingen geweest in de mail-client wereld. Dus die heb ik hier weggelaten .

##Design

Voorbeelden:

* [Mailchimp voorbeelden](http://inspiration.mailchimp.com/#all)
* [Campainmonitor](https://www.campaignmonitor.com/best-email-marketing-campaigns/)
* [Really Good Emails](http://reallygoodemails.com/)

Maak de mail maximaal 600 - 800px breed. De schermen waarin je de mail krijgt te zien zijn niet breder.
Je nest verschillende tables. De eerste heeft een breedte van 100%, de tweede een breedte van 600px. Degene die daar dan inkomen zijn de elementen van de mail. Deze geef je dan een breedte van 100% of een andere breedte als je met verschillende columns wilt werken.

##Typografie

Zet alle tekst in een `td`. Zoals eerder benoemd kan semantische HTML tags, maar is niet gegarandeerd dat elke mail-client ze weergeeft.

Geef elke td een inline styling met:

* color: ; Beste is hexidecimaal met 6 tekens. Meeste garantie.
* font-family: ; Zet bij font bestaande uit meerdere woorden wel ' ' er om.
* font-size: ;  Gebruik px. Bij iOs wordt alles onder de 14px weergegeven als 14px of je moet - webkit-text- size-adjust: 100% en -ms -text sizeadjust: 100% toepassen. Voor mobiel maak je tekst 16-18px. Maak kopteksten niet te groot
* font-weight: ; Je kan woorden of de getallen gebruiken.
* line-height: ; Voor gewone tekst gebruik je het beste 4px meer dan font-size is. Bij een heading zelfde of zelfs iets minder. Maar kijk vooral wat goed staat en leesbaar is.

Je kan bovenstaande op een table zetten, maar het is niet gegarandeerd dat een td de styling meekrijgt van de table zoals het geval is bij webbrowsers.

Elke mail-client toont teksten. Deze zijn ook belangrijk in je mail. Je wilt een boodschap overbrengen. Web safe fonts van 16px zijn het beste te gebruiken. Zie een typography overzicht bij [Mailchimp](http://templates.mailchimp.com/design/typography/). Zorg er qua styling voor dat jezelf alles bepaalt en niet de mail-client, dan weet je zeker dat het er uitziet zoals je bedoelde. Gebruik geen afbeelding als fallback om een font te laten zien. Veel clients blokkeren afbeeldingen op default. Gebruik dan fonts die erg lijken op jouw font, kijk op [ffffallback.com](http://ffffallback.com).
Je kan web-fonts inladen via `@font-face`, `<link>` en `@import` in een style block in de header. De laatste werkt het beste, maar heeft ook beperkingen.


##Responsive

Zorg er voor dat je mail mobiel vriendelijk is. Mails worden tegenwoordig veel op mobiel bekeken. Je kan media-queries gebruiken, maar niet alle mail-clients kunnen er mee overweg. Grootste deel wel. De media-queries kunnen in de head gezet worden, want de mailclients die de head laten staan, zijn ook degene die overweg kunnen met media-queries.

De 2de table element in de template heeft een vaste breedte omdat sommige mailclients (o.a. veel Outlook) niet met percentage kunnen omgaan. Om er voor te zorgen dat deze vaste breedte op mobiel overschreven wordt zetten wij in een mediaquerie:


    @media screen and (max-width: 600px) {            
	   table[class="fluid-table"] {
    	   width: 100% !important;
        }
    }

De table die de vaste waarde van bijvoorbeeld 600px heeft gekregen, krijgt ook `class="fluid-table"`.
Voor mail op mobiel kan je verder nog kijken of je lettertype juist groter maakt en bepaalde ruimtes tussen linkjes en logo's ook groter.
De belangrijkste mail-client die niet om kan gaan met media-queries op elk platform is:
**Gmail**

###Artikelen:

* [Can email be responsive](http://alistapart.com/article/can-email-be-responsive)
* [The hybrid coding approach](http://labs.actionrocket.co/the-hybrid-coding-approach)

##Afbeeldingen

Gebruik:

* jpg. Wordt goed ondersteund.
* png. Voor transparante afbeelding deze gebruiken. Vaak iets groter dan jpg
* gif. Voor animatie deze gebruiken. Nadeel is dat ze vaak erg groot worden.

Afbeeldingen worden vaak geblokt, zorg er voor dat ze niet belangrijk zijn voor je verhaal en plaats een alt-text die je ook styling meegeeft door inline styling op het img element te plaatsen. Het beste is ze in te laden met een absoluut pad. Zet ze dus ergens op je server.
Verschillende mail clients zetten ruimte om een afbeelding, daarom display: block; toepassen op een afbeelding.
Voor retina kan je het beste een afbeelding dat 2x zo groot is nemen en op de img de juiste breedte meegeven. Zorg voor compressie via software voor dat je de afbeelding online zet.

Gebruik `vspace="10" hspace="10"` voor padding om afbeeldingen heen in Outlook.

    <img src="img/fluid-images.jpg" width="240" height="130" style="display: block; color: #666666; font-family: Helvetica, arial, sans-serif; font-size: 13px; width: 240px; height: 130px;" alt="Fluid images" border="0" class="fluid-image">

    <img src="responsive-email.jpg" width="500" height="200" border="0" alt="Can an email really be responsive?" style="display: block; padding: 0; color: #666666; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 16px;" class="fluid-image">

We kunnen deze afbeelding schaalbaar maken door het volgende in een media-querie en de head van de template te stoppen:

    img[class="fluid-image”] {
	   width:100% !important; 
	   height: auto !important;
    }

##Links

Zet links niet te dicht op elkaar, op mobiel kan je dan niet goed de juiste link klikken. Je kan het font iets groter maken of de line-height iets hoger zodat er meer ruimte om een link zit om aan te klikken.

iOs maakt van onderstaande elementen een link die aanklikbaar is, hierdoor krijgt het de standaard styling van een link. Je kan dit ondervangen door een span met een class er op om heen te zetten. Geef de class in je style block in de header de styling mee die je graag wilt zien. Plaats ook een !important er achter zodat je zeker weet dat inline styling overschreven wordt.

* data (lijkt er op dat alleen data in de toekomst dit doen)
* telefoonnummers
* adressen
* tijd
* email-adressen

Deze kan je ook niet laten detecteren en dan gebruik je:

    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="date=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="email=no">


Gebruik je bovenstaande manier, dan haal je styling en functie weg, dus zijn de links ook niet meer aanklikbaar.

Voor alleen telefoonnummers kan je in de style tags in de head zetten:

`a[href^=tel]{ color:#F00  ; text-decoration:none ;}`

Volgens Litmus is de beste manier om spans met een class er om heen te zetten en die dan te stylen.

    .appleLinksWhite a {color: #ffffff !important ; text-decoration: underline ;}  .appleLinksBlack a {color: #000000 !important ; text-decoration: none ;}
    <span class=”appleLinksBlack”>+32(0)612345678</span>   

Mijn ervaring van het zetten van een border-bottom via een span is dat Outlook er een hele border van maakt en niet alleen op de bottom. Voor een rij getallen die je onder elkaar zet en wilt tonen als optelling werkt deze techniek niet.

##Buttons

Gebruik voor buttons geen afbeeldingen, die worden geblokt en weg is je knop op het eerste gezicht. Je kan VML-based knoppen maken. Nadeel hiervan is dat ze niet makkelijk aan te passen zijn, niet onderhoudbaar zijn, slecht leesbaar voor een designer/ ontwikkelaar. (Zie bij tools bulletproof email buttons). Handiger is in een td een anchor link te plaatsen en de styling op de td te zetten met een padding. Nadeel is dat niet elke mail-client padding accepteert en de link is alleen aanklikbaar en niet de hele knop. (Foundation for email; http://foundation.zurb.com/emails/docs.html#buttons). Of een anchor link in een td plaatsen en op de link dikke borders plaatsen. Te dikke borders worden niet geaccepteerd door Outlook. Maak ze dus niet te dik of probeer een variant van laatst genoemde en bovenstaande.

    <table border="0" cellspacing="0" cellpadding="0" class="responsive-table">
        <tr>
            <td align="center">
                <a href="#" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #666666; text-decoration: none; background-color: #5D9CEC; border-top: 15px solid #5D9CEC; border-bottom: 15px solid #5D9CEC; border-left: 25px solid #5D9CEC; border-right: 25px solid #5D9CEC; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button"> Learn More → </a>
            </td>
        </tr>
    </table>


##HTML en CSS en JS

Gebruik tables voor neerzetten van je email. Gebruik simpele CSS, veel CSS3 wordt niet ondersteund door verschillende mail-clients.
De nieuwere Outlook's ondersteunen CSS zeer slecht. Pixel perfect stylen gaat je waarschijnlijk niet lukken of na veel extra tijd.
Zet de styling in de head en inline of alleen inline. Gmail stript de `<head>` en dus ook de `<link>`  en `<style>` tag.
Geen shorthand bij schrijven van CSS. Schrijf het vol uit, dit geeft de meeste garantie dat het getoond wordt.

###CSS3
Van CSS3 kan je gebruiken:

* border-radius
* box-shadow
* text-shadow
* transform (voor aanpassingen aan de grote of iets scheef laten staan)
* animation: Met transition of @keyframes, beide in de head plaatsen. Of gebruik een gif, denk aan grote en outlook toont 1 beeld.

JavaScript: niet gebruiken omdat email clients dit er uit halen vanwege veiligheid.

##Reset styles

       <style type="text/css">       
        /*////// RESET STYLES //////*/       
            p{margin:0 0 10px 0;} 
            a{word-wrap:break-word;}  
            table{border-collapse:collapse;}        
            h1, h2, h3, h4, h5, h6{display:block; margin:0; padding:0;}       
            img, a img{border:0; height:auto; outline:none; text-decoration:none;}        
            body, #bodyTable, #bodyCell{height:100%; margin:0; padding:0; width:100%;}

	    /*////// CLIENT-SPECIFIC STYLES //////*/
            #outlook a{padding:0;}      /* Force Outlook 2007 and up to provide a "view in browser" message. */
            @-ms-viewport{width:device-width;}      /* Force IE "snap mode" to render widths normally. */
            img{-ms-interpolation-mode:bicubic;}        /* Force IE to smoothly render resized images. */      
            table{mso-table-lspace:0pt; mso-table-rspace:0pt;}      /* Remove spacing between tables in Outlook Desktop. */   
            .ReadMsgBody{width:100%;} .ExternalClass{width:100%;}       /* Force Outlook.com to display emails at full width. */       
            p, a, li, td, blockquote{mso-line-height-rule:exactly;}     /* Force Outlook Desktop to render line heights as they're originally set. */
            a[href^="tel"], a[href^="sms"]{color:inherit; cursor:default; text-decoration:none;}    /* Force mobile devices to inherit declared link styles. */       
            p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;}    /* Prevent Windows- and Webkit-based mobile platforms from changing declared text sizes. */        
            .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font{line-height:100%;}    /* Force Outlook.com to display line heights normally. */
            a[x-apple-data-detectors]{color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;}     /* Force iOS devices to heed link styles set in CSS. */
        </style>    

##Outlook

Outlook 2007+ op Windows hebben Word als hun rendering engine en daardoor is het een beperkte mail client. Die op de Mac heeft daar geen last van, die is gebaseerd op webkit. Om te zorgen dat Outlook mee werkt kan je [conditinal comments](http://templates.mailchimp.com/development/css/outlook-conditional-css/) gebruiken.

Outlook toont geen gif's, alleen het eerste frame.
Outlook.com filtert the CSS background-image property.

    <!--[if mso]>
	   /* Plaats HTML en CSS hier */
    <![endif]-->
    <!--[if (IE)]>
	   /* Plaats HTML en CSS hier */
    <![endif]-->

Outlook.com targeting is ook met:

`.ExternalClass div[class="ecxmyclass"]`


##Gmail

Filtert id's en classes en verwijderd de style tag uit de header. Vanwege deze mailclient is het gebruik van inline styling zo belangrijk. Hierdoor kan je ook geen media-queries gebruiken, want die staan in je style tag in de header en worden er dus uitgesloopt.

##iOs

In iOs krijgen linkjes voor adres, telefoonnummer, mailadres een blauwe kleur. Als je dit niet wilt zijn er [verschillende oplossingen](https://litmus.com/blog/update-banning-blue-links-on-ios-devices). De handigste is:

In de header:

* `.appleLinksWhite a {color: #ffffff !important; text-decoration: underline;}`
* `.appleLinksBlack a {color: #000000 !important; text-decoration: none;}`

In de table:

`<span class=”appleLinksBlack”>866-787-7030</span>`


##Standaard

Er is geen email standaard. Alles gebeurd op basis van good practices. Er zijn verschillende pogingen ondernomen om tot een standaard te komen maar de mail-client bouwers gaan er niet in mee.

##Tools

* [Bulletproof email buttons](http://buttons.cm/)
* [Fallback font zoeken](http://ffffallback.com/)
* [Email builder en inliner](https://litmus.com/builder/)
* [Code bekijken van gekregen email met Litmus Scope](https://litmus.com/scope/)

##Testen

Bij de mail heb je verschillende mailclients. Deze tonen niet alle CSS die je gebuikt. Dit verschilt per client. Het verschil hierbij is veel groter dan bij de browsers. Er zijn ook meer clients die gebruikt worden. We spreken dan over desktop en mobiel.
Om er voor te zorgen dat de mail in de meest gebruikte clients goed toonbaar is kan je allemaal clients installeren. Dit zal je nooit helemaal lukken. Verschillende apparaten zorgen voor verschillende clients. Dat zijn er uiteindelijk zoveel dat het te kostbaar wordt.
Je kan een abonnement nemen op [Litmus email testing](https://litmus.com/email-testing) of [Email on Acid](http://www.emailonacid.com/) (bij acid kan je credits kopen om per keer een mailtemplate te testen). Hier kan je makkelijk een mail template testen. Of neem een gratis account op Mailchimp. Zet daar je template in en laat je [template testen voor $3,- per test](http://mailchimp.com/features/inbox-inspector/). Dit kan goedkoper zijn dan een abonnement op een test applicatie.

###Mailchimp test route

Bij Mailchimp kan je een gratis account aanmaken. Hier kan je een account aanmaken. De template die je hebt gebouwd kan je hier inplakken, aanpassen op basis van de preview die je ziet en daarna kan je deze via de knop Run inbox inspection laten testen. Je kan een abonnement nemen van $10,- p/m en dan is het gratis. Of een eenmalige test kopen voor $3,-. Voordeel van dit laatste is dat je niet aan een abonnement vast zit. Nadeel is dat je na 1x testen en nog aanpassingen maken nog een x zou moeten testen en je kan maximaal 10 clients kiezen. En dat zou weer geld kosten.

##Mail-clients

Op [Email Market Share](http://emailclientmarketshare.com/) kan je zien welke mail-clients welk aandeel hebben qua gebruik. Mail-clients veranderen eens in de zoveel tijd. Test je mail-templates om de zoveel tijd.

###Meest gebruikte mail clients in Nederland
Hier ben ik nog niet achter. Ik denk dat het vrij gelijk loopt met die wereldwijd.

##Spam filters
Check de woorden in je mail bericht ivm dat je in een [spam-filter](http://templates.mailchimp.com/concepts/spam-filters/) kan komen. 

##Handige theorie linkjes

* Boek: [Modern HTML email](http://modernhtmlemail.com/) (vooor beginners volgens de schrijver)
* Boek: [Professional email design](http://professionalemaildesign.com/)
* Tips voor het bouwen van een [template voor de te gebruiken html en css](https://litmus.com/blog/html-email-coding-101-infographic)
* [Tools for coding HTML emails](https://www.campaignmonitor.com/dev-resources/) 
* [Responsive email resources](http://responsiveemailresources.com/)
* [Responsive email patterns](http://responsiveemailpatterns.com/)
* [Overzicht van Mailchimp](http://templates.mailchimp.com/) (aanrader!)
* [Verschillende artikelen over bouwen en designen van email](http://webdesign.tutsplus.com/series/mastering-html-email--webdesign-17696)
* [Workflow voor bouwen van een mail](http://www.benjystanton.co.uk/blog/making-responsive-html-emails/)
* [Litmus community learning](https://litmus.com/community/learning)
* [Overzicht voor code inliners](https://litmus.com/blog/a-guide-to-css-inlining-in-email)

###Overig
* [Email community](https://litmus.com/community)
* [HTML for email group van de W3C](https://www.w3.org/community/htmail/)

##People to follow
* [Fabio Carneiro](https://twitter.com/flcarneiro)
* [Elliot Ross](https://twitter.com/iamelliot)
* [Nicole Merlin](https://twitter.com/moonstrips)

##Bedrijven om te volgen
* [Action Rocket](http://actionrocket.co/)
* [Display:Block](https://www.displayblock.com/)

##Cursussen
Om meer te leren over het bouwen van mail templates heb je verschillende cursussen en een conferentie.

* [Introduction to responsive email](http://zurb.com/university/responsive-emails-intro)
* [Email design conference van Litmus](https://litmus.com/conference)

##Conclusie
De wereld van email-design en coding is een wereld apart. Je kan hiervan je werkgebied maken zonder dat je verder bezig hoeft te houden met het bouwen van websites. Het is een werkgebied dat ook zeker in ontwikkeling is, helaas minder snel dan de mensen die er in werken zouden willen. Maar er gebeurt genoeg.
Naar mijn idee is dit ook voor front-end ontwikkelaars een tof vakgebied.


