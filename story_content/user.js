function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Yy02tPkw04":
        Script1();
        break;
      case "6obatldx8wd":
        Script2();
        break;
      case "63X5YJ50wq6":
        Script3();
        break;
      case "6fHEfOouxgM":
        Script4();
        break;
      case "6oCmJnd33mC":
        Script5();
        break;
  }
}

function Script1()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
 (!document.mozFullScreen && !document.webkitIsFullScreen)) {
 if (document.documentElement.requestFullScreen) { 
 document.documentElement.requestFullScreen(); 
 } else if (document.documentElement.mozRequestFullScreen) { 
 document.documentElement.mozRequestFullScreen(); 
 } else if (document.documentElement.webkitRequestFullScreen) { 
 document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); 
 } 
 } else { 
 if (document.cancelFullScreen) { 
 document.cancelFullScreen(); 
 } else if (document.mozCancelFullScreen) { 
 document.mozCancelFullScreen(); 
 } else if (document.webkitCancelFullScreen) { 
 document.webkitCancelFullScreen(); 
 } 
 }
}

function Script2()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
 (!document.mozFullScreen && !document.webkitIsFullScreen)) {
 if (document.documentElement.requestFullScreen) { 
 document.documentElement.requestFullScreen(); 
 } else if (document.documentElement.mozRequestFullScreen) { 
 document.documentElement.mozRequestFullScreen(); 
 } else if (document.documentElement.webkitRequestFullScreen) { 
 document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); 
 } 
 } else { 
 if (document.cancelFullScreen) { 
 document.cancelFullScreen(); 
 } else if (document.mozCancelFullScreen) { 
 document.mozCancelFullScreen(); 
 } else if (document.webkitCancelFullScreen) { 
 document.webkitCancelFullScreen(); 
 } 
 }
}

function Script3()
{
  function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

function Script4()
{
  function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

function Script5()
{
  function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

