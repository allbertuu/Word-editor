let campo = document.getElementById('textarea');
const bold = document.querySelector('.btn-bold');
const italic = document.querySelector('.btn-italic');
const monospace = document.querySelector('.btn-monospace');
const underline = document.querySelector('.btn-underline');
const removerFormatação = document.getElementById('removeFormat');
let howManyCaracters = document.getElementById('howManyCaracters');
let clearTextarea = document.getElementById('clearTextarea');

// funções para aplicar estilos
let toggleBold = () => {
    campo.classList.toggle('bold');
}
let toggleItalic = () => {
    campo.classList.toggle('italic');
}
let toggleUnderline = () => {
    campo.classList.toggle('underline');
}
let addMonospace = () => {
    campo.classList.toggle('monospace');
}
let removeFormat = () => {
    campo.classList.remove('bold', 'italic', 'monospace', 'underline');
}

// eventos do contador de caracteres
campo.oninput = () => {
    howManyCaracters.innerText = campo.value.length;
}
clearTextarea.onclick = () => {
    campo.value = '';
    howManyCaracters.innerText = '0';
}

// eventos de clique
bold.onclick = () => toggleBold();
italic.onclick = () => toggleItalic();
monospace.onclick = () => addMonospace();
underline.onclick = () => toggleUnderline();
removerFormatação.onclick = () => removeFormat();