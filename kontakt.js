// Funkcija za newsletter poruku
function zahvala() {
  document.getElementById("zahvala").innerHTML = 
    "Hvala Vam što ste se pretplatili na naš newsletter.<br>" +
    "Očekuju Vas brojne prednosti i mogućnosti.<br>Stay tuned!";
}

// Funkcija za reset forme
function resetuj() {
  document.getElementById("ime").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("poruka").value = "";
}
