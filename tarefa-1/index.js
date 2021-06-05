   
    function limpa_espaco() {
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
    }

    function retorno(retorno) {
        if (!("erro" in retorno)) {
            document.getElementById('rua').value=(retorno.logradouro);
            document.getElementById('bairro').value=(retorno.bairro);
            document.getElementById('cidade').value=(retorno.localidade);
            document.getElementById('uf').value=(retorno.uf);
        } 
        else {
            limpa_espaco();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisa_cep(valor) {

        var cep = valor.replace(/\D/g, '');

        if (cep != "") {

            var valida_cep = /^[0-9]{8}$/;

            if(valida_cep.test(cep)) {

                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=retorno';

                document.body.appendChild(script);

            } 
            else {
                limpa_espaco();
                alert("Formato de CEP inválido.");
            }
        } 
        else {
            limpa_espaco();
        }
    };
