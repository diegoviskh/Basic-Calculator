let value1 = 0;
let value2 = 0;
let maxLenght = 1;
let dotIsOn = true; // Verificará se o ponto foi clicado ou não.
let signal = ""; // Armazenará o sinal temporário para realizar os cálculos.
let tempSignal = ""; // operador temporário que se apagará após clicar em um número ou no sinal de igual.

function setDefaultValue(){
    display.value = "0";
    miniDisplay.value = "";
    maxLenght = 1;
    dotIsOn = true;
    tempSignal = "";
}

function showNumber(button){
    document.getElementById(display);
    
    if(tempSignal == ""){
        if(maxLenght < 10){
            if(display.value != 0)
                display.value += button;
            else
                display.value = button
            
            maxLenght += 1;
        }
    }
    else{
        display.value = "0";
        tempSignal = "";
        if(maxLenght < 10){
            if(display.value != 0)
                display.value += button;
            else
                display.value = button
            
            maxLenght += 1;
        }
    }
}

function invertNumber(){
    display.value *= -1;
}

function convertToDecimal(){
    if(dotIsOn){
        if(display.value != 0){
        display.value += ".";
        maxLenght += 1;
        dotIsOn = false;
        }
        else{
            display.value = "0.";
            maxLenght += 2;
            dotIsOn = false;
        }
    }
}

function Operator(operator){
    document.getElementById(miniDisplay);

    value1 = parseFloat(display.value);

    tempSignal = operator; 
    signal = tempSignal;   

    switch(tempSignal){
        case 'plus': {
            miniDisplay.value = value1 + " +";
            break;
        }
        case 'less': {
            miniDisplay.value = value1 + " -";
            break;
        }
        case 'multiply': {
            miniDisplay.value = value1 + " *";
            break;
        }
        case 'divide': {
            miniDisplay.value = value1 + " /";
            break;
        }
        default: {
            console.log("Informe um operador");
            break;
        }
    }

    maxLenght = 1;
    
}

function calculate(){
    value2 = parseFloat(display.value);

    switch(signal){
        case 'plus': {
            miniDisplay.value = value1 + " + " + value2 + " =";
            display.value = value1 + value2;
            break;
        }
        case 'less': {
            miniDisplay.value = value1 + " - " + value2 + " =";
            display.value = value1 - value2;
            break;
        }
        case 'multiply': {
            miniDisplay.value = value1 + " * " + value2 + " =";
            display.value = value1 * value2;
            break;
        }
        case 'divide': {
            miniDisplay.value = value1 + " / " + value2 + " =";
            display.value = value1 / value2;
            break;
        }
        default: {
            console.log("Erro no calculo");
            break;
        }
    }

    maxLenght = 1;
    tempSignal = "";
    value1 = parseFloat(display.value);
}

// function clearLastNumber(){
//     if(maxLenght != 2){
//         display.value = display.value.substring(0,display.value.length-1);
//         // Valor 0 no primeiro parâmetro é para manter o valor inicial clicado, já o segundo parâmetro apagará apenas o último valor informado
//         maxLenght -= 1;
        
//     }
//     else
//         setDefaultValue();
// }