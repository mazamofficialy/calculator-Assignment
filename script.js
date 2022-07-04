                  //  fonction for addimg two numbers
function add(){
    var a=document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    var c = parseFloat(a) + parseFloat(b);    
    document.getElementById('result').innerText = c
    if(a == ""){
        alert('emptyy fields')
    }
    if(b == ""){
        alert('emptyy fields')
    }
}
                      //    Fonction for subtracting two Number
function sub(){
    var a=document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    var c = parseFloat(a) - parseFloat(b);
    document.getElementById('result').innerText = c
    if(a == ""){
        alert('emptyy fields')
    }
    if(b == ""){
        alert('emptyy fields')
    }
}
                          //   Fonction for Multiply Two Number
function multi(){
    var a=document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    var c = parseFloat(a) * parseFloat(b);
    document.getElementById('result').innerText = c
    if(a == ""){
        alert('emptyy fields')
    }
    if(b == ""){
        alert('emptyy fields')
    }
}
                        //  Fonction for Dividing
function divide(){
    var a=document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    var c = parseFloat(a) / parseFloat(b);
    document.getElementById('result').innerText = c
    if(a == ""){
        alert('emptyy fields')
    }
    if(b == ""){
        alert('emptyy fields')
    }
    if(b == "0"){
        alert('logical error')
    }

}
                   // fonction for clear the Data in input and result fields
function finish(){
  document.getElementById('num1').value =""
  document.getElementById('num2').value =""
  document.getElementById('result').innerText ="00"

}