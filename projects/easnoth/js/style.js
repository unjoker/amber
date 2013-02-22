/*script that manages the position and size of objects in the screen*/

function adjust(){

	var canvas = document.getElementById('main');

	//page size
	var pageHeight;
	var pageWidth;
	
	//menu
	var menu = document.getElementById('menu');
	if (menu == null){
		var menu = document.getElementById('menuEditor');
	}
	
	//for most browser
	if( typeof(window.innerHeight) == 'number' ){
		pageHeight = window.innerHeight;
		pageWidth = window.innerWidth;
	}
	//for IE 6
	else if( document.documentElement && document.documentElement.clientHeight ){ 
		pageHeight = document.documentElement.clientHeight;
		pageWidth = document.documentElement.clientWidth;
	}
	
	//adapt font according to screen size
	document.body.style.fontSize = (Math.ceil((pageHeight+pageWidth)/100))+'px';
	document.body.style.minfontSize = '12px';
	document.body.style.maxfontSize = '60px';
	
	//adapt canvas according to screen size
	if(canvas) {
		canvas.height = pageHeight;
		canvas.width = Math.ceil(0.8*pageWidth);
		canvas.style.height = pageHeight+"px";
		canvas.style.width = Math.ceil(0.8*pageWidth)+"px";
		
		if(menu) {
			menu.style.width = Math.ceil(0.2*pageWidth)+"px";
			menu.style.height = canvas.offsetHeight+"px";
			menu.style.left = canvas.width+"px";
		}
	}
	
}

