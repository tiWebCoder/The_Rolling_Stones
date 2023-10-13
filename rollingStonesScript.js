/**
 * Opens the menu when clicking the menu icon
 */
function openMenu(){
      var menu = document.getElementById('menu'),
          menuIcon = document.getElementById('menu-icon'),
          closeIcon = document.getElementById('close-icon');

          menu.style.display = 'flex';
          menu.style.height = 'auto';
	    menuIcon.style.display = 'none';
	    closeIcon.style.display = 'block';
}

/**
 * Closes the menu when clicking the close icon
 */
function closeMenu(){
      var menu = document.getElementById('menu'),
          menuIcon = document.getElementById('menu-icon'),
          closeIcon = document.getElementById('close-icon');

          menu.style.display = 'none';
          menu.style.height = '0%';
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
}

/**
 * Displays disclaimer when the button in the footer is clicked
 */
/*function viewDisclaimer(){
    const disContainer = document.createElement('div');
          disContainer.setAttribute('class', 'container-content');
          disContainer.setAttribute('id', 'disclaimer');

    const disControlsContainer = document.createElement('div');
          disControlsContainer.setAttribute('class', 'container-controls');

    const disCloseIcon = document.createElement('span');
          disCloseIcon.setAttribute('class', 'controls');
          disCloseIcon.setAttribute('class', 'fa fa-times');
          disCloseIcon.setAttribute('id', 'close-icon');

          disControlsContainer.appendChild(disCloseIcon);

    const disDescription = document.createElement('p');
          disDescription.setAttribute('id', 'disclaimer-description');
          disDescription.innerHTML = "This site has been constructed as part of an assessment for module 28 Website Production at the City Of Oxford College. It is not a working website and is not connected with any site or individual referenced. The views and opinions expressed within these pages are personal and should not be construed as reflecting the views and opinions of the City Of Oxford College.";

    disContainer.appendChild(disControlsContainer);
    disContainer.appendChild(disDescription);

    disContainer.style.top = '100%';
}*/

/**
 * Closes the disclaimer when the close icon is clicked
 */
/*function closeDisclaimer(){}*/