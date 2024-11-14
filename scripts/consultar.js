function listar() {
    var bcor = 0;
    var cor = "";
    const ul = document.querySelector('ul');

    fetch(`https://meticulous-learning-production.up.railway.app/servico`)
    .then(res => res.json())
    .then(data => {
        data.forEach(lista => {

            if (bcor == 0) {
                cor = "#f5f5f5";
                bcor = 1;
            } else if (bcor == 1) {
                cor = "#fff";
                bcor = 0;
            }

            ul.insertAdjacentHTML('beforeend', `<div class="lista" style="background-color: ${cor}">

                <div class="id-lista"><p>${lista.id}</p></div>
                <div class="nome-lista"><p>${lista.nome}</p></div>
                <div class="tipo-lista"><p>${lista.tiposerv}</p></div>
                
                <div class="botao-lista">
                    <a href="verservico.html?id=${lista.id}"><button id="botao-ver">Ver mais</button></a>
                    <a href="editarservico.html?id=${lista.id}"><button id="botao-editar">Editar</button></a>
                    <button id="botao-excluir" onclick="del(${lista.id})">Excluir</button>
                </div>

                </div>`);
        });
    });
}

function del(id) {
    fetch(`https://meticulous-learning-production.up.railway.app/servico/${id}`,
        {
            method: "DELETE",
        }
    )
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
    location.reload();
};

/* Listar Itens */

listar();