function convert(){
    var value = document.getElementById("inp1").value; 
    var selector1 = document.getElementById("unitSelector1").value; 
    var selector2 = document.getElementById("unitSelector2").value;
    
  if(selector1 == "Nigerian Naira" && selector2 == "United States Dollar"){
      let result = value * 0.00240668;
      inp2.value = result;
  }else if(selector1 == "Nigerian Naira" && selector2 == "Pound Sterling"){
       let result = value * 0.0017949129;
       inp2.value = result;
  }else if(selector1 == "Nigerian Naira" && selector2 == "Euro"){
       let result = value * 0.0021464705;
       inp2.value = result;
  }else if(selector1 == "Nigerian Naira" && selector2 == "Nigerian Naira"){
    let result = value;
    inp2.value = result;
  }else if(selector1 == "Nigerian Naira" && selector2 == "BTC"){
    let result = value * 0.00000006;
    inp2.value = result;
  }else if(selector1 == "Nigerian Naira" && selector2 == "ETH"){
    let result = value * 0.00000090;
    inp2.value = result;
  }else if(selector1 == "Nigerian Naira" && selector2 == "USDT"){
    let result = value * 0.00240525;
    inp2.value = result;
  }else if(selector1 == "Nigerian Naira" && selector2 == "BNB"){
    let result = value * 0.00000656;
    inp2.value = result;
  }          

  
  if(selector1 == "United States Dollar" && selector2 == "United States Dollar"){
    let result = value;
    inp2.value = result;
}else if(selector1 == "United States Dollar" && selector2 == "Pound Sterling"){
     let result = value * 0.74624442;
     inp2.value = result;
}else if(selector1 == "United States Dollar" && selector2 == "Euro"){
     let result = value * 0.89202844;
     inp2.value = result;
}else if(selector1 == "United States Dollar" && selector2 == "Nigerian Naira"){
  let result = value * 415.50945;
  inp2.value = result;
}else if(selector1 == "United States Dollar" && selector2 == "BTC"){
    let result = value * 0.00002614;
    inp2.value = result;
  }else if(selector1 == "United States Dollar" && selector2 == "ETH"){
    let result = value * 0.00037943;
    inp2.value = result;
  }else if(selector1 == "United States Dollar" && selector2 == "USDT"){
    let result = value * 0.99941426 ;
    inp2.value = result;
  }else if(selector1 == "United States Dollar" && selector2 == "BNB"){
    let result = value * 0.00272441;
    inp2.value = result;
  }     


    if(selector1 == "Pound Sterling" && selector2 == "United States Dollar"){
      let result = value * 1.34001;
      inp2.value = result;
  }else if(selector1 == "Pound Sterling" && selector2 == "Pound Sterling"){
       let result = value;
       inp2.value = result;
  }else if(selector1 == "Pound Sterling" && selector2 == "Euro"){
       let result = value * 1.1953599;
       inp2.value = result;
  }else if(selector1 == "Pound Sterling" && selector2 == "Nigerian Naira"){
    let result = value * 557.130;
    inp2.value = result;
  }else if(selector1 == "Pound Sterling" && selector2 == "BTC"){
    let result = value * 0.00003500;
    inp2.value = result;
  }else if(selector1 == "Pound Sterling" && selector2 == "ETH"){
    let result = value * 0.00050818;
    inp2.value = result;
  }else if(selector1 == "Pound Sterling" && selector2 == "USDT"){
    let result = value * 1.33942572;
    inp2.value = result;
  }else if(selector1 == "Pound Sterling" && selector2 == "BNB"){
    let result = value * 0.00365201;
    inp2.value = result;
  }     
    

  if(selector1 == "Euro" && selector2 == "United States Dollar"){
      let result = value * 1.12118;
      inp2.value = result;
  }else if(selector1 == "Euro" && selector2 == "Pound Sterling"){
       let result = value * 0.836852;
       inp2.value = result;
  }else if(selector1 == "Euro" && selector2 == "Euro"){
       let result = value;
       inp2.value = result;
  }else if(selector1 == "Euro" && selector2 == "Nigerian Naira"){
    let result = value * 465.881;
    inp2.value = result;
  }else if(selector1 == "Euro" && selector2 == "BTC"){
    let result = value * 0.00002922;
    inp2.value = result;
  }else if(selector1 == "Euro" && selector2 == "ETH"){
    let result = value * 0.00042455;
    inp2.value = result;
  }else if(selector1 == "Euro" && selector2 == "USDT"){
    let result = value * 1.11958826;
    inp2.value = result;
  }else if(selector1 == "Euro" && selector2 == "BNB"){
    let result = value * 0.00305230;
    inp2.value = result;
  }
  
  if(selector1 == "BTC" && selector2 == "United States Dollar"){
    let result = value * 38315.93;
    inp2.value = result;
}else if(selector1 == "BTC" && selector2 == "Pound Sterling"){
     let result = value * 28599.80;
     inp2.value = result;
}else if(selector1 == "BTC" && selector2 == "Euro"){
     let result = value * 34184.22;
     inp2.value = result;
}else if(selector1 == "BTC" && selector2 == "Nigerian Naira"){
  let result = value * 15904402;
  inp2.value = result;
}else if(selector1 == "BTC" && selector2 == "BTC"){
  let result = value;
  inp2.value = result;
}else if(selector1 == "BTC" && selector2 == "ETH"){
  let result = value * 14.52093098;
  inp2.value = result;
}else if(selector1 == "BTC" && selector2 == "USDT"){
  let result = value * 38334;
  inp2.value = result;
}else if(selector1 == "BTC" && selector2 == "BNB"){
  let result = value * 104.28900022;
  inp2.value = result;
}     

if(selector1 == "ETH" && selector2 == "United States Dollar"){
    let result = value * 2640.07;
    inp2.value = result;
}else if(selector1 == "ETH" && selector2 == "Pound Sterling"){
     let result = value * 1970.57;
     inp2.value = result;
}else if(selector1 == "ETH" && selector2 == "Euro"){
     let result = value * 2359.39;
     inp2.value = result;
}else if(selector1 == "ETH" && selector2 == "Nigerian Naira"){
  let result = value * 1096950;
  inp2.value = result;
}else if(selector1 == "ETH" && selector2 == "BTC"){
  let result = value * 0.06888678;
  inp2.value = result;
}else if(selector1 == "ETH" && selector2 == "ETH"){
  let result = value;
  inp2.value = result;
}else if(selector1 == "ETH" && selector2 == "USDT"){
  let result = value * 2639;
  inp2.value = result;
}else if(selector1 == "ETH" && selector2 == "BNB"){
  let result = value * 7.18250398;
  inp2.value = result;
}     

if(selector1 == "USDT" && selector2 == "United States Dollar"){
    let result = value * 1.00;
    inp2.value = result;
}else if(selector1 == "USDT" && selector2 == "Pound Sterling"){
     let result = value * 0.746852;
     inp2.value = result;
}else if(selector1 == "USDT" && selector2 == "Euro"){
     let result = value * 0.893494;
     inp2.value = result;
}else if(selector1 == "USDT" && selector2 == "Nigerian Naira"){
  let result = value * 415.68;
  inp2.value = result;
}else if(selector1 == "USDT" && selector2 == "BTC"){
  let result = value * 0.00002609;
  inp2.value = result;
}else if(selector1 == "USDT" && selector2 == "ETH"){
  let result = value * 0.00037864;
  inp2.value = result;
}else if(selector1 == "USDT" && selector2 == "USDT"){
  let result = value;
  inp2.value = result;
}else if(selector1 == "USDT" && selector2 == "BNB"){
  let result = value * 0.00272385;
  inp2.value = result;
}     

if(selector1 == "BNB" && selector2 == "United States Dollar"){
    let result = value * 367.24;
    inp2.value = result;
}else if(selector1 == "BNB" && selector2 == "Pound Sterling"){
     let result = value * 274.15;
     inp2.value = result;
}else if(selector1 == "BNB" && selector2 == "Euro"){
     let result = value * 327.91;
     inp2.value = result;
}else if(selector1 == "BNB" && selector2 == "Nigerian Naira"){
  let result = value * 152590;
  inp2.value = result;
}else if(selector1 == "BNB" && selector2 == "BTC"){
  let result = value * 0.00958177;
  inp2.value = result;
}else if(selector1 == "BNB" && selector2 == "ETH"){
  let result = value * 0.13904724;
  inp2.value = result;
}else if(selector1 == "BNB" && selector2 == "USDT"){
  let result = value * 367.34421040;
  inp2.value = result;
}else if(selector1 == "BNB" && selector2 == "BNB"){
  let result = value;
  inp2.value = result;
}     
}
