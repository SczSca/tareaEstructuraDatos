let vec1=[1,1,1,2,2,2,3,4,6,7,8,8,9,10,15];
let vec2=[2,5,6,7,8,9,9,9,9,9,10,11,12,13,14,15,15,16,22,23,28];

function createNeat3rdArr(arr, arr2){ //WHERE arr2 is the longest
    let arr3 = [];
    let arr3Length = arr.length + arr2.length;
    for(let i = 0, j = 0, k = 0; i < arr3Length; i++){
        if(arr[j] == arr2[k]){
            arr3[i] = arr[j];
            i++;
            arr3[i] = arr2[k];
            j++;
            k++;
        }
        else if(arr[j] > arr2[k]){
            arr3[i] = arr2[k];
            k++;
            
        }
        else if(arr2[k] > arr[j]){
            arr3[i] = arr[j];
            j++;
        }
        else if(arr[j] == undefined){
            arr3[i] = arr2[k];
            k++;
        }
        else if(arr2[k] == undefined){
            arr3[i] = arr[j];
            j++;
        }
    }
    return arr3;
}
console.log(createNeat3rdArr(vec1, vec2));  //[1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9, 9, 10, 10, 11, 12, 13, 14, 15, 15, 15, 16, 22, 23, 28]
console.log(vec1);
console.log(vec2);
