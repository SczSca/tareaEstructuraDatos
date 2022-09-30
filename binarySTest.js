let vec1=[1,1,1,2,3,4,6,7,8,8,9,15];
let vec2=[2,5,6,7,8,9,9,9,9,9,10,11,12,13,14,15,15,16];
let b = 16;
function rankForBSearch(key, arr){
    let aux = [];
    let posicion = [];
    let arrAux = [...arr]; // == let arrAux = arr; pero sin modificar al original
    for(let i= 0; i< key.length;i++){
        let lo = 0;
        let hi = arrAux.length - 1;
        let mid = 0;
        while(lo <= hi){
            mid = Math.floor(lo + (hi - lo) / 2);
            if(arrAux[mid] > key[i]){
                hi = mid - 1;
            }
            else if(arrAux[mid] < key[i]){
                lo = mid + 1;
            }
            else hi --;

        }
        posicion[i] = mid ;
        for(let j = arrAux.length - 1; j >= mid ; j--){
            arrAux[j + 1] = arrAux[j];
        }
        arrAux[mid] = key[i];
    }
    aux = [arrAux,posicion];
   return aux;
}
vec3 = rankForBSearch(vec2,vec1); 
console.log(vec1);
console.log(vec2);
vec3 = rankForBSearch(vec2,vec1)[0];
pos = rankForBSearch(vec2, vec1)[1]; 
console.log(vec3); //output [1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9, 9, 10, 11, 12, 13, 14, 15, 15, 16, 15] ERROR EN ULTIMO VALOR DE ARR2 SE INTRODUCE EN PENULTIMA
console.log(pos); //[3, 7, 8, 10, 12, 15, 15, 15, 15, 15, 21, 22, 23, 24, 25, 26, 26, 28] <- indice 28 es donde se introduce el valor 16
