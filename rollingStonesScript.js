/**
 * Displays the disclaimer when clicking the button inside the footer
 */
function viewDisclaimer(){
      alert("This site has been constructed as part of an assessment for module 28 Website Production at the City Of Oxford College. It is not a working website and is not connected with any site or individual referenced. The views and opinions expressed within these pages are personal and should not be construed as reflecting the views and opinions of the City Of Oxford College.");
}

/**
 * Opens the menu when clicking the menu icon
 * @var menu - menu with links to other pages
 * @var menuIcon - menu icon which when clicked, becomes hidden and opens the menu
 * @var closeIcon - cross symbol which becomes visible when the menu icon is clicked
 */
function openMenu(){
      var menu = document.getElementById('menu'),
          menuIcon = document.getElementById('menu-icon'),
          closeIcon = document.getElementById('close-icon');

          menu.style.top = '9%';
	    menuIcon.style.display = 'none';
	    closeIcon.style.display = 'block';
}

/**
 * Closes the menu when clicking the close icon
 * @var menu - menu with links to other pages
 * @var menuIcon - menu icon which will become visible clicking the close icon
 * @var closeIcon - cross symbol which when clicked, becomes hidden, closes the menu and displays menu icon 
 */
function closeMenu(){
      var menu = document.getElementById('menu'),
          menuIcon = document.getElementById('menu-icon'),
          closeIcon = document.getElementById('close-icon');

          menu.style.top = '-100%';
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
}