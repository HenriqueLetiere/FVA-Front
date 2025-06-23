const localhost = "http://localhost:8080";
const railway = "https://flask-production-fva.up.railway.app";
const api_url = localhost;

const urlOS = new URLSearchParams(window.location.search);
const idOS = urlOS.get("id");
const editarOS = urlOS.get("editar");

const form = document.querySelector("form");

async function listar() {

    let os = [];
    await fetch(api_url + `/ordemservico/${idOS}`).then(res => res.json()).then(data => {
        data.forEach(item => {

            os = [  item.nome, item.datanasc, item.rg, item.cpf, item.telefone, item.sexo,
                    item.fabricante, item.modelo, item.ano, item.placa,
                    item.tiposerv, item.valorserv, item.dataini, item.datafim   ];

        })
    });
    
    if (editarOS == 'c') {
        form.insertAdjacentHTML('beforeend', `

            <div class="titulo"><h1>Cliente</h1></div>
            <div class="formulario">

                <div class="formulario-item">
                    <label for="nome">Nome Completo:</label><input type="text" id="nome" name="nome" placeholder="Digite aqui seu nome" value="${os[0]}" required>
                </div>

                <div class="formulario-item">
                    <label for="datanasc">Data de Nascimento:</label><input type="text" id="datanasc" name="datanasc" placeholder="--/--/----" minlength="10" value="${os[1]}" required>
                </div>

                <div class="formulario-item">
                    <label for="rg">RG:</label><input type="text" id="rg" name="rg" placeholder="xx.xxx.xxx-x" minlength="12" value="${os[2]}" required>
                </div>

                <div class="formulario-item">
                    <label for="cpf">CPF:</label><input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" minlength="14" value="${os[3]}" required>
                </div>

                <div class="formulario-item">
                    <label for="telefone">Telefone:</label><input type="text" id="telefone" name="telefone" placeholder="(xx) xxxxx-xxxx" minlength="15" value="${os[4]}" required>
                </div>

                <div class="formulario-radio">
                    <div class="sexo">Sexo:</div>
                    <div class="formulario-radio-item"><input type="radio" id="masculino" value="M" name="sexo" required><label for="masculino">Masculino</label></div>
                    <div class="formulario-radio-item"><input type="radio" id="feminino" value="F" name="sexo" required><label for="feminino">Feminino</label></div>
                </div>
                    
            </div>

            <div class="botao-finalizar"><a><button>Finalizar</button></a></div>
        `);

        if (os[5] == "M") {
            document.getElementById("masculino").checked = true;
        } else if (os[5] == "F") {
            document.getElementById("feminino").checked = true;
        }

    } else if (editarOS == 'v') {
        form.insertAdjacentHTML('beforeend', `

            <div class="titulo"><h1>Veículo</h1></div>
            <div class="formulario">

                <div class="formulario-item">
                    <label for="fabricante">Fabricante:</label><input type="text" id="fabricante" name="fabricante" placeholder="Digite aqui a fabricante do veículo" value="${os[6]}" required>
                </div>

                <div class="formulario-item">
                    <label for="modelo">Modelo:</label><input type="text" id="modelo" name="modelo" placeholder="Digite aqui o modelo do veículo" value="${os[7]}" required>
                </div>

                <div class="formulario-item">
                    <label for="ano">Ano:</label><input type="text" id="ano" name="ano" placeholder="Digite aqui o ano do veículo" value="${os[8]}" required>
                </div>

                <div class="formulario-item">
                    <label for="placa">Placa:</label><input type="text" id="placa" name="placa" placeholder="Digite aqui a placa do veículo" maxlength="7" value="${os[9]}" required>
                </div>

            </div>

            <div class="botao-finalizar"><a><button>Finalizar</button></a></div>
        `);

    } else if (editarOS == 's') {
        form.insertAdjacentHTML('beforeend', `

            <div class="titulo"><h1>Serviço</h1></div>
            <div class="formulario">

                <div class="formulario-item">
                    <label for="tiposerv">Tipo de Serviço:</label><input type="text" id="tiposerv" name="tiposerv" placeholder="Digite aqui o tipo de serviço" value="${os[10]}" required>
                </div>

                <div class="formulario-item">
                    <label for="valorserv">Valor do Serviço:</label><input type="text" id="valorserv" name="valorserv" placeholder="Digite aqui o valor do serviço" value="${os[11]}" required>
                </div>

                <div class="formulario-item">
                    <label for="dataini">Data de Inicio:</label><input type="text" id="dataini" name="dataini" placeholder="--/--/----" minlength="10" value="${os[12]}" required>
                </div>

                <div class="formulario-item">
                    <label for="datafim">Data Prevista para Entrega:</label><input type="text" id="datafim" name="datafim" placeholder="--/--/----" minlength="10" value="${os[13]}" required>
                </div>

            </div>

            <div class="botao-finalizar"><a><button>Finalizar</button></a></div>
        `);
    }

    $('#rg').mask('00.000.000-0');
    $('#cpf').mask('000.000.000-00');
    $('#datanasc').mask('00/00/0000');
    $('#telefone').mask('(00) 00000-0000');
    $('#ano').mask('0000');
    $('#valorserv').mask('000.000.000.000,00', {reverse: true});
    $('#dataini').mask('00/00/0000');
    $('#datafim').mask('00/00/0000');
}

