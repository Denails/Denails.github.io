let Prelim;
let Midterm;
let Prefinal;
let FinalG;

let PercentPrelim;
let PercentMidterm;
let PercentPrefinal;
let PercentFinal;

let PercentPrelim1;
let PercentMidterm1;
let PercentPrefinal1;
let PercentFinal1;



document.getElementById("Submit").onclick = function(){
    
    

    PercentPrelim = document.getElementById("Percent1").value;
    PercentPrelim = Number(PercentPrelim);
    PercentPrelim /= 100;
    PercentMidterm = document.getElementById("Percent2").value;
    PercentMidterm = Number(PercentMidterm);
    PercentMidterm /= 100;
    
    PercentPrefinal = document.getElementById("Percent3").value;
    PercentPrefinal = Number(PercentPrefinal);
    PercentPrefinal /= 100;

    PercentFinal = document.getElementById("Percent4").value;
    PercentFinal = Number(PercentFinal);
    PercentFinal /= 100;
    
    
    
    PercentPrelim1 = PercentPrelim.toFixed(2);
    PercentPrelim1 = Number(PercentPrelim1);
    PercentMidterm1 = PercentMidterm.toFixed(2);
    PercentMidterm1 = Number(PercentMidterm1);
    PercentPrefinal1 = PercentPrefinal.toFixed(2);
    PercentPrefinal1 = Number(PercentPrefinal1);
    PercentFinal1 = PercentFinal.toFixed(2);
    PercentFinal1 = Number(PercentFinal1);


    Prelim = document.getElementById("PreLim").value;
    Prelim = Number(Prelim);
    Midterm = document.getElementById("Midterm").value;
    Midterm = Number(Midterm);
    Prefinal = document.getElementById("Pre-Final").value;
    Prefinal = Number(Prefinal);
    FinalG = document.getElementById("Final").value;
    FinalG = Number(FinalG);
    
    let test1;
    test1 = Number(test1);
    let test2;
    test2 = Number(test2);
    let test3;
    test3 = Number(test3);
    let test4;
    test4 = Number(test4);


    
    
        
    let wow = 360;
    wow = Number(wow);
    
        
    

    if(FinalG === 0) {
        
        FinalG = Prelim + Midterm + Prefinal;

        test1 = Prelim * PercentPrelim1;
        test2 = Midterm * PercentMidterm1;
        test3 = Prefinal * PercentPrefinal1;

        let Final;
        Final = Number(Final);
        
        Final = wow - FinalG;
        

        test4 = Final * PercentFinal1;

        let result = test1 + test2 + test3 + test4;
        result = Number(result).toFixed(2);
        
        
    
        document.getElementById("text1").textContent = `  Prelim: ${ Prelim
        }    ______________     Prelim%: ${PercentPrelim1 *= 100}%`
        document.getElementById("text2").textContent = ` Midterm: ${ Midterm
        }    ______________     Midterm%: ${PercentMidterm1 *= 100}%`
        document.getElementById("text3").textContent = ` Pre-Final: ${ Prefinal
        }    ______________     Pre-Final;%: ${PercentPrefinal1 *= 100}%`
        document.getElementById("text4").textContent = ` (Needed Grade)Final: ${ Final
        }    ______________     Final%: ${PercentFinal1 *= 100}%`
        document.getElementById("text5").textContent = `Average: ${ result
        }`
    } else{
    
    test1 = Prelim * PercentPrelim1;
    test2 = Midterm * PercentMidterm1;
    test3 = Prefinal * PercentPrefinal1;
    test4 =  FinalG * PercentFinal1;

    

    let result = test1 + test2 + test3 + test4;
    result = Number(result).toFixed(2);
    

    document.getElementById("text1").textContent = `  Prelim: ${ Prelim
    }    ______________     Prelim%: ${PercentPrelim1 *= 100}%`
    document.getElementById("text2").textContent = ` Midterm: ${ Midterm
    }    ______________     Midterm%: ${PercentMidterm1 *= 100}%`
    document.getElementById("text3").textContent = ` Pre-Final: ${ Prefinal
    }    ______________     Pre-Final;%: ${PercentPrefinal1 *= 100}%`
    document.getElementById("text4").textContent = ` Final: ${ FinalG
    }    ______________     Final%: ${PercentFinal1 *= 100}%`
    document.getElementById("text5").textContent = `Average: ${ result
    }`

}
}
