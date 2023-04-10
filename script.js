var arr = []

function oddsArr(arr) {
    for (i = 1; i <21; i++) {
        if( i % 2 != 0){
            }
        arr.push(i)
    }
    return arr
}
console.log(oddsArr(arr))

var arr1 = []

function divideArr(arr1) {
    for (a = 100; a > 1; a--) {
        if((a / 3) == 0){
            }
        arr1.push(a)
    }
    return arr1
}
console.log(divideArr(arr1))

var arr3=[ -3.5, -2, -0.5, 1, 2.5, 4 ]

function sequence() {
    for (b=-4; b<10; b++){
        if(b===arr3)
        arr3.push(b)
    }
    return arr3
}
console.log(sequence(arr3))

sum= 0

function sumOFALL(){
    for ( i =0; i< 101; i++){
        if(i % 1 == 0){
        sum +=i
        }    
    }
    return sum
}
console.log (sumOFALL())

var arr4= [1,2,3,4,5,6,7,8,9,10,11,12]

function factorial(){
    for ( i =0; i< arr4.length; i++){
        sum *= arr4[i]
    }
    return sum
}

console.log (factorial(arr4[i]))
