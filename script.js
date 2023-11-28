const kontakme = document.getElementById("kontakme");

kontakme.addEventListener("click", function() {
    var email = "assyafiqnaufal625@gmail.com";
  
    var gmailURL = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email;
  
    window.open(gmailURL, '_blank');
});

document.getElementById("downloadCv").addEventListener("click", function() {
    // Ganti dengan URL atau path ke file PDF CV Anda
    var pdfURL = "/assets/my-cv.pdf";
  
    // Membuat elemen <a> untuk menautkan dan mengunduh file PDF
    var link = document.createElement("a");
    link.href = pdfURL;
    link.download = "my-cv.pdf"; // Nama file yang akan diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });