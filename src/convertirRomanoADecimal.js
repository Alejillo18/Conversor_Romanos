function convertirRomanoADecimal(array){
    let total = 0;
    let previo = 0;
    const mapValores = {
        "I": 1 ,
        "V" : 5,
        "X" :10, 
        "L" : 50, 
        "C" : 100, 
        "D" : 500, 
        "M" : 1000
    }
    //Queda mas facil si iteramos el array de atras para adelante
    for(let i = array.length -1 ; i >= 0; i--){
        const actual = mapValores[array[i]];
        if(actual >= previo){
            total += actual;
        }
        else{
            switch (actual) {
                case 1:
                    if (previo !== 5 && previo !== 10) {
                        throw new Error("Numero ingresado incorrecto: 'I' solo puede restar a 'V' y 'X'.");
                    }
                    break;
                case 10:
                    if (previo !== 50 && previo !== 100) {
                        throw new Error("Numero ingresado incorrecto: 'X' solo puede restar a 'L' y 'C'.");
                    }
                    break;
                case 100:
                    if (previo !== 500 && previo !== 1000) {
                        throw new Error("Numero ingresado incorrecto: 'C' solo puede restar a 'D' y 'M'.");
                    }
                    break;
                case 5:
                case 50:
                case 500:
                    throw new Error(`Numero ingresado incorrecto: '${array[i]}' (V, L, D) no pueden restar.`);
            }
            total -= actual;
        }
        previo = actual
    }
     return total
}

export default convertirRomanoADecimal