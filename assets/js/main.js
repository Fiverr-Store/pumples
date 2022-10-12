(function () {

	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}


	};





  //===== mobile-menu-btn
	let navbarToggler = document.querySelector(".navbar-toggler");
	navbarToggler.addEventListener("click", function () {
		navbarToggler.classList.toggle("active");
	});


})();
