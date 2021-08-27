/*
    NOME: "A.V.I.S.A. v2.0" (ASSISTENTE VIRTUAL DE SAÚDE)
    AUTOR: 21
    DATA: 04.08.2021
*/


window.onload = function () {

    //  EVENTOS DOS SINTOMAS----------------------------------------------------------------------------------------
    document.querySelector('#ansiedade').addEventListener('mousedown', ansiedade)
    document.querySelector('#bocaSeca').addEventListener('mousedown', bocaSeca)
    document.querySelector('#calafrios').addEventListener('mousedown', calafrios)
    document.querySelector('#cansaco').addEventListener('mousedown', cansaco)
    document.querySelector('#chiadoNoPeito').addEventListener('mousedown', chiadoNoPeito)
    document.querySelector('#desconfortoToracico').addEventListener('mousedown', desconfortoToracico)
    document.querySelector('#diarreia').addEventListener('mousedown', diarreia)
    document.querySelector('#dorDeCabeca').addEventListener('mousedown', dorDeCabeca)
    document.querySelector('#dorDeEstomago').addEventListener('mousedown', dorDeEstomago)
    document.querySelector('#doresDeGarganta').addEventListener('mousedown', doresDeGarganta)
    document.querySelector('#dorNoCorpo').addEventListener('mousedown', dorNoCorpo)
    document.querySelector('#faltaDeAr').addEventListener('mousedown', faltaDeAr)
    document.querySelector('#febres').addEventListener('mousedown', febres)
    document.querySelector('#fomeFrequente').addEventListener('mousedown', fomeFrequente)
    document.querySelector('#gases').addEventListener('mousedown', gases)
    document.querySelector('#inchachoNoCorpo').addEventListener('mousedown', inchachoNoCorpo)
    document.querySelector('#malEstar').addEventListener('mousedown', malEstar)
    document.querySelector('#peleSeca').addEventListener('mousedown', peleSeca)
    document.querySelector('#perdaDePaladar').addEventListener('mousedown', perdaDePaladar)
    document.querySelector('#perdaDePeso').addEventListener('mousedown', perdaDePeso)
    document.querySelector('#queimacaoNoEstomago').addEventListener('mousedown', queimacaoNoEstomago)
    document.querySelector('#sangramento').addEventListener('mousedown', sangramento)
    document.querySelector('#secrecaoNasal').addEventListener('mousedown', secrecaoNasal)
    document.querySelector('#sedeFrequente').addEventListener('mousedown', sedeFrequente)
    document.querySelector('#suoresNoturnos').addEventListener('mousedown', suoresNoturnos)
    document.querySelector('#tosseHumida').addEventListener('mousedown', tosseHumida)
    document.querySelector('#tosseSeca').addEventListener('mousedown', tosseSeca)
    document.querySelector('#tremores').addEventListener('mousedown', tremores)
    document.querySelector('#vomito').addEventListener('mousedown', vomito)
    document.querySelector('#vontadeDeUrinar').addEventListener('mousedown', vontadeDeUrinar)


    // FUNÇÕES EXTERNAS -----------------------------------------------------------------------------------------
    
    // FUNÇÕES FORMULÁRIO
    document.querySelector('#submeterDados').addEventListener('click', formAvisa)
    document.querySelector('#submeterSintomas').addEventListener('click', ver)
    document.querySelector('#sairDoResultado').addEventListener('click', novoTeste)

    function formAvisa() {

        // VALIDAÇÃO DO FORMULÁRIO
        const valorNome = document.querySelector('#nome').value
        const valorIdade = document.querySelector('#idade').value
        const valorEndereco = document.querySelector('#endereco').value
        const valorSexo = document.querySelector('#sexo').value

        if (valorNome == '' || valorIdade == '' || valorEndereco == '' || valorSexo == '' ) {

            document.querySelector('#nomeCompleto').innerHTML = '&#9888 PREENCHA TODOS OS CAMPOS &#9888'
            document.querySelector('#nomeCompleto').style.animation = 'anima .8s infinite'

        } else {

            document.querySelector('#form_dados').style.display = 'none'
            document.querySelector('#nomeCompleto').style.display = 'none'
            document.querySelector('#nomeAbreviado').style.display = 'none'
            document.querySelector('#form_avisa').style.display = 'inherit'

            // ENTRADA DOS DADOS NO FINAL
            document.querySelector('#resNome').innerHTML += `${valorNome.toUpperCase()}`
            document.querySelector('#resIdade').innerHTML += `${valorIdade.toUpperCase()} ANOS`
            document.querySelector('#resSexo').innerHTML += `${valorSexo.toUpperCase()}`
            document.querySelector('#resEndereco').innerHTML += `${valorEndereco.toUpperCase()}`

        }

    }

    function novoTeste() {

        document.body.style.backgroundColor = '#0a2a52'
        document.querySelector('#form_resultado').style.display = 'none'
        document.querySelector('#form_avisa').style.display = 'inherit'
        document.querySelector('#resultadoFinal').innerHTML = `LISTA DE PROVÁVEIS DOENÇAS:  ` // EVITA QUE A LISTA DE PROVÁVEIS DOENÇAS DUPLIQUE OS RESULTADOS

    }

    function ver() {

        for (let index = 0; index < valoresDosSintomas.length; index++) {

            if (Math.max(...valoresDosSintomas) == valoresDosSintomas[index]) {

                document.querySelector('#resultadoFinal').innerHTML += `[${listaDasDoencas[index].toUpperCase()}] `

            }

        }

        document.body.style.backgroundColor = 'white'
        document.querySelector('#form_avisa').style.display = 'none'
        document.querySelector('#form_resultado').style.display = 'inherit'

    }


    // PROGRAMA PRINCIPAL--------------------------------------------------------------------------------------------
    let valoresDosSintomas = []
    let estadoSintoma = [] // GUARDA VALORES QUE INDICAM SE O SINTOMA ESTÁ ATIVADO OU NÃO
    let numeroDesintomas = 0 // NÚMEROS DE SINTOMAS SELECIONADOS
    let listaDasDoencas = ['gripe', 'diabetes', 'colera', 'asma', 'covid', 'malaria', 'hiv/sida', 'gastrite', 'cancro', 'sinusite']
    let listaDosSintomas = ['febres', 'vomito', 'cansaco', 'diarreia', 'peleSeca', 'bocaSeca', 'calafrios', 'faltaDeAr', 'tosseSeca', 'ansiedade', 'dorNoCorpo', 'dorDeCabeca', 'tosseHumida', 'perdaDePeso', 'fomeFrequente', 'sedeFrequente', 'perdaDePaladar', 'suoresNoturnos', 'vontadeDeUrinar', 'doresDeGarganta', 'chiadoNoPeito', 'desconfortoToracico', 'dorDeEstomago', 'queimacaoNoEstomago', 'gases', 'inchachoNoCorpo', 'sangramento', 'tremores', 'secrecaoNasal', 'malEstar'] // NÃO PRECISA ESTAR EM ORDEM

    for (let index = 0; index < listaDosSintomas.length; index++) {

        estadoSintoma[index] = 0

    }

    for (let index = 0; index < listaDasDoencas.length; index++) {

        valoresDosSintomas[index] = 0

    }


    //===========================================  A FESTA É AQUI!  =================================================

    function analise(nomeDoSintoma, doencaA, doencaB, doencaC, doencaD) {
        // A PRINCÍPIO CADA SINTOMA PODE ABRIGAR ATÉ 5 DOENÇAS MAS OS PARÂMETROS PODEM SER ATUALIZADOS. ASSIM A LISTA DE PARÂMETROS TAMBÉM DEVE SER
        // O RECOMENDADO É QUE CADA DOENÇA TENHA NO MÍNIMO 4 SINTOMAS PARA MELHOR DESEMPENHO

        let parametros = [doencaA, doencaB, doencaC, doencaD]

        estadoSintoma[listaDosSintomas.indexOf(nomeDoSintoma)] += 1


        if (estadoSintoma[listaDosSintomas.indexOf(nomeDoSintoma)] % 2 != 0) {

            numeroDesintomas += 1

            for (let index = 0; index < parametros.length; index++) {

                if (listaDasDoencas.includes(parametros[index])) {

                    valoresDosSintomas[listaDasDoencas.indexOf(parametros[index])] += 1

                }

            }

            document.querySelector(`#${listaDosSintomas[listaDosSintomas.indexOf(nomeDoSintoma)]}`).style.color = 'Orange'

        } else {

            numeroDesintomas -= 1

            for (let index = 0; index < parametros.length; index++) {

                if (listaDasDoencas.includes(parametros[index])) {

                    valoresDosSintomas[listaDasDoencas.indexOf(parametros[index])] -= 1

                }

            }

            document.querySelector(`#${listaDosSintomas[listaDosSintomas.indexOf(nomeDoSintoma)]}`).style.color = ''

        }

        if (numeroDesintomas > 3) { // ENQUANTO O NÚMERO DE SINTOMAS FOR MENOR QUE 4 NÃO DEVERÁ APERECER A OPÇÃO DE SUBMETER PARA ANÁLISE

            document.querySelector('#submeterSintomas').style.display = 'inherit'

        } else {

            document.querySelector('#submeterSintomas').style.display = 'none'

        }

    }

    // FUNÇÃO DE CADA SINTOMA------------------------------------------------------------------------------------
    // ==> COLOCA-SE O NOME DO SINTOMA E SUAS RESPECTIVAS DOENÇAS
    function ansiedade() { analise('ansiedade', 'asma') }
    function bocaSeca() { analise('bocaSeca', 'colera') }
    function calafrios() { analise('calafrios', 'malaria', 'gripe') }
    function cansaco() { analise('cansaco', 'diabetes', 'hiv/sida', 'gripe', 'cancro') }
    function chiadoNoPeito() { analise('chiadoNoPeito', 'asma') }
    function desconfortoToracico() { analise('desconfortoToracico', 'asma') }
    function diarreia() { analise('diarreia', 'malaria', 'colera', 'gastrite') }
    function dorDeCabeca() { analise('dorDeCabeca', 'malaria', 'gripe', 'hiv/sida', 'sinusite') }
    function dorDeEstomago() { analise('dorDeEstomago', 'gastrite') }
    function doresDeGarganta() { analise('doresDeGarganta', 'covid', 'gripe', 'sinusite') }
    function dorNoCorpo() { analise('dorNoCorpo', 'malaria', 'covid', 'colera', 'hiv/sida') }
    function faltaDeAr() { analise('faltaDeAr', 'covid', 'asma') }
    function febres() { analise('febres', 'malaria', 'covid', 'gripe', 'hiv/sida') }
    function fomeFrequente() { analise('fomeFrequente', 'diabetes') }
    function gases() { analise('gases', 'gastrite') }
    function inchachoNoCorpo() { analise('inchachoNoCorpo', 'cancro') }
    function malEstar() { analise('malEstar', 'sinusite', 'malaria', 'gripe') }
    function peleSeca() { analise('peleSeca', 'colera') }
    function perdaDePaladar() { analise('perdaDePaladar', 'covid', 'malaria') }
    function perdaDePeso() { analise('perdaDePeso', 'diabetes') }
    function queimacaoNoEstomago() { analise('queimacaoNoEstomago', 'gastrite') }
    function sangramento() { analise('sangramento', 'cancro') }
    function secrecaoNasal() { analise('secrecaoNasal', 'sinusite') }
    function sedeFrequente() { analise('sedeFrequente', 'diabetes') }
    function suoresNoturnos() { analise('suoresNoturnos', 'hiv/sida') }
    function tosseHumida() { analise('tosseHumida', 'gripe', 'sinusite') }
    function tosseSeca() { analise('tosseSeca', 'covid', 'asma', 'sinusite') }
    function tremores() { analise('tremores', 'malaria') }
    function vomito() { analise('vomito', 'malaria', 'gripe', 'gastrite') }
    function vontadeDeUrinar() { analise('vontadeDeUrinar', 'diabetes') }
    // NOTA: AO ATUALIZAR A LISTA É PRECISO ATUALIZAR TAMBÉM A LISTA-VARIÁVEL 'SINTOMAS'

}