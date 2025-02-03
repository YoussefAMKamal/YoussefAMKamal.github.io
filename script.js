document.documentElement.requestFullscreen();

/********************************** Nav Menu **********************************/
function openNav() {
  if ((window.innerWidth < 800)){
	document.getElementById("NavMenu")
		.style.width = "50%";
  } else {
    document.getElementById("NavMenu")
		.style.width = "30%";
  }
	document.getElementById("page")
		.style.marginLeft = "0%";
}

function closeNav() {
	document.getElementById("NavMenu")
		.style.width = "0";
	document.getElementById("page")
		.style.marginLeft = "0";
}

showContainer('tabsdiv');

function showContainer(content){
  navcontent = document.getElementsByClassName("Navtabs");

  for(i=0; i < navcontent.length; i++){
    navcontent[i].style.display = "none";
  }

  document.getElementById(content).style.display = "block";

  // Scroll to the top of the page
  window.scrollTo(0, 0);
}

function showContent(content) {

  showContainer(content);

  localStorage.setItem('lasttab', content);
		
	closeNav();

  clearHTabsColor();
}

function clearHTabsColor(){
  var i, tabs;

  tabs = document.getElementsByClassName("tabButton");
  
  for (i = 0; i < tabs.length; i++) {

    tabs[i].style.background = "";

  }
}

/********************************** Main Tabs **********************************/
//document.getElementById("defaultOpen").click();

function openTab(elmnt, name){
  showContainer('tabsdiv');

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  tablinks = document.getElementsByClassName("tabButton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.background = "";
  }

  document.getElementById(name).style.display = "block";
  elmnt.style.background = "linear-gradient(135deg,rgba(63, 1, 1, 0.692),rgba(65, 0, 0,1),rgba(63, 1, 1, 0.692))";
}

/* Used to prevent right click menu 
document.addEventListener('contextmenu', event => event.preventDefault()); */

/********************************** Resume Section Tabs **********************************/
document.getElementById("eduBtn").click();

function openTab2(elmnt, name){
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabC");

  for(i=0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabBtn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.background = "";
  }

  document.getElementById(name).style.display = "block";
  elmnt.style.background = "linear-gradient(45deg,rgba(0, 0, 0, 1),rgba(32, 32, 32, 1),rgba(0, 0, 0, 1))";
}

/********************************** Skills Animation **********************************/
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('barAnimation');
    }
    else {
      // We're not intersecting, so remove the class!
      entry.target.classList.remove('barAnimation');
    }
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const bar = document.querySelectorAll('.progress-bar span');

// Loop over the elements and add each one to the observer
bar.forEach((element) => observer.observe(element));

/********************************** Same Position After Reloading **********************************/
document.addEventListener("DOMContentLoaded", function() { 
  var scrollpos = localStorage.getItem('scrollpos');
  if (!isNaN(scrollpos)) {
    setTimeout(() => {
      window.scrollTo(0, scrollpos);
    }, 100);}

  let savedTab = localStorage.getItem('lasttab') || 'tabsdiv';
  showContent(savedTab);
});

window.onbeforeunload = function() {
  localStorage.setItem('scrollpos', window.scrollY);
};