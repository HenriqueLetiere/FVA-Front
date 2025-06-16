const localhost = "http://localhost:8080";
const railway = "https://flask-production-fva.up.railway.app";
const api_url = railway;

const urlP = new URLSearchParams(window.location.search);
const idP = urlP.get("id");

const form = document.querySelector('.form-box');

async function listar() {
    let clientes = [];
    let veiculos = [];
    let servicos = [];

    await fetch(api_url + `/clientes/${idP}`).then(res => res.json()).then(data => {
        data.forEach(item => {

            clientes = [item.id, item.nome, item.datanasc, item.rg, item.cpf, item.telefone, item.sexo];

        })
    });

    await fetch(api_url + `/veiculos/${idP}`).then(res => res.json()).then(data => {
        data.forEach(item => {

            veiculos = [item.id, item.fabricante, item.modelo, item.ano, item.placa];

        })
    });

    await fetch(api_url + `/servicos/${idP}`).then(res => res.json()).then(data => {
        data.forEach(item => {

            servicos = [item.id, item.tiposerv, item.valorserv, item.dataini, item.datafim];

        })
    });

    form.insertAdjacentHTML('beforeend', `

        <div class="titulo"><h1>Cliente</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="nome">Nome Completo:</label><input type="text" id="nome" name="nome" value="${clientes[1]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="datanasc">Data de Nascimento:</label><input type="text" id="datanasc" name="datanasc" value="${clientes[2]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="rg">RG:</label><input type="text" id="rg" name="rg" value="${clientes[3]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="cpf">CPF:</label><input type="text" id="cpf" name="cpf" value="${clientes[4]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="telefone">Telefone:</label><input type="text" id="telefone" name="telefone" value="${clientes[5]}" disabled="disabled">
            </div>

            <div class="formulario-radio">
                <div class="sexo">Sexo:</div>
                <div class="formulario-radio-item"><input type="radio" id="masculino" name="sexo" disabled="disabled"><label for="masculino">Masculino</label></div>
                <div class="formulario-radio-item"><input type="radio" id="feminino" name="sexo" disabled="disabled"><label for="feminino">Feminino</label></div>
            </div>

        </div>

        <div class="titulo"><h1>Veículo</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="fabricante">Fabricante:</label><input type="text" id="fabricante" name="fabricante" value="${veiculos[1]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="modelo">Modelo:</label><input type="text" id="modelo" name="modelo" value="${veiculos[2]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="ano">Ano:</label><input type="text" id="ano" name="ano" value="${veiculos[3]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="placa">Placa:</label><input type="text" id="placa" name="placa" value="${veiculos[4]}" disabled="disabled">
            </div>

        </div>

        <div class="titulo"><h1>Serviço</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="tiposerv">Tipo de Serviço:</label><input type="text" id="tiposerv" name="tiposerv" value="${servicos[1]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="valorserv">Valor do Serviço:</label><input type="text" id="valorserv" name="valorserv" value="${servicos[2]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="dataini">Data de Inicio:</label><input type="text" id="dataini" name="dataini" value="${servicos[3]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="datafim">Data Prevista para Entrega:</label><input type="text" id="datafim" name="datafim" value="${servicos[4]}" disabled="disabled">
            </div>

        </div>

        <div class="botao-voltar"><a href="consultar-OS.html"><button>Voltar</button></a></div>
    `);

    if (clientes[6] == "MASCULINO") {
        document.getElementById("masculino").checked = true;
    } else if (clientes[6] == "FEMININO") {
        document.getElementById("feminino").checked = true;
    }
}

listar();