
//שאלה 1
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Mission1(arr){
    const array2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            array2.push(arr[i]);
        }       
    }
    console.log(array2);
     
}
Mission1(array1)

//שאלה 2

function mission2(str){
    const strSplit = str.split(" ");
    let temp = 0;
    for(let i = 0; i < strSplit.length; i++)
    {
        if(strSplit[i].length === 4){
            temp ++;
        }
    }
    return temp; 
}
let sen = "Test for exercise number 2, I think it went well"
console.log(mission2(sen));

//שאלה 3
const array4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function Mission3(arr) {
    const array3 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            array3.push(arr[i][j]);
        }
    }
    return array3;
}
console.log(Mission3(array4)); 

//שאלה 4

function Mission4(keyArr, valueArr){
    let array6 = {};
    for (let i = 0; i < keyArr.length; i++) {
        array6[keys[i]] = valueArr[i];
    }
    return array6;
}

  // דוגמה לשימוש:
  const keys = ['name', 'age', 'city'];
  const values = ['Alice', 22, 'Gan Yavne'];
  console.log(Mission4(keys, values)); 
  