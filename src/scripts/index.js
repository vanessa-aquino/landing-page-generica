const modal = document.getElementById('modal');
const button1 = document.getElementById('open-modal-1');
const button2 = document.getElementById('open-modal-2');
const closeButton = document.getElementById('close-modal');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

button1.addEventListener('click', openModal);
button2.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

