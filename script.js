const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const imagem = document.getElementById('semMensagem'); // Seleciona a imagem

function criptografar() {
    imagem.style.display = "none"; // Esconde a imagem

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringEncriptada = document.getElementById('textoDescriptografado').value.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    document.getElementById('textoTradutor').style.display = "flex";

    mensagem.textContent = stringEncriptada;
    textArea.value = "";
}

function descriptografar() {
    imagem.style.display = "none"; // Esconde a imagem

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringDescriptada = document.getElementById('textoDescriptografado').value.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    document.getElementById('textoTradutor').style.display = "flex";

    mensagem.textContent = stringDescriptada;
    textArea.value = "";
}

function copiar() {
    const textoCopiado = document.querySelector('.mensagem');
    const range = document.createRange();
    range.selectNodeContents(textoCopiado);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        mostrarImagem(); // Chama a função para mostrar a imagem novamente
    } catch (err) {
        console.error('Falha ao copiar: ', err);
    }
}

function mostrarImagem() {
    mensagem.textContent = ''; // Limpa a mensagem
    imagem.style.display = "semMensagem"; // Mostra a imagem novamente
    alert = "Texto copiado"
}
