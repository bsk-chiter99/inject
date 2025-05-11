document.getElementById('sensitivity').addEventListener('input', function() {
    document.getElementById('sensitivityValue').textContent = this.value;
});

document.getElementById('dragSpeed').addEventListener('input', function() {
    document.getElementById('dragSpeedValue').textContent = this.value;
});

document.getElementById('swipeSpeed').addEventListener('input', function() {
    document.getElementById('swipeSpeedValue').textContent = this.value;
});

function applySettings() {
    const sensitivity = document.getElementById('sensitivity').value;
    const dragSpeed = document.getElementById('dragSpeed').value;
    const swipeSpeed = document.getElementById('swipeSpeed').value;

    alert(`Pengaturan diterapkan:\nSensitivitas: ${sensitivity}\nKecepatan Drag: ${dragSpeed}\nKecepatan Swipe: ${swipeSpeed}`);
    // Implementasi pengaturan lebih lanjut bisa ditambahkan di sini
}
