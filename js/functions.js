function ValidaFormulario(){
    try{
        var InputNome = document.getElementById('Nome').value;
        var InputEmail = document.getElementById('Email').value;
        var InputProfissao = document.getElementById('Profissao').value;
        var InputTxtArea = document.getElementById('TextArea').value;

        //Verificando se os inputs estão vazios
        if(InputNome == '') throw "NomeVazio";
        if(InputEmail == '') throw "EmailVazio";
        if(InputProfissao == '') throw "ProfissaoVazio";
        if(InputTxtArea == '') throw "TextAreaVazio";

        alert('Parabéns, nenhum input está vazio');
    }
    //Tratamento para os nomes vazios
    catch(NomeVazio){
        if(NomeVazio == 'NomeVazio'){
            document.getElementById('Nome').style.borderColor = "red";
        }
        else if(NomeVazio == 'EmailVazio'){
            document.getElementById('Email').style.borderColor = "red";
        }
        else if(NomeVazio == 'ProfissaoVazio'){
            document.getElementById('Profissao').style.borderColor = "red";
        }
        else if(NomeVazio == 'TextAreaVazio'){
            document.getElementById('TextArea').style.borderColor = "red";
        }
    }

}