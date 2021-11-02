function changeBG(color){

    document.body.style.backgroundColor = color;
    let txt=document.getElementsByClassName("text");   //value will be stored in array form
    if(color == '#000000'){              //check if color is black
        for(let elm of txt){             //value of text will be stored into elm 
            elm.style.color="white";     //if bg is black then h1 and p color will be white
        }
     }else{
        for(let elm of txt){
            elm.style.color="black";      //else h1 and p color will be remain black
        }
    }
}