// Mengambil elemen form
const form = document.getElementById('contact-form');

// Menambahkan event listener untuk submit form
form.addEventListener('submit', function(event) {
    // Mencegah form untuk melakukan submit default
    event.preventDefault();

    // Mengambil nilai dari input field
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Menampilkan nilai-nilai dalam alert
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Mengosongkan nilai input setelah alert ditampilkan
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

