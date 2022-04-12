function hexColor(){

    let code =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    let color = "#";

    for(let i = 0; i< 6; i++ ){
        let num = Math.round(Math.random() * 15);
        let num2 = code[num];
        color += num2; 
        console.log(color);
    };
    
    document.getElementById('container') .style.backgroundColor = color;
    document.getElementById ('code') . style.color = color;
    document.getElementById('code') .innerHTML=color;
};

