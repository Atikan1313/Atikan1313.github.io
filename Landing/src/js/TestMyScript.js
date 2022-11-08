$(document).ready(function(){
	function sayHi() {
  		$("#staticBackdrop").modal("show").on("shown", function () {});
	}
	setTimeout(sayHi, 5000);
});
