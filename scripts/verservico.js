const form = document.querySelector('.janela-flutuante');

const divnome = document.querySelector('#nome');
const divdatanasc = document.querySelector('#datanasc');
const divrg = document.querySelector('#rg');
const divcpf = document.querySelector('#cpf');
const divtelefone = document.querySelector('#telefone');
const divsexo = document.querySelector('.formulario-radio');

const divfabricante = document.querySelector('#fabricante');
const divmodelo = document.querySelector('#modelo');
const divano = document.querySelector('#ano');
const divplaca = document.querySelector('#placa');

const divtiposerv = document.querySelector('#tiposerv');
const divvalorserv = document.querySelector('#valorserv');
const divdataini = document.querySelector('#dataini');
const divdatafim = document.querySelector('#datafim');

const urlP = new URLSearchParams(window.location.search);
const idP = urlP.get("id");

function listar() {

    fetch(`https://meticulous-learning-production.up.railway.app/servico/${idP}`)
    .then(res => res.json())
    .then(lista => {

        var sexoM = "";
        var sexoF = "";
        if (lista.sexo == "MASCULINO") {
            sexoM = "masculino";
        } else if (lista.sexo == "FEMININO") {
            sexoF = "feminino";
        }

        form.insertAdjacentHTML('beforeend', `
            
            <div class="form-box">

                <div class="titulo"><h1>Pessoa</h1></div>
                <div class="formulario">

                        <div class="formulario-item">
                            <label for="nome">Nome Completo:</label><div id="nome">${lista.nome}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="datanasc">Data de Nascimento:</label><div id="datanasc">${lista.datanasc}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="rg">RG:</label><div id="rg">${lista.rg}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="cpf">CPF:</label><div id="cpf">${lista.cpf}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="telefone">Telefone:</label><div id="telefone">${lista.telefone}</div>
                        </div>

                        <div class="formulario-radio">
                            <div class="sexo">Sexo:</div>
                            <div class="formulario-radio-item"><input type="radio" id=${sexoM}><label>Masculino</label></div>
                            <div class="formulario-radio-item"><input type="radio" id=${sexoF}><label>Feminino</label></div>
                        </div>
                        
                </div>

                <div class="titulo"><h1>Veículo</h1></div>
                <div class="formulario">

                        <div class="formulario-item">
                            <label for="fabricante">Fabricante:</label><div id="fabricante">${lista.fabricante}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="modelo">Modelo:</label><div id="modelo">${lista.modelo}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="ano">Ano:</label><div id="ano">${lista.ano}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="placa">Placa:</label><div id="placa">${lista.placa}</div>
                        </div>

                </div>

                <div class="titulo"><h1>Serviço</h1></div>
                <div class="formulario">

                        <div class="formulario-item">
                            <label for="tiposerv">Tipo de Serviço:</label><div id="tiposerv">${lista.tiposerv}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="valorserv">Valor do Serviço:</label><div id="valorserv">${lista.valorserv}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="dataini">Data de Inicio:</label><div id="dataini">${lista.dataini}</div>
                        </div>

                        <div class="formulario-item">
                            <label for="datafim">Data Prevista para Entrega:</label><div id="datafim">${lista.datafim}</div>
                        </div>

                </div>

                <div class="botao-voltar"><a href="consultar.html"><button>Voltar</button></a></div>

            </div>

        `);
    })

    .catch(() => {
        alert("SERVIÇO NÃO ENCONTRADO!");
        window.location.href = "consultar.html";
    });
}

/* Listar Item */

listar();