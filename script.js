console.log("Inicio do programa")

var clipping = ``;
let listaNegra = document.querySelector("#listaNegra")
let listTitle = document.querySelector("#listTitle")

var blackList = [
    'ALBERT',
    'EINSTEIN',
    'SÍRIO',
    'BP',
    'BENEFICÊNCIA',
    'PORTUGUESA',
    'HCOR',
    'USP',
    'UNIVERSIDADE',
    'PAULISTA',
    'CLÍNICAS',
    'SÃO LUIZ',
    'LUIZ'
]

listaNegra.value = blackList.join(", ")


function validarClipping() {
    listTitle.innerHTML = "Palavras Encontradas"
    listaNegra.value = ""
    clipping = document.getElementById('text').value;

    for (i = 0; i < blackList.length; i++) {

        if ( clipping.toUpperCase().includes(blackList[i]) ?? true ) {
            listaNegra.value += blackList[i] + ", "
        }
    }
    
    console.log(`Fim do programa`)

}