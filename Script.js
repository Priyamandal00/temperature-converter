function chack(){
    var i1= Number( document.getElementById("i1").value);
    var i2= Number( document.getElementById("i2").value);

if (i2==1){
    var x = (i1-32)*5/9;
    var y = x+ 273.15;
    document.getElementById("out1").textContent=x+"  \u00B0C";
    document.getElementById("out2").textContent=y+" K";
}
else if (i2==2){
    var x = (i1*9/5)+32;
    var y = (i1 + 273.15);
    document.getElementById('out1').textContent=x+" \u00B0F";
    document.getElementById("out2").textContent=y+" K";

}
else if (i2==3)
{
    var x = (i1-273.15);
    var y =(x*9/5)+32;
    document.getElementById("out1").textContent=x+"  \u00B0C";
    document.getElementById("out2").textContent=y+" \u00B0F";
}
else{
    document.getElementById("out1").textContent="";
}   
}