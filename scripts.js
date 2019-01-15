console.log("Introduction to Javascript");

function fizzBuzz(){

    for(var i = 1; i <=100; i++){
        let result = "";

        if(i % 3 === 0 || i % 5 === 0){
            if(i % 3 === 0) {
                result += "Fizz";
            }
            if (i % 5 === 0){
                result += "Buzz";
            }
        }else{
            result += i;
        }
        console.log(result);
    }
}

//take a string argument and count the number of B's used
function countBs(input){
    let count = 0;
    for(var i =0; i < input.length; i++){
        if(input.charAt(i) == "B"){
            count++;
        }
    }
    //console.log(count);
    return count;
}