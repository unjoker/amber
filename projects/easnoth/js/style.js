/*script that manages the size of font in the screen*/

function adjust(){

	//page size
	var pageHeight;
	
	pageHeight = window.innerHeight;
	
	//adapt font according to screen size
	document.body.style.fontSize = '20px';
	
	var glob = window.document.getElementById('global');

	if (pageHeight > 640) {
		glob.style.marginTop = '' + (pageHeight - 640) / 2 + 'px';
		
		/*var FIREFOX = /Firefox/i.test(navigator.userAgent);
		var zoom = pageHeight / 640;
		if (FIREFOX) {
			glob.style.marginTop = '' + (pageHeight - 640) / 2 + 'px';
		} else {
			document.body.style.zoom = zoom;
		}*/
	}	
}

