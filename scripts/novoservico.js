const form = document.querySelector("form");

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

function enviar() {

    fetch("https://meticulous-learning-production.up.railway.app/servico",
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
};

form.addEventListener('submit', function(event) {

    event.preventDefault();
    enviar();
    location.reload();

});