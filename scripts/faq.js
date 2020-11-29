var details = document.getElementsByTagName("details")
/* console.log(details) */

function detailClicked(event) {
    for (var j = 0; j < details.length; j++) {
        if (details[j] != event.path[1]) {
            details[j].open = false;
        }
    }
}

for (var i = 0; i < details.length; i++) {
    details[i].addEventListener("click", detailClicked);
} /*Allikas: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener ja erinevate variantide proovimine*/

/* console.log("Faq");
i = 0;
setInterval(()=> {
    d = document.getElementById("d")
    if (i % 2) {
        d.open = false;
    } else {
        d.open = true;
    }
    i++;
},1000) */