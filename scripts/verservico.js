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

        divnome.insertAdjacentHTML('beforeend', `${lista.nome}`);
        divdatanasc.insertAdjacentHTML('beforeend', `${lista.datanasc}`);
        divrg.insertAdjacentHTML('beforeend', `${lista.rg}`);
        divcpf.insertAdjacentHTML('beforeend', `${lista.cpf}`);
        divtelefone.insertAdjacentHTML('beforeend', `${lista.telefone}`);
        divsexo.insertAdjacentHTML('beforeend', `

            <div class="formulario-radio-item"><input type="radio" id=${sexoM}><label>Masculino</label></div>
            <div class="formulario-radio-item"><input type="radio" id=${sexoF}><label>Feminino</label></div>

        `);

        divfabricante.insertAdjacentHTML('beforeend', `${lista.fabricante}`);
        divmodelo.insertAdjacentHTML('beforeend', `${lista.modelo}`);
        divano.insertAdjacentHTML('beforeend', `${lista.ano}`);
        divplaca.insertAdjacentHTML('beforeend', `${lista.placa}`);

        divtiposerv.insertAdjacentHTML('beforeend', `${lista.tiposerv}`);
        divvalorserv.insertAdjacentHTML('beforeend', `${lista.valorserv}`);
        divdataini.insertAdjacentHTML('beforeend', `${lista.dataini}`);
        divdatafim.insertAdjacentHTML('beforeend', `${lista.datafim}`);
    })

    .catch(lista => {
        divsexo.insertAdjacentHTML('beforeend', `

            <div class="formulario-radio-item"><input type="radio"><label>Masculino</label></div>
            <div class="formulario-radio-item"><input type="radio"><label>Feminino</label></div>

        `);
    });
}

/* Listar Item */

listar();