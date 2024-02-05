function input(x){
    if (document.getElementById('result').value == 0){
        document.getElementById('result').value = x;
    }

    else{
        document.getElementById('result').value += x;
    }
}

function operandCheck(){
    if(document.getElementById('operand').value == ""){
        document.getElementById('operand').value = document.getElementById('result').value;

        document.getElementById('result').value = 0;
    }

    else{
        operatorCheck();
    }
}

function operatorCheck(){

    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)){

        case 1:
            a += b;
            break;

        case 2:
            a -= b;
            break;

        case 3:
            a *= b;
            break;

        case 4:
            a /= b;
            break;
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
}

function operators(x){
    switch(x){
        case 1:
            document.getElementById('operation').value = 1;
            break;
        
        case 2:
            document.getElementById('operation').value = 2;
            break;

        case 3:
            document.getElementById('operation').value = 2;
            break;
        case 4:
            document.getElementById('operation').value = 2;
            break;

        default:
    }
}


function allClear(){
    document.getElementById('result').value = 0;
}

function plusminus(){
    let x = parseFloat(document.getElementById('result').value);

    x *= -1;

    document.getElementById('result').value = x;
}

function percent(){
    let x = parseFloat(document.getElementById('result').value);

    x *= 0.01;

    document.getElementById('result').value = x;
}

function square(){
    let x = parseFloat(document.getElementById('result').value);

    x *= x;

    document.getElementById('result').value = x;
}