let numeroA = +0;
let numeroB = +0;
let resto = +1;
let mdc = 1;

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMMC(num1, num2) {

    var resto, x, y;

    x = num1;

    y = num2;

    while(resto!=0){

      resto = x % y;

      x = y;

      y = resto;

    }

    return (num1*num2)/x;

  };

console.log("Digite 2 número e descubra qual o minimo múltiplo comum (MMC) entre eles.");

rl.question("Digite o primeiro número: ", (primeiroNumero) => {
    numeroA = +primeiroNumero;

        rl.question("Digite o segundo número: ", (segundoNumero) => {
            numeroB = +segundoNumero;

            var resultado = calcularMMC(numeroA, numeroB);

            console.log("O minimo múltiplo comum entre os dois números digitados é: "+resultado);
            
            // calculo do mdc

            console.log("Digite dois números e decubra qual o máximo divisor comum (MDC) entre eles: ");

            rl.question("Digite o primeiro número: ", function(numero1) {
              parseFloat(numero1);
              rl.question("Digite o segundo número: ", function(numero2) {
                parseFloat(numero2);
                
                let i
        let maior
        let menor

        if(numero1 > numero2) {
            maior = numero1
            menor = numero2
        } else {
            maior = numero2
            menor = numero1
        }

        i = maior
        

        i = menor

        for(i; i > 0; i--) {
            if(numero1 % i == 0 && numero2 % i ==0) {
                console.log("MDC: " + i)
                break;
            }
        }

                rl.close();
              })
            })

        })

})


