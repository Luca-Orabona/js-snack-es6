/**
 * Ritorna un nuovo array con i valori che si trovano tra i due numeri specificati (inclusi),
 * usando i loro indici all'interno dell'array originale.
 *
 * @param {Array} array - L'array da cui estrarre i valori.
 * @param {number} a - Primo valore (presente nell'array).
 * @param {number} b - Secondo valore (presente nell'array).
 * @returns {Array} - Un array con i valori tra gli indici di a e b.
 */
function valoriCompresiTra2Num(array, a, b) {
    const indexA = array.indexOf(a);
    const indexB = array.indexOf(b);

    if (indexA === -1 || indexB === -1) {
        // Uno dei due valori non è nell'array
        return [];
    }

    // intervallo corretto, dal più piccolo al più grande
    const start = Math.min(indexA, indexB);
    const end = Math.max(indexA, indexB);

    const newArray = [];

    for (let i = start; i <= end; i++) {
        newArray.push(array[i]);
    }

    return newArray;
}


const num = [1, 2, 3, 20, 11, 6, 14, 56, 89];
console.log(valoriCompresiTra2Num(num, 11, 89)); 

