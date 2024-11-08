document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Buat format mailto
    const mailtoLink = `mailto:jesselin.ronia46@smk.belajar.id?subject=Pesan dari ${encodeURIComponent(name)}&body=Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;

    // Buka mailto link
    window.location.href = mailtoLink;
});
