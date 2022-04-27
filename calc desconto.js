function calculateDiscount(name, value, isFirstPurchase, isCashPayment)

if(isFirstPurchase && isCashPayment){

    if(value > 1000){}
    else if(value < 500){}
    else{}
}

if(isFirstPurchase && !isCashPayment){
  
    if(value > 1000){}
    else if(value < 500){}
    else{}
}

if(!isFirstPurchase && isCashPayment){
  
    if(value > 1000){}
    else if(value < 500){}
    else{}
}

if(!isFirstPurchase && !isCashPayment){

    if(value > 1000){}
    else if(value < 500){
      Math.random() * (20 - 10) + 10;
    }
    else{}
}