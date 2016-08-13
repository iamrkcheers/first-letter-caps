window.addEventListener("DOMContentLoaded",init);

function init()
{
    alert("Hello");
    document.getElementById("greet").addEventListener("click",post);
    document.getElementById("clear").addEventListener("click",erase);
}

function post()
{
    var x=document.getElementById("first").value;
    var y=document.getElementById("second").value;
    alert("Hi");
    
    var a=x.charAt(0).toUpperCase()+x.substring(1);
    var b=y.charAt(0).toUpperCase()+y.substring(1);
    
    document.getElementById("msg").innerHTML="Welcome"+" "+a+" "+b;
}

function erase()
{
    document.getElementById("msg").innerHTML="";
    document.getElementById("first").value="";
    document.getElementById("second").value="";
}