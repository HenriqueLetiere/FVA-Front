const localhost = "http://localhost:8080";
const railway = "https://flask-production-fva.up.railway.app";
const api_url = localhost;

const ul = document.querySelector('ul');

async function listar() {
    let os = [];
    let cont = 0;

    await fetch(api_url + `/ordemservico`).then(res => res.json()).then(data => {
        data.reverse().forEach(item => {

            os[cont] = [item.id_ordemServico, item.nome, item.tiposerv];
            cont ++;

        })
    });
    cont = 0;

    let cor = "";
    let bcor = 0;
    while (cont < os.length) {
 
        if (bcor == 0) {
            cor = "#f5f5f5";
            bcor = 1;
        } else if (bcor == 1) {
            cor = "#fff";
            bcor = 0;
        }

        ul.insertAdjacentHTML('beforeend', `<div class="lista" style="background-color: ${cor}">

            <div class="id-lista"><p>${os[cont][0]}</p></div>
            <div class="nome-lista"><p>${os[cont][1]}</p></div>
            <div class="tipo-lista"><p>${os[cont][2]}</p></div>
            
            <div class="botao-lista">
                <a href="ver-OS.html?id=${os[cont][0]}"><button id="botao-ver">Ver mais</button></a>
                <button id="botao-editar" onclick="popup(${os[cont][0]})">Editar</button>
                <button id="botao-excluir" onclick="del(${os[cont][0]})">Excluir</button>
            </div>

        </div>`);

        cont ++;
    }
}

async function popup(id_os) {
    const popup = document.querySelector("dialog");
    const btncliente = document.getElementById("popup-cliente");
    const btnveiculo = document.getElementById("popup-veiculo");
    const btnservico = document.getElementById("popup-servico");
    const btnvoltar = document.getElementById("popup-btnvoltar");

    popup.showModal();

    btncliente.onclick = function() {
        window.location.href = `editar-OS.html?id=${id_os}&editar=c`;
    }
    btnveiculo.onclick = function() { 
        window.location.href = `editar-OS.html?id=${id_os}&editar=v`;
    }
    btnservico.onclick = function() {
        window.location.href = `editar-OS.html?id=${id_os}&editar=s`;
    }
    btnvoltar.onclick = function() {
        popup.close();
    }
}

async function del(id_os) {
    await fetch(api_url + `/ordemservico/${id_os}`, {
        method: "DELETE",
    })

    ul.innerHTML = "";
    listar();
}

listar();