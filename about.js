document.addEventListener("DOMContentLoaded", function() {
    const makananItems = document.querySelectorAll(".makanan");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalGambar = document.getElementById("modal-gambar");
    const modalNama = document.getElementById("modal-nama");
    const modalHarga = document.getElementById("modal-harga");
    const modalDeskripsi = document.getElementById("modal-deskripsi");
    const closeButton = document.querySelector(".close-button");

    makananItems.forEach(item => {
        item.querySelector(".details-button").addEventListener("click", function() {
            modalTitle.textContent = "Detail Makanan";
            modalNama.textContent = "Nama: " + item.dataset.nama;
            modalHarga.textContent = "Harga: " + item.dataset.harga;
            modalDeskripsi.textContent = "Deskripsi: " + item.dataset.deskripsi;
            modalGambar.src = item.dataset.gambar;
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
