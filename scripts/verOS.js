const localhost = "http://localhost:8080";
const railway = "https://flask-production-fva.up.railway.app";
const api_url = localhost;

const urlS = new URLSearchParams(window.location.search);
const idS = urlS.get("id");

const form = document.querySelector('.form-box');

async function listar() {
    
    let os = [];
    await fetch(api_url + `/ordemservico/${idS}`).then(res => res.json()).then(data => {
        data.forEach(item => {

            os = [  item.nome, item.datanasc, item.rg, item.cpf, item.telefone, item.sexo,
                    item.fabricante, item.modelo, item.ano, item.placa,
                    item.tiposerv, item.valorserv, item.dataini, item.datafim   ];

        })
    });

    form.insertAdjacentHTML('beforeend', `

        <div class="titulo"><h1>Cliente</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="nome">Nome Completo:</label><input type="text" id="nome" name="nome" value="${os[0]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="datanasc">Data de Nascimento:</label><input type="text" id="datanasc" name="datanasc" value="${os[1]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="rg">RG:</label><input type="text" id="rg" name="rg" value="${os[2]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="cpf">CPF:</label><input type="text" id="cpf" name="cpf" value="${os[3]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="telefone">Telefone:</label><input type="text" id="telefone" name="telefone" value="${os[4]}" disabled="disabled">
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
                <label for="fabricante">Fabricante:</label><input type="text" id="fabricante" name="fabricante" value="${os[6]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="modelo">Modelo:</label><input type="text" id="modelo" name="modelo" value="${os[7]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="ano">Ano:</label><input type="text" id="ano" name="ano" value="${os[8]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="placa">Placa:</label><input type="text" id="placa" name="placa" value="${os[9]}" disabled="disabled">
            </div>

        </div>

        <div class="titulo"><h1>Serviço</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="tiposerv">Tipo de Serviço:</label><input type="text" id="tiposerv" name="tiposerv" value="${os[10]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="valorserv">Valor do Serviço:</label><input type="text" id="valorserv" name="valorserv" value="${os[11]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="dataini">Data de Inicio:</label><input type="text" id="dataini" name="dataini" value="${os[12]}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="datafim">Data Prevista para Entrega:</label><input type="text" id="datafim" name="datafim" value="${os[13]}" disabled="disabled">
            </div>

        </div>

        <div class="botao-voltar"><a href="consultar-OS.html"><button>Voltar</button></a></div>
    `);

    if (os[5] == "M") {
        document.getElementById("masculino").checked = true;
    } else if (os[5] == "F") {
        document.getElementById("feminino").checked = true;
    }
}

listar();