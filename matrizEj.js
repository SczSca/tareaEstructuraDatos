function createSimmetric2dArr(num){

    let arr = []
    for(let i = 0, k = 1; i < num; i++){
        arr[i] = []
        for(let j = 0; j < num; j++){
            arr[i][j] = k
            k++
        }
    }
    return arr
}
function mainDiagonal(arr){
    let val = ""
    for(let i = 0; i < arr.length; i++){
        val+= `${arr[i][i]} `
    }
    return val
}
function secondDiagonal(arr){
    let val = ""
    for(let i = arr.length -1, j = 0; i >= 0; i--,j++){
        val+= `${arr[i][j]} `
    }
    return val
}
function showUpMainDiagonal(arr){
    let val = ""
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr[i].length; j++) {
            val+= `${arr[i][j]} `
        }
    }
    return val
}
function showDownMainDiagonal(arr){
    let val = ""
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            val+= `${arr[i][j]} `
        }
    }
    return val
}
function showUpSecDiagonal(arr){
    let val = ""
    for(let i = 0, k = arr.length-1; i < arr.length-1 ; i++, k--){
        for(let j = 0; j < k; j++){
            val+= `${arr[i][j]} `
        }
    }
    return val
}
function showDownSecDiagonal(arr){
    let val = ""
    for(let i = 0, k = arr.length + 1 ; i < arr.length; i++, k--){
        for(let j = k - 1; j < arr[i].length; j++){
            val+= `${arr[i][j]} `
        }
    }
    return val
}
function invert2dArrMainDiagonal(arr){
    let aux
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr[i].length; j++){
            
            aux = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = aux
        }
    }
}
function invert2dArrSecDiagonal(arr){
    let aux
    for(let i = 0, k = arr.length-1; i < arr.length - 1; i++){
        for(let j = 0, l= 5 ; j < k;j++, l--){
            aux = arr[i][j]
            arr[i][j] = arr[l][k]
            arr[l][k] = aux
        }
        k--
    }
}
let matriz = createSimmetric2dArr(6)
let matrizAInvertir = createSimmetric2dArr(6)
let matrizInvSec = createSimmetric2dArr(6)
let diagonalPrincipal = mainDiagonal(matriz)
let diagonalSecundaria = secondDiagonal(matriz)
let upDiagonalPrincipal = showUpMainDiagonal(matriz)
let dowDiagonalPrincipal = showDownMainDiagonal(matriz)
let upDiagonalSec = showUpSecDiagonal(matriz)
let downDiagonalSec= showDownSecDiagonal(matriz)
invert2dArrMainDiagonal(matrizAInvertir)
invert2dArrSecDiagonal(matrizInvSec)

console.log(matriz)
console.log(diagonalPrincipal)
console.log(diagonalSecundaria)
console.log(upDiagonalPrincipal)
console.log(matrizAInvertir)
console.log(matrizInvSec)
console.log(dowDiagonalPrincipal)
console.log(upDiagonalSec)
console.log(downDiagonalSec)