/*
	index.js - for index.html
*/

function pageChange(page) {
    $("img:first").attr({src: "./comic/" + page + ".png"});
    $("#pagination").html("Page " + page);
}

window.onload = function () {
	/*
    var start = 1, end = 7, width = 768, page = start;

    
	$("#comic").find("img")
		.on("click", function (event) {
			var posX = $(this).position().left;
			posX = event.pageX - posX;
			if (posX > width / 2) {
				if (page !== end) {
					page = page + 1;
					pageChange(page);
				}
			}
            else {
				if (page !== start) {
					page = page - 1;
					pageChange(page);
				}
			}
	})

	$("body")
		.keyup(function (event) {
			// right arrow
			if (event.which === 39) {
				if (page !== end) {
					page = page + 1;
					pageChange(page);
				}
			}
			// left arrow
			if (event.which === 37) {
				if (page !== start) {
					page = page - 1;
					pageChange(page);
				}
			}
	   })
    */
    
}

