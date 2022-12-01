var number=parseInt( document.getElementById("number").innerText);
console.log(number);
function inc(){
    number+=1;
    document.getElementById("number").innerText=number;
}
function dec(){
    number-=1;
    document.getElementById("number").innerText=number;
}

