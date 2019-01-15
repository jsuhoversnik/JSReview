console.log("Introduction to Javascript");

document.getElementById("count").onclick = function(){
    let input = document.getElementById("input").value;
    console.log("Number of B's: " + countBs(input));
}
document.getElementById("count2").onclick = function(){
    let char = document.getElementById("letter").value;
    let word = document.getElementById("word").value;
    console.log("Number of " + char + "'s: " + countChar(word,char));
}

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
    return countChar(input, "B");
}

function countChar(haystack, needle){
    let count = 0;
    for(var i =0; i < haystack.length; i++){
        if(haystack.charAt(i) === needle){
            count++;
        }
    }
    return count;
}