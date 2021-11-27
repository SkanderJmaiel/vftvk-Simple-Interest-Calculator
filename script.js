
function compute(event)
{   


    var p = document.getElementById("principal").value;
    if(p<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{


    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    result.innerHTML= "If you deposit <mark>"+p+"</mark><br/> at and interest rate of <mark>"+rate+"</mark>. <br/> You will receive an amount of <mark>"+interest+"</mark>,<br/> in the year<mark>"+year+"</mark>";
    }

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
