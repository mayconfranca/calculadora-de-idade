//Função.
function calcular() {
    //Variáveis locais.
    let no, dataAtual, dia, mes, ano, da, d, m, a, idade, i;
    no = ""
    //Obtenção do valor do campo de entrada para nome.         
    no = document.getElementById("nome").value;
    dataAtual = new Date();
    //Obtenção e armazenamento da data atual.
    dia = dataAtual.getDate();
    mes = (dataAtual.getMonth()+1);
    ano = dataAtual.getFullYear();
    //Obtenção e divisão numa lista do valor do campo de entrada para data.
    da = document.getElementById("data").value.split("-");
    //Obtenção dos dados da lista.
    d = da[2];
    m = da[1];
    a = da[0];
    //Cálculo da idade.
    idade = ano - a;
    i = idade - 1;
    //Verificação dos valores nos campos de entrada.
    if(no != "" && a != 0 && a < ano) {
        //Verificação do (s) dia (s) que falta (m) para o aniversário no mês de nascimento.
        if(m == mes && d > dia) {
            //Inserção de conteúdo no elemento p e exibição na página web.
            document.getElementById("resposta").innerHTML = "";
            document.getElementById("resposta-02").innerHTML = "Seu nome é " + no +
            " e você tem " + i + " ano (s) de idade.";
            //Verificação do (s) mês (es) que falta (m) para o aniversário.
        } else if (m > mes) {
            //Inserção de conteúdo no elemento p e exibição na página web.
            document.getElementById("resposta").innerHTML = "";
            document.getElementById("resposta-02").innerHTML = "Seu nome é " + no +
            " e você tem " + i + " ano (s) de idade.";
        } else {
            //Inserção de conteúdo no elemento p e exibição na página web.
            document.getElementById("resposta").innerHTML = "";
            document.getElementById("resposta-02").innerHTML = "Seu nome é " + no +
            " e você tem " + idade + " ano (s) de idade.";
        }
    } else {
        //Inserção de conteúdo no elemento p e exibição na página web.
        document.getElementById("resposta-02").innerHTML = "";
        document.getElementById("resposta").innerHTML = "Um campo ou mais não foi preenchido e/ou a data é inválida!";
        }        
    }