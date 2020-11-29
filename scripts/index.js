pilt = 0; // Hetke pildi indeks slaidiseanssis
imgTotal = 9;  // Piltide arv slaidiseansis

function changePicture() {  // Funktsioon pildi vahetamiseks
  current = document.getElementById("sl-" + String(pilt));  // Hetke pilt
  next = document.getElementById("sl-" + String((pilt + 1) % imgTotal));  // Tulevane pilt
  current.className = "sl-img";  // Hetke pildile klass, mis muudab pildi nähtamatuks.
  next.className = "sl-img-active";  // Tulevasele pildile klass, muudab pildi nähtavaks. 
  pilt = (pilt + 1) % imgTotal;  // Suurenda hetke pildi indeksit ühe võrra, kui indeks on liiga suur siis läheb algusesse tagasi
}

setInterval(() => { // Seadista taimer, et iga 4 sekundi tagant pilti vahetada
  changePicture();
}, 4000);

/* Allikas: varasem kogemus ning palju testimist */ 