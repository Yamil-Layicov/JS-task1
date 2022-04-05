let change = new Date().getHours();
console.log(change);

function clock(){
    if(change>6 && change<21){
        document.body.style.backgroundColor = 'red';
    }else{
        document.body.style.backgroundColor = 'black';
    }
}

clock();



