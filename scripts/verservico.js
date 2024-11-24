const localhost = "http://localhost:8080";
const railway = "https://meticulous-learning-production.up.railway.app";

const form = document.querySelector('.janela-flutuante');
const urlP = new URLSearchParams(window.location.search);
const idP = urlP.get("id");

async function listar() {

    await fetch(railway + `/ativos/${idP}`)
    .then(res => res.json())
    .then(lista => {
        form.insertAdjacentHTML('beforeend', `
            
            <div class="form-box">

                <div class="titulo"><h1>Pessoa</h1></div>
                <div class="formulario">

                    <div class="formulario-item">
                        <label for="nome">Nome Completo:</label><input type="text" id="nome" name="nome" value="${lista.nome}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="datanasc">Data de Nascimento:</label><input type="text" id="datanasc" name="datanasc" value="${lista.datanasc}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="rg">RG:</label><input type="text" id="rg" name="rg" value="${lista.rg}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="cpf">CPF:</label><input type="text" id="cpf" name="cpf" value="${lista.cpf}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="telefone">Telefone:</label><input type="text" id="telefone" name="telefone" value="${lista.telefone}" disabled="disabled">
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
                        <label for="fabricante">Fabricante:</label><input type="text" id="fabricante" name="fabricante" value="${lista.fabricante}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="modelo">Modelo:</label><input type="text" id="modelo" name="modelo" value="${lista.modelo}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="ano">Ano:</label><input type="text" id="ano" name="ano" value="${lista.ano}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="placa">Placa:</label><input type="text" id="placa" name="placa" value="${lista.placa}" disabled="disabled">
                    </div>

                </div>

                <div class="titulo"><h1>Serviço</h1></div>
                <div class="formulario">

                    <div class="formulario-item">
                        <label for="tiposerv">Tipo de Serviço:</label><input type="text" id="tiposerv" name="tiposerv" value="${lista.tiposerv}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="valorserv">Valor do Serviço:</label><input type="text" id="valorserv" name="valorserv" value="${lista.valorserv}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="dataini">Data de Inicio:</label><input type="text" id="dataini" name="dataini" value="${lista.dataini}" disabled="disabled">
                    </div>

                    <div class="formulario-item">
                        <label for="datafim">Data Prevista para Entrega:</label><input type="text" id="datafim" name="datafim" value="${lista.datafim}" disabled="disabled">
                    </div>

                </div>

                <div class="botao-voltar"><a href="consultar.html"><button>Voltar</button></a></div>

            </div>

        `);

        if (lista.sexo == "MASCULINO") {
            document.getElementById("masculino").checked = true;
        } else if (lista.sexo == "FEMININO") {
            document.getElementById("feminino").checked = true;
        }
    })
    .then(function (res) { console.log(res) })
    .catch(() => {
        alert("SERVIÇO NÃO ENCONTRADO!");
        window.location.href = "consultar.html";
    })
};

listar();