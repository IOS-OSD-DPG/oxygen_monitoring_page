//credit: James Hannah @cyborgsphinx
//function clearContent(kind) {
//	var i;
//	var contentClass = kind + "-content";
//	var tablinkClass = kind + "-tablinks";
//
//	var content = document.getElementsByClassName(contentClass);
//	for (i = 0; i < content.length; i++) {
//		content[i].style.display = "none";
//	}
//
//	var tablinks = document.getElementsByClassName(tablinkClass);
//	for (i = 0; i < tablinks.length; i++) {
//		tablinks[i].className = tablinks[i].className.replace(" active", "");
//	}
//}
//
//function changePlot(event) {
//	var i;
//	var target = event.currentTarget;
//	var plot = target.id;
//
//	clearContent("plot")  // affects plot-content and plot-tablinks
//
//	var showContent = document.getElementsByClassName(plot);
//	for (i = 0; i < showContent.length; i++) {
//		showContent[i].style.display = "block";
//	}
//	target.className += " active";
//
//	window.sessionStorage.setItem("plot", plot)
//}

//if (window.sessionStorage.getItem("plot")) {
//	document.getElementById(window.sessionStorage.getItem("plot")).click();
//} else {
//	// choose default
//	document.getElementById("location").click();
//}

// Credit:
// https://www.w3schools.com/howto/howto_js_tabs.asp
// https://blog.hubspot.com/website/html-tabs
function openTab(evt, productName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(productName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
