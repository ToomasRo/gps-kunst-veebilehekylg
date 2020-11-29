var details = document.getElementsByTagName("details") // List kõikidest küsimustest

function detailClicked(event) { // Event mis kutsutakse, kui mõnda küsimust vajutatakse
    for (var j = 0; j < details.length; j++) {  // Käime kõik küsimused läbi
        if (details[j] != event.path[1]) {  // Kui pole tegemist klikitud küsimusega
            details[j].open = false; // siis sulgeme 
        }
    }
}

for (var i = 0; i < details.length; i++) { // Käime kõik küsimused läbi
    details[i].addEventListener("click", detailClicked); // ja lisame neile funktsiooni, mis kutsutakse, kui kasutaja küsimusele
} /*Allikas: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener ja erinevate variantide proovimine*/