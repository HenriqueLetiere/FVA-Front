const localhost = "http://localhost:8080";
const railway = "https://meticulous-learning-production.up.railway.app";

async function listar() {
    var bcor = 0;
    var cor = "";
    const ul = document.querySelector('ul');

    await fetch(railway + `/ativos`)
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
                    <button id="botao-editar" onclick="popup(${lista.id})">Editar</button>
                    <button id="botao-excluir" onclick="del(${lista.id})">Excluir</button>
                </div>

            </div>`);
        })
    })
};

async function del(id) {
    await fetch(railway + `/ativos/${id}`,
        {
            method: "DELETE",
        }
    )
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
    location.reload();
};

async function popup(id) {
    const popup = document.querySelector("dialog");
    const btncliente = document.getElementById("popup-cliente");
    const btnveiculo = document.getElementById("popup-veiculo");
    const btnservico = document.getElementById("popup-servico");
    const btnvoltar = document.getElementById("popup-btnvoltar");

    popup.showModal();

    btncliente.onclick = function() {
        window.location.href = `editarservico.html?id=${id}&editar=c`;
    }
    btnveiculo.onclick = function() { 
        window.location.href = `editarservico.html?id=${id}&editar=v`;
    }
    btnservico.onclick = function() {
        window.location.href = `editarservico.html?id=${id}&editar=s`;
    }
    btnvoltar.onclick = function() {
        popup.close();
    }
};

listar();