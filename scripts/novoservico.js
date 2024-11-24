const localhost = "http://localhost:8080";
const railway = "https://meticulous-learning-production.up.railway.app";

const form = document.querySelector("form");
var data = new Date();
const dataAtual = data.toLocaleDateString("pt-BR");

async function listar() {
    form.insertAdjacentHTML('beforeend', `

        <div class="titulo"><h1>Pessoa</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="nome">Nome Completo:</label><input type="text" id="nome" name="nome" placeholder="Digite aqui seu nome" required>
            </div>

            <div class="formulario-item">
                <label for="datanasc">Data de Nascimento:</label><input type="text" id="datanasc" name="datanasc" placeholder="--/--/----" minlength="10" required>
            </div>

            <div class="formulario-item">
                <label for="rg">RG:</label><input type="text" id="rg" name="rg" placeholder="xx.xxx.xxx-x" minlength="12" required>
            </div>

            <div class="formulario-item">
                <label for="cpf">CPF:</label><input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" minlength="14" required>
            </div>

            <div class="formulario-item">
                <label for="telefone">Telefone:</label><input type="text" id="telefone" name="telefone" placeholder="(xx) xxxxx-xxxx" minlength="15" required>
            </div>

            <div class="formulario-radio">
                <div class="sexo">Sexo:</div>
                <div class="formulario-radio-item"><input type="radio" id="masculino" value="MASCULINO" name="sexo" required><label for="masculino">Masculino</label></div>
                <div class="formulario-radio-item"><input type="radio" id="feminino" value="FEMININO" name="sexo" required><label for="feminino">Feminino</label></div>
            </div>
                
        </div>

        <div class="titulo"><h1>Veículo</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="fabricante">Fabricante:</label><input type="text" id="fabricante" name="fabricante" placeholder="Digite aqui a fabricante do veículo" required>
            </div>

            <div class="formulario-item">
                <label for="modelo">Modelo:</label><input type="text" id="modelo" name="modelo" placeholder="Digite aqui o modelo do veículo" required>
            </div>

            <div class="formulario-item">
                <label for="ano">Ano:</label><input type="text" id="ano" name="ano" placeholder="Digite aqui o ano do veículo" required>
            </div>

            <div class="formulario-item">
                <label for="placa">Placa:</label><input type="text" id="placa" name="placa" placeholder="Digite aqui a placa do veículo" maxlength="7" required>
            </div>

        </div>

        <div class="titulo"><h1>Serviço</h1></div>
        <div class="formulario">

            <div class="formulario-item">
                <label for="tiposerv">Tipo de Serviço:</label><input type="text" id="tiposerv" name="tiposerv" placeholder="Digite aqui o tipo de serviço" required>
            </div>

            <div class="formulario-item">
                <label for="valorserv">Valor do Serviço:</label><input type="text" id="valorserv" name="valorserv" placeholder="Digite aqui o valor do serviço" required>
            </div>

            <div class="formulario-item">
                <label for="dataini">Data de Inicio:</label><input type="text" id="dataini" name="dataini" value="${dataAtual}" disabled="disabled">
            </div>

            <div class="formulario-item">
                <label for="datafim">Data Prevista para Entrega:</label><input type="text" id="datafim" name="datafim" placeholder="--/--/----" minlength="10" required>
            </div>

        </div>

        <div class="botao-finalizar"><a><button>Finalizar</button></a></div>

    `);

    $('#rg').mask('00.000.000-0');
    $('#cpf').mask('000.000.000-00');
    $('#datanasc').mask('00/00/0000');
    $('#telefone').mask('(00) 00000-0000');
    $('#ano').mask('0000');
    $('#valorserv').mask('000.000.000.000,00', {reverse: true});
    $('#dataini').mask('00/00/0000');
    $('#datafim').mask('00/00/0000');
    
};

async function enviarcliente() {

    const Pnome = document.querySelector("#nome");
    const PdataNasc = document.querySelector("#datanasc");
    const Prg = document.querySelector("#rg");
    const Pcpf = document.querySelector("#cpf");
    const Ptelefone = document.querySelector("#telefone");

    await fetch(railway + `/cliente`,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({

                nome: Pnome.value.toUpperCase(),
                datanasc: PdataNasc.value,
                rg: Prg.value,
                cpf: Pcpf.value,
                telefone: Ptelefone.value,
                sexo: $('input[name=sexo]:checked').val()

            })
        }
    )
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

async function enviarveiculo() {

    const Vfabricante = document.querySelector("#fabricante");
    const Vmodelo = document.querySelector("#modelo");
    const Vano = document.querySelector("#ano");
    const Vplaca = document.querySelector("#placa");

    await fetch(railway + `/veiculo`,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({

                fabricante: Vfabricante.value.toUpperCase(),
                modelo: Vmodelo.value.toUpperCase(),
                ano: Vano.value,
                placa: Vplaca.value.toUpperCase()

            })
        }
    )
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

async function enviarservico() {

    const StipoServ = document.querySelector("#tiposerv");
    const SvalorServ = document.querySelector("#valorserv");
    const SdataIni = document.querySelector("#dataini");
    const SdataFim = document.querySelector("#datafim");

    await fetch(railway + `/servico`,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({

                tiposerv: StipoServ.value.toUpperCase(),
                valorserv: SvalorServ.value,
                dataini: SdataIni.value,
                datafim: SdataFim.value

            })
        }
    )
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

async function enviarlista() {

    const Pnome = document.querySelector("#nome");
    const PdataNasc = document.querySelector("#datanasc");
    const Prg = document.querySelector("#rg");
    const Pcpf = document.querySelector("#cpf");
    const Ptelefone = document.querySelector("#telefone");

    const Vfabricante = document.querySelector("#fabricante");
    const Vmodelo = document.querySelector("#modelo");
    const Vano = document.querySelector("#ano");
    const Vplaca = document.querySelector("#placa");

    const StipoServ = document.querySelector("#tiposerv");
    const SvalorServ = document.querySelector("#valorserv");
    const SdataIni = document.querySelector("#dataini");
    const SdataFim = document.querySelector("#datafim");

    await fetch(railway + `/listativos`,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({

                nome: Pnome.value.toUpperCase(),
                datanasc: PdataNasc.value,
                rg: Prg.value,
                cpf: Pcpf.value,
                telefone: Ptelefone.value,
                sexo: $('input[name=sexo]:checked').val(),

                fabricante: Vfabricante.value.toUpperCase(),
                modelo: Vmodelo.value.toUpperCase(),
                ano: Vano.value,
                placa: Vplaca.value.toUpperCase(),

                tiposerv: StipoServ.value.toUpperCase(),
                valorserv: SvalorServ.value,
                dataini: SdataIni.value,
                datafim: SdataFim.value

            })
        }
    )
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
    location.reload();
    window.location.href = "index.html";
};

listar();
form.addEventListener('submit', function(event) {

    event.preventDefault();
    enviarcliente();
    enviarveiculo();
    enviarservico();
    enviarlista();

});