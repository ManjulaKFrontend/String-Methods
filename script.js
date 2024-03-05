

 //string length


 function length(){


    var length=document.getElementById("length").value;
    var lengthresult="length:" + length.length;
    document.getElementById("lengthresult").innerHTML=lengthresult;
 }


//concatenation
function concate(){
    let a=document.getElementById("firstname").value;
    let b=document.getElementById("secondname").value;
     let output=a.concat(b);
     document.getElementById("concat").innerHTML=output;
  }




//uppercase


function uppercasemethod(){

    var uppercase=document.getElementById("uppercase").value;
    var uppercaseresult="uppercase:" + uppercase.toUpperCase();
    document.getElementById("uppercaseresult").innerHTML= uppercaseresult;
}

///lowercase


function lowercase(){

    var lowercase=document.getElementById("lowercase").value;
    var lowercaseresult="lowercase:" + lowercase.toLowerCase();
    document.getElementById("lowercaseresult").innerHTML= lowercaseresult;
}

//uppercase
function uppercase(){

    var uppercase=document.getElementById("uppercase").value;
    var uppercaseresult="uppercase:" + uppercase.toUpperCase();
    document.getElementById("uppercaseresult").innerHTML= uppercaseresult;
}
//string slice

let cut = document.getElementById("sliceresult").onclick = function () {
    cut = document.getElementById("slice").value;
    value1 = document.getElementById("slice1").value;
    value2 = document.getElementById("slice2").value;
    
    if(value2 == ""){
        document.getElementById("strslice").innerHTML = cut.slice(value1);
    }else{
        document.getElementById("strslice").innerHTML = cut.slice(value1, value2);
    }
}
// stubstring
let sub = document.getElementById("substringresult").onclick = function () {
    sub = document.getElementById("substring").value;
    value1 = document.getElementById("subs1").value;
    value2 = document.getElementById("subs2").value;
    
    if(value2 == ""){
        document.getElementById("strsub").innerHTML = sub.substring(value1);
    }else{
        document.getElementById("strsub").innerHTML = sub.substring(value1, value2);
    }
}
//sub str

let ss = document.getElementById("valuebtn3").onclick = function(){
    ss = document.getElementById("substr").value;
    value1 = document.getElementById("ss1").value;
    value2 = document.getElementById("ss2").value;

    if(value2 == ""){
        document.getElementById("substr").innerHTML = sub.substring(value1);
    }else{
        document.getElementById("substr").innerHTML = sub.substring(value1, value2);
    }
}
//replace

let change = document.getElementById('valuebtn4').onclick = function(){
    change = document.getElementById('replace').value;
    tochange = document.getElementById("toreplace").value;
    revalue = document.getElementById("revalue").value;
    document.getElementById("strreplace").innerHTML = change.replace(tochange,revalue);
}

//replaceall
let changeAll = document.getElementById('valuebtn5').onclick = function(){
    changeAll = document.getElementById('replaceAll').value;
    tochange = document.getElementById("toreplaceAll").value;
    revalue = document.getElementById("revalueAll").value;
    document.getElementById("strreplaceAll").innerHTML = changeAll.replaceAll(tochange,revalue);
}
//split
let value = document.getElementById("valuebtn15").onclick = function(){
    value = document.getElementById("split").value;
    const comma = value.split(",");
    myArray = document.getElementById("spliting").value;
    document.getElementById("strsplit").innerHTML = comma[myArray];
}

//charAt

let char = document.getElementById("charatresult").onclick = function(){
    char = document.getElementById("charAt").value;
    value = document.getElementById("char").value;
    document.getElementById("strchar").innerHTML = char.charAt(value);
}



//padstart
let padS = document.getElementById("padsresult").onclick = function(){
    padS = document.getElementById("padStart").value;
    value1 = document.getElementById("padlen1").value;
    value2 = document.getElementById("padS").value;
    document.getElementById("strPadS").innerHTML = padS.padStart(value2, value1);
}
//padend

let padE = document.getElementById("paderesult").onclick = function(){
    padE = document.getElementById("padEnd").value;
    value1 = document.getElementById("padlen2").value;
    value2 = document.getElementById("padE").value;
    document.getElementById("strPadE").innerHTML = padE.padEnd(value2, value1);
}
//trim
let short = document.getElementById("trimresult").onclick = function(){
    short = document.getElementById("trim").value;
    document.getElementById("strtrim").innerHTML = short.trim();
}
//trimstart
let TrimS = document.getElementById("trimsresult").onclick = function(){
    TrimS = document.getElementById("trimStart").value;
    document.getElementById("strtrimS").innerHTML = TrimS.trimStart();
}
//trimend


let TrimE = document.getElementById("trimeresult").onclick = function(){
    TrimE = document.getElementById("trimEnd").value;
    document.getElementById("strtrimE").innerHTML = TrimE.trimEnd();
}
//repeat

function repeatString() {
  
    var userInput = document.getElementById("repeatString").value;

 
    var repeatCount = document.getElementById("repeatCount").value;

    var repeatedString = userInput.repeat(repeatCount);

 
    document.getElementById("result").innerHTML = "" + repeatedString;

}
//indexof
function indexof() {
   
    var userInput = document.getElementById("inputString").value;

    
    var substringToFind = document.getElementById("substringToFind").value;

  
    var indexOfSubstring = userInput.indexOf(substringToFind);

 
    if (indexOfSubstring !== -1) {
        document.getElementById("indexofresult").innerHTML = " " + indexOfSubstring;
    } else {
        document.getElementById("indexofresult").innerHTML = "";
    }
}
//lastindexof