async function enviarCliente() {

    let Cnome = document.querySelector("#nome");
    let CdataNasc = document.querySelector("#datanasc");
    let Crg = document.querySelector("#rg");
    let Ccpf = document.querySelector("#cpf");
    let Ctelefone = document.querySelector("#telefone");

    let id_cliente = 0;
    await fetch(api_url + `/ordemservico/${idOS}`).then(res => res.json()).then(data => {
        data.forEach(item => {
            id_cliente = item.id_cliente;
        })
    });

    await fetch(api_url + `/clientes/${id_cliente}`,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({

                nome: Cnome.value.toUpperCase(),
                datanasc: CdataNasc.value,
                rg: Crg.value,
                cpf: Ccpf.value,
                telefone: Ctelefone.value,
                sexo: $('input[name=sexo]:checked').val()

            })
        }
    );
}

async function enviarVeiculo() {

    let Vfabricante = document.querySelector("#fabricante");
    let Vmodelo = document.querySelector("#modelo");
    let Vano = document.querySelector("#ano");
    let Vplaca = document.querySelector("#placa");

    let id_veiculo = 0;
    await fetch(api_url + `/ordemservico/${idOS}`).then(res => res.json()).then(data => {
        data.forEach(item => {
            id_veiculo = item.id_veiculo;
        })
    });

    await fetch(api_url + `/veiculos/${id_veiculo}`,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({

                fabricante: Vfabricante.value.toUpperCase(),
                modelo: Vmodelo.value.toUpperCase(),
                ano: Vano.value,
                placa: Vplaca.value.toUpperCase()

            })
        }
    );
}

async function enviarOrdemServico() {
    
    let StipoServ = document.querySelector("#tiposerv");
    let SvalorServ = document.querySelector("#valorserv");
    let SdataIni = document.querySelector("#dataini");
    let SdataFim = document.querySelector("#datafim");

    await fetch(api_url + `/ordemservico/${idOS}`,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({

                tiposerv: StipoServ.value.toUpperCase(),
                valorserv: SvalorServ.value,
                dataini: SdataIni.value,
                datafim: SdataFim.value

            })
        }
    );
}

listar();
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    if (editarOS == 'c') {
       await enviarCliente();

    } else if (editarOS == 'v') {
        await enviarVeiculo();

    } else if (editarOS == 's') {
        await enviarOrdemServico();

    }

    location.href = "consultar-OS.html";
});