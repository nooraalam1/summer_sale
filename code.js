let total = 0;

function btnClick(data){
 
    let x=data.parentNode.childNodes[1].innerText
    let y= parseFloat(data.parentNode.childNodes[3].innerText.split(" ")[0]);

 
    
    let a = document.getElementById("appendC")
    let b = document.createElement("p");
    b.innerText = x;
    a.appendChild(b);

    let k = document.getElementById("totalP");
    total = total+y;
    k.innerText = total;
   
    
    if(total>0){
        document.getElementById("purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("purchase").setAttribute("disabled",true);
    }


   
    if(total >= 200){
        document.getElementById("coupon").removeAttribute("disabled");

    }
    else{
        document.getElementById("coupon").setAttribute("disabled",true);
    }

    
}

function Coupon(data){
    let man = (document.getElementById("inputCoupon").value);
    if(man === "SELL200"){
        let disc = parseFloat(total*(.20));
    
        
        let disSent = document.getElementById("discount");
        disSent.innerText = disc;

        let final = parseFloat(total - disc);
       let fiVal = document.getElementById("total");
       fiVal.innerText = final;
    }
    
}