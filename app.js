var start = prompt("Enter the start: ");
var startNum = parseInt(start);

var end = prompt ("Enter the end: ");
var endNum = parseInt(end);


var step = prompt("Enter the step: ");
var stepNum = parseInt(step);
// let absStepNum=Math.abs(stepNum);

//make a LIST
var outputNum = [];
var outputDecNum=[];

// make array for SUM
var array=outputNum;


//make array
if (stepNum ===0 || isNaN(stepNum)) {
    output1.innerHTML='<p>'+'Invalid integer input, please reload and try again'+'</p>';
}else if(stepNum>0){
    for (let i = startNum; i <= endNum; i += stepNum){
        outputNum.push(i);
    };
    
    var sum = array.reduceRight(function(a,b){
        return a+b;
    },0);
    
    var toBinary =  function (decNum){
        return parseInt(decNum,10).toString(2);
    };
    for (let decNum of outputNum) {
    outputDecNum.push(toBinary(decNum));
    };    
    
    output1.innerHTML='<p>'+`The generated array is ${outputNum.join(',')}`+'</p>';
    output2.innerHTML='<p>'+`The sum is ${sum}`+'<p>';
    output3.innerHTML='<p>'+`The binary of abolut element values are: ${outputDecNum.join(',')}`+'</p>';
}else{
    for (let i = startNum; i >= endNum; i += stepNum){
        outputNum.push(i);
    };
   
    var sum = array.reduceRight(function(a,b){
        return a+b;
    },0);
    
    var toBinary =  function (decNum){
        return parseInt(decNum,10).toString(2);
    };
    for (let decNum of outputNum) {
    outputDecNum.push(toBinary(decNum));
    };    
    
    output1.innerHTML='<p>'+`The generated array is ${outputNum.join(',')}`+'</p>';
    output2.innerHTML='<p>'+`The sum is ${sum}`+'<p>';
    output3.innerHTML='<p>'+`The binary of abolut element values are: ${outputDecNum.join(',')}`+'</p>';
};



// sum array
// var sum = array.reduceRight(function(a,b){
//     return a+b;
// },0);

// output2.innerHTML='<p>'+`The sum is ${sum}`+'<p>';



//binary 

// var toBinary =  function (decNum){
//     return parseInt(decNum,10).toString(2);
// };
// for (let decNum of outputNum) {
// outputDecNum.push(toBinary(decNum));
// };

// output3.innerHTML='<p>'+`The binary of abolut element values are: ${outputDecNum.join(',')}`+'</p>';
// console.log(outputDecNum);




// for (decNum of outputNum) {
//     var toBinary =  function (decNum){
//         return parseInt(decNum,10).toString(2);
//     };
//     outputDecNum.push(decNum);
// };
// console.log(toBinary(outputDecNum));
