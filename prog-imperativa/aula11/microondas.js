function microondas(opcao,tempo){
    var tempoPadrao;
    var prato;
    switch (opcao) {
        case 1: 
            tempoPadrao=10;
            prato='Pipoca';
            break;
        case 2: 
            tempoPadrao=8;
            prato='Macarrão';
            break;
        case 3: 
            tempoPadrao=15;
            prato='Carne';
            break;
        case 4: 
            tempoPadrao=12;
            prato='Feijão';
            break;
        case 5: 
            tempoPadrao=8;
            prato='Brigadeiro';
            break;
        default:
            tempoPadrao=0;
            prato='Prato inexistente!';
    }


if (tempo>tempoPadrao*2)
{
    console.log('O prato',prato,'queimou!!!!');
}
if (tempo<tempoPadrao)
{
    console.log('Tempo insuficiente para fazer',prato);
}
if (tempo>tempoPadrao*3)
{
    console.log('KABUMM!!!!');
}
if (tempo==tempoPadrao) 
{
    console.log('O prato',prato,'está pronto! Bom apetite!');
}
}

//microondas(1,10);
//microondas(1,20);
//microondas(1,8);
microondas(1, 10);