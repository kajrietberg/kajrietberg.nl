
var speelwijze = document.getElementsByName( 'speelwijze' );
var speelwijzePrefence = document.getElementsByName( 'speelwijze' )[0];
//speelwijzePrefence.checked = true;
var speelwijzeElement = document.getElementsByClassName( 'opstelling-keuze__form' );	
var opstellingKeuze = speelwijzeElement[0];
var speelwijzeKeuzeClass = document.getElementsByClassName( 'voetbalveld' );
var speelwijzeKeuzeElement = speelwijzeKeuzeClass[0];
var speelwijzeKeuzeClassnaam = speelwijzeKeuzeClass[0].getAttribute('class');
var i;


var speelwijzeKlikFunctie = function() {

	for ( i = 0, max = speelwijze.length; i < max; i++) {
		if (speelwijze[i].checked === true) {
				
			var speelwijzeKeuze = speelwijze[i].value;
			var speelwijzeKeuzeClassnaamNieuw = speelwijzeKeuzeClassnaam + ' ' + speelwijzeKeuze;
		
			var speelwijzeKlik = speelwijzeKeuzeElement.setAttribute('class', speelwijzeKeuzeClassnaamNieuw );

			speelwijze[i].removeAttribute( 'checked')
			
		}

	
		else {
				speelwijzeKeuzeElement.setAttribute('class', 'voetbalveld' );
			}

	}
}


opstellingKeuze.addEventListener('change', speelwijzeKlikFunctie );



