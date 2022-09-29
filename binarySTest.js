let vec1=[1,1,1,2,3,4,6,7,8,8,9,15];
let vec2=[2,5,6,7,8,9,9,9,9,9,10,11,12,13,14,15,15,16];
let b = 16;
function rankForBSearch(key, arr){
    let aux = [];
    let posicion = [];
    let arrAux = arr;  //Toma en cuenta que con esta asignación, cualquier cosa que hagas en arrAux va a modificar directamente el segundo vector que mandes, en este caso estas mandando vec1
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
        posicion[i] = mid + 1;
        for(let j = arrAux.length - 1; j >= mid + 1; j--){
            arrAux[j + 1] = arrAux[j]       //Todo esto modifica directamente arr
        }
        arrAux[mid + 1] = key[i];
    }
    aux = [arrAux,posicion];
   return aux;
}
// vec3 = rankForBSearch(vec2,vec1); si genero esto antes de querer imprimir vec1, el vec1 se iguala a vec3 Y NO ENTIENDO POR QUE
// console.log(vec3);
console.log(vec1);
console.log(vec2);
vec3 = rankForBSearch(vec2,vec1)[0];  //estas mandando vec1, llega a la función como arr y alla lo referencias como arrAux pero sigue siendo vec1
// pos = rankForBSearch(vec2, vec1)[1]; si genero esto, el vec3 se le agregan mas valores Y NO ENTIENDO POR QUE
console.log(vec3);
// console.log(pos);
