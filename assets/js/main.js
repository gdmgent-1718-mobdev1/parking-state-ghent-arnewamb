window.onload = setupRefresh;
 
    function setupRefresh() {
      setTimeout("refreshPage();", 30000); // milliseconds
    }
    function refreshPage() {
       window.location = location.href;
    }


let refreshButton = document.querySelector(".refresh");
console.log(refreshButton);

refreshButton.addEventListener('click',function () {
	location.reload();
}, false);