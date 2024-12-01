//  String Manipulation Functions:  //

function verifString(ch){
    var ok = true , len = ch.length;
    if(ch[-1]!=="."){ok = false;}
    for(let i=1;i<len;i+=2){
        if(ch[i-1]+ch[i]=="  "){ok = false;break}
    }
    return ok
}

// Reverse a String:
function reverseString(ch){
    var len = ch.length , ch1=""
    for(let i=0;i<len;i++){
        ch1 = ch[i] + ch1
    }
    return ch1
}

// Count Characters:
function countCharacters(ch){
    return ch.length
}

// Capitalize Words:
function capitalizeWords(ch){
    var x="";
    x+=ch[0]
    for(let i=1;i<ch.length;i++){
        if(ch[i-1]=" "){x+=ch[i]}
    }
    return x
}


//  Array Functions:  //

// Find Maximum and Minimum:
function min(arr){
    var len = arr.length;
    let min=arr[0];
    for(let i=1;i<len;i++){
        if(min>arr[i]){min = arr[i]}
    }
    return min
}

function Max(arr){
    var len = arr.length;
    let max=arr[0];
    for(let i=1;i<len;i++){
        if(max<arr[i]){max = arr[i]}
    }
    return max
}

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr){
    var len = arr.length , sum = 0;
    for(let i=0;i<len;i++){
        sum = sum + arr[i]
    }
    return sum
}

// Filter Array:
function filterArray(arr){
    var len=arr.length;
    let arr1= []
    for(let i=0;i<len;i++){
        if(condition){arr1.push(arr[i])}
    }
    return arr1
}


//  Mathematical Functions:  //

// Factorial:
function Factorial(nb){
    let x=1;
    if(nb == 0){return 1}
    else {
        for(let i=nb;i=1;i--){
            x*=i
        }
        return x
    }
}

// Prime Number Check:
function primeNbr(n){
    var prime = true;
    for(let i=2;i<n;i++){
        if(n % i == 0){prime = false; break}
    }
    return prime
}

// Fibonacci Sequence: F(n) = F(n-1) + F(n-2) 
function fibonacciSequence(Nth){
    var arr=[];
    arr[0] = 0 , arr[1] = 1
    for(let i=2;i<=Nth;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[Nth]
}
