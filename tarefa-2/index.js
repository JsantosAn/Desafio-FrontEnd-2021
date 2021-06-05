   
    function retorno(retorno) {
        if (!("erro" in retorno)) {
            document.getElementById('rua').value=(retorno.logradouro);
            document.getElementById('bairro').value=(retorno.bairro);
            document.getElementById('cidade').value=(retorno.localidade);
            document.getElementById('uf').value=(retorno.uf);
        } 
        else {
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('cep').value=("");

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
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('cep').value=("");
            alert("Formato de CEP inválido.");
            }
        } 
        else {
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
        }
    };
    function _cpf(valor) {

        var cpf = valor.replace(/[^\d]+/g, '');

        if (cpf == '') return false;
            if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
            add = 0;
            for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
            rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
            return false;
            add = 0;
            for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
            rev = 0;
            if (rev != parseInt(cpf.charAt(10)))
            return false;
            return true;
    };
    function validar_CPF(el){
        if( !_cpf(el.value) ){
        alert("CPF inválido!" + el.value);
        el.value = "";
        }
        }
    function valida_data(data) {
        if (data != "") {
            data_ = data.value;
            var ano = data_.match(/\d{4}/gm); 
            const dataAtual = new Date();
            const anoAtual = dataAtual.getFullYear();  
            var d = new Date();
            var number1 = parseInt(anoAtual),
                number2 = parseInt(data_),
                result = number1 - number2;//Resultado: 110
            if (result < 18) {
            alert("Idade minima para cadastro 18 anos");
            data.value="";
            }
                } 
            };
    function myFunction() {
        var dict = [ document.getElementById('nome').value,
                    document.getElementById('data').value,
                    document.getElementById('cpf').value,
                    document.getElementById('cep').value,
                    document.getElementById('rua').value,
                    document.getElementById('bairro').value,
                    document.getElementById('cidade').value,
                    document.getElementById('uf').value];
        console.log(dict);
       
        alert("JSON Object = "+JSON.stringify(Object.assign({}, dict)));
    };               
   
