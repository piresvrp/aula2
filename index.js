//obter usuário
// obter telefone
// obter endereço vinicius


function obterUsuario(callBack){
    setTimeout(() =>{
        return callBack(null,{
            id: 1,
            nome : "vinao",
            dataNascimento: new Date()
        })
    }, 1000)
}


function obterTelefone(idUsuario, callBack){
    setTimeout(() => {
        return callBack(null,{
            telefone: '981260467',
            ddd: '77'
        })
    }, 1000)
}

function obterEndereco(idUsuario, callBack){
    setTimeout(function(){
        return callBack(null, {
            rua: "barragem",
            numero: 15
        })
    }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error("Deu Erro Mano", error)
        return
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
       if(error1){
            console.error("Deu Ruim em Telefon Mano", error1)
            return 
       }


       obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error("Deu ruim em endereco")
                return
            }

            console.log(`
            nome = ${usuario.nome}
            id = ${usuario.id},
            telefone = ${telefone.ddd} - ${telefone.telefone}     
            end  = ${endereco.numero} - rua ${endereco.rua}`)
       })
    })
})
