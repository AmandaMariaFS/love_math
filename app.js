function Shippar(){
    var love1 = document.getElementById("love1").value.length;
    var love2 = document.getElementById("love2").value.length;
    var shipp = (love1 + love2)/2;

    console.log(love1);
    console.log(love2);
    if(love1 == 0 || love2 == 0){
        document.getElementById("porcentagem").innerHTML = " ";
        document.getElementById("heart").src = " ";
        alert("Digite dois nomes!!");
    } 
    else if (shipp <= 2){
        document.getElementById("porcentagem").innerHTML = shipp * 10 + "%";
        document.getElementById("heart").src = "img/10.png";
    } 
    else if(shipp <= 3){
        document.getElementById("porcentagem").innerHTML = shipp * 10 + "%";
        document.getElementById("heart").src = "img/25.png";
    }
    else if(shipp <=5){
        document.getElementById("porcentagem").innerHTML = shipp * 10 + "%";
        document.getElementById("heart").src = "img/50.png";
    }
    else if(shipp <=8){
        document.getElementById("porcentagem").innerHTML = shipp * 10 + "%";
        document.getElementById("heart").src = "img/75.png";
    }
    else if(shipp < 10){
        document.getElementById("porcentagem").innerHTML = shipp * 10 + "%";
        document.getElementById("heart").src = "img/90.png";
    }
    else {
        document.getElementById("porcentagem").innerHTML = shipp * 10 + "%";
        document.getElementById("heart").src = "img/100.png";
    }

}