/*script that manages the size of font in the screen*/

function adjust(){

	//page size
	var pageHeight;
	var pageWidth;
	
	pageHeight = window.innerHeight;
	pageWidth = window.innerWidth;
	
	
	//adapt font according to screen size
	document.body.style.fontSize = (Math.ceil((pageHeight+pageWidth)/100))+'px';
	document.body.style.minfontSize = '12px';
	document.body.style.maxfontSize = '60px';
	
}

