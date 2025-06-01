const localhost = "http://localhost:8080";
const railway = "https://meticulous-learning-production.up.railway.app";
const api_url = localhost;

const ul = document.querySelector('ul');

async function listar() {
    let clientes = [];
    let veiculos = [];
    let servicos = [];
    let cont = 0;

    await fetch(api_url + `/clientes`).then(res => res.json()).then(data => {
        data.reverse().forEach(item => {

            clientes[cont] = [item.id, item.nome, item.datanasc, item.rg, item.cpf, item.telefone, item.sexo];
            cont ++;

        })
    });
    cont = 0;

    await fetch(api_url + `/veiculos`).then(res => res.json()).then(data => {
        data.reverse().forEach(item => {

            veiculos[cont] = [item.id, item.fabricante, item.modelo, item.ano, item.placa];
            cont ++;

        })
    });
    cont = 0;

    await fetch(api_url + `/servicos`).then(res => res.json()).then(data => {
        data.reverse().forEach(item => {

            servicos[cont] = [item.id, item.tiposerv, item.valorserv, item.dataini, item.datafim];
            cont ++;

        })
    });
    cont = 0;

    let cor = "";
    let bcor = 0;
    while (cont < clientes.length) {
 
        if (bcor == 0) {
            cor = "#f5f5f5";
            bcor = 1;
        } else if (bcor == 1) {
            cor = "#fff";
            bcor = 0;
        }

        ul.insertAdjacentHTML('beforeend', `<div class="lista" style="background-color: ${cor}">

            <div class="id-lista"><p>${clientes[cont][0]}</p></div>
            <div class="nome-lista"><p>${clientes[cont][1]}</p></div>
            <div class="tipo-lista"><p>${servicos[cont][1]}</p></div>
            
            <div class="botao-lista">
                <a href="ver-OS.html?id=${clientes[cont][0]}"><button id="botao-ver">Ver mais</button></a>
                <button id="botao-editar" onclick="popup(${clientes[cont][0]})">Editar</button>
                <button id="botao-excluir" onclick="del(${clientes[cont][0]})">Excluir</button>
            </div>

        </div>`);

        cont ++;
    }
}

async function popup(id) {
    const popup = document.querySelector("dialog");
    const btncliente = document.getElementById("popup-cliente");
    const btnveiculo = document.getElementById("popup-veiculo");
    const btnservico = document.getElementById("popup-servico");
    const btnvoltar = document.getElementById("popup-btnvoltar");

    popup.showModal();

    btncliente.onclick = function() {
        window.location.href = `editar-OS.html?id=${id}&editar=c`;
    }
    btnveiculo.onclick = function() { 
        window.location.href = `editar-OS.html?id=${id}&editar=v`;
    }
    btnservico.onclick = function() {
        window.location.href = `editar-OS.html?id=${id}&editar=s`;
    }
    btnvoltar.onclick = function() {
        popup.close();
    }
}

async function del(id) {
    await fetch(api_url + `/clientes/${id}`, {
        method: "DELETE",
    })
    await fetch(api_url + `/veiculos/${id}`, {
        method: "DELETE",
    })
    await fetch(api_url + `/servicos/${id}`, {
        method: "DELETE",
    })
    
    location.reload();
}

listar();