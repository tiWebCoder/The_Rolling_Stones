	
    /**
	 * Opens the menu
	 */
	function openMenu(){
		document.getElementById('menu').style.bottom = "0%";
	}

	/**
	 * Closes the content
	 */
	function closeContent(){
		document.getElementById('close-button').parentElement.parentElement.style.bottom = "-100%";
	}

    /*
	 * Displays the disclaimer
	 */
	function viewDisclaimer(){
		alert("This site has been constructed as part of an assessment for module 28 Website Production at the City Of Oxford College. It is not a working website and is not connected with any site or individual referenced. The views and opinions expressed within these pages are personal and should not be construed as reflecting the views and opinions of the City Of Oxford College.");
	}